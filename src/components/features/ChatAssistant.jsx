import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GoogleGenAI } from '@google/genai';

const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
let ai;
if (apiKey) {
  ai = new GoogleGenAI({ apiKey: apiKey });
}

export default function ChatAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'INITIATING SYSTEM... Hello! I am ZORO, Yashwanth\'s AI Assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [chatSession, setChatSession] = useState(null);
  const [requestCount, setRequestCount] = useState(0);
  const messagesEndRef = useRef(null);

  const SUGGESTIONS = [
    "What's your tech stack?",
    "Tell me about your projects.",
    "Who are you, Zoro?",
    "Are you open to work?"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  useEffect(() => {
    const handleOpenZoro = () => {
      setIsOpen(true);
    };
    window.addEventListener('open-zoro', handleOpenZoro);
    return () => window.removeEventListener('open-zoro', handleOpenZoro);
  }, []);

  useEffect(() => {
    if (!sessionStorage.getItem('zoroTooltipShown')) {
      setShowTooltip(true);
      sessionStorage.setItem('zoroTooltipShown', 'true');
      
      const timer = setTimeout(() => setShowTooltip(false), 8000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (ai && !chatSession) {
      try {
        const session = ai.chats.create({
          model: 'gemini-2.5-flash',
          config: {
            systemInstruction: "You are ZORO, the AI Assistant for Yashwanth's portfolio website. You are confident, cool, and a bit edgy like Roronoa Zoro from One Piece. CRITICAL RULES: 1. ONLY answer questions related to Yashwanth's portfolio, skills (Java, Spring Boot, React, etc.), projects, OR about yourself as Zoro from One Piece. 2. NEVER mention or discuss any other anime. If asked about other anime, deflect by saying you only care about becoming the greatest swordsman and helping Yashwanth. 3. Be brief, concise, and professional enough for a portfolio. No markdown headers, just plain text with occasional bolding.",
            temperature: 0.7
          }
        });
        setChatSession(session);
      } catch (e) {
        console.error("Failed to initialize ZORO chat session:", e);
      }
    }
  }, []);

  useEffect(() => {
    const wrapper = document.getElementById('main-portfolio-wrapper');
    const header = document.getElementById('main-header');
    
    if (wrapper && header) {
      wrapper.style.transition = 'padding-right 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
      header.style.transition = 'right 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
      
      if (isOpen && window.innerWidth >= 768) {
        // md:w-96 is 384px
        wrapper.style.paddingRight = '384px';
        header.style.right = '384px';
      } else {
        wrapper.style.paddingRight = '0px';
        header.style.right = '0px';
      }
    }
  }, [isOpen]);

  const handleSend = async (e, forcedInput = null) => {
    if (e) e.preventDefault();
    
    const userMsg = forcedInput || input;
    if (!userMsg.trim()) return;

    if (requestCount >= 4) {
      setMessages(prev => [...prev, { role: 'bot', text: "SYSTEM LIMIT REACHED: You've exhausted your haki (4/4 requests). Let me rest." }]);
      return;
    }

    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsTyping(true);
    setRequestCount(prev => prev + 1);

    if (chatSession) {
      try {
        const response = await chatSession.sendMessage({ message: userMsg });
        setMessages(prev => [...prev, { role: 'bot', text: response.text }]);
      } catch (error) {
        console.error("AI Error:", error);
        setMessages(prev => [...prev, { role: 'bot', text: "ERROR: Communication link severed. (Check console for details)" }]);
      }
    } else {
      setTimeout(() => {
        setMessages(prev => [...prev, { role: 'bot', text: "ERROR: Missing VITE_GEMINI_API_KEY in .env file. I am operating without true intelligence right now." }]);
      }, 1000);
    }
    setIsTyping(false);
  };

  return (
    <div className="fixed top-0 right-0 h-screen z-50 hidden md:block pointer-events-none">
      
      {/* Tooltip */}
      <AnimatePresence>
        {!isOpen && showTooltip && (
          <motion.div 
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="absolute top-1/2 -translate-y-1/2 right-20 mr-2 pointer-events-none whitespace-nowrap"
          >
            <span className="font-mono text-[10px] sm:text-xs tracking-widest text-muted font-bold uppercase bg-primary px-2 py-1 border-2 border-border-strong shadow-[-4px_4px_0px_var(--color-border-strong)]">
              Interact with Zoro <span className="text-red ml-1">→</span>
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cyberpunk Side-Tab Toggle Button */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setShowTooltip(false);
        }}
        className={`absolute top-1/2 -translate-y-1/2 right-0 bg-primary border-y-2 border-l-2 border-border-strong flex flex-col items-center justify-center py-6 px-3 transition-all duration-300 z-40 hover:bg-red group pointer-events-auto ${isOpen ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100 shadow-[-4px_4px_0px_var(--color-border-strong)] hover:-translate-x-1 hover:shadow-[-8px_4px_0px_var(--color-border-strong)]'}`}
        title="Ask Zoro"
      >
        <img 
          src="/zoro-to-svgrepo-com.svg" 
          alt="Zoro" 
          className="w-10 h-10 object-contain mb-4 transition-all group-hover:invert-0 group-hover:brightness-200" 
          style={{ filter: 'invert(100%)' }}
        />
        <div 
          className="font-mono text-sm font-bold tracking-widest text-accent group-hover:text-white transition-colors uppercase"
          style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        >
          Ask Zoro
        </div>
      </button>

      {/* Main Drawer Frame */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 150 }}
            className="absolute right-0 top-0 w-80 md:w-96 bg-primary border-l-2 border-border-strong flex flex-col shadow-[-12px_0px_0px_var(--color-border-strong)] overflow-hidden pointer-events-auto h-screen"
          >
            {/* CRT Scanline Overlay */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-20 z-0" 
              style={{
                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))',
                backgroundSize: '100% 4px, 3px 100%'
              }}
            />

            {/* Header */}
            <div className="bg-border-strong text-primary p-4 flex justify-between items-center font-mono text-sm font-bold tracking-widest relative z-10 border-b-2 border-border-strong">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-red rounded-full animate-pulse shadow-[0_0_8px_var(--color-red)]"></span>
                <span>ZORO // ONLINE</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-1.5 bg-red text-white hover:bg-primary hover:text-border-strong transition-all px-3 py-1 border-2 border-white hover:border-border-strong font-mono text-xs font-bold shadow-[-2px_2px_0px_white] hover:shadow-[-2px_2px_0px_var(--color-border-strong)]"
              >
                <span>CLOSE</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 font-mono text-xs relative z-10">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div 
                    className={`max-w-[85%] p-3 ${
                      msg.role === 'user' 
                        ? 'bg-accent text-primary' 
                        : 'bg-red/10 border-l-2 border-red text-light shadow-[4px_4px_0px_var(--color-border-strong)]'
                    }`}
                  >
                    <div className="opacity-60 text-[10px] mb-1">{msg.role === 'user' ? 'USR_CMD>' : 'ZORO_SYS>'}</div>
                    <div className="leading-relaxed">{msg.text}</div>
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="max-w-[85%] p-3 bg-red/10 border-l-2 border-red text-light shadow-[4px_4px_0px_var(--color-border-strong)]">
                    <div className="opacity-60 text-[10px] mb-1">{"ZORO_SYS>"}</div>
                    <div className="flex items-center gap-1 h-4">
                      <span className="w-1.5 h-1.5 bg-red animate-bounce rounded-full" style={{ animationDelay: '0ms' }}></span>
                      <span className="w-1.5 h-1.5 bg-red animate-bounce rounded-full" style={{ animationDelay: '150ms' }}></span>
                      <span className="w-1.5 h-1.5 bg-red animate-bounce rounded-full" style={{ animationDelay: '300ms' }}></span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions */}
            {requestCount < 4 && messages.length < 4 && !isTyping && (
              <div className="flex flex-wrap gap-2 px-4 pb-4 font-mono text-[10px] relative z-10 mt-auto">
                {SUGGESTIONS.map((s, i) => (
                  <button 
                    key={i} 
                    onClick={() => handleSend(null, s)}
                    className="bg-primary border-2 border-border-strong text-muted px-2 py-1.5 hover:bg-red hover:text-white hover:border-red hover:-translate-y-0.5 hover:shadow-[2px_2px_0px_var(--color-red)] transition-all text-left"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Input Form */}
            <form onSubmit={handleSend} className="border-t-2 border-border-strong p-4 flex gap-2 bg-primary relative z-10 pb-6">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="EXECUTE COMMAND..."
                className="flex-1 bg-transparent border-2 border-border-strong p-3 font-mono text-xs text-light focus:outline-none focus:border-red focus:shadow-[2px_2px_0px_var(--color-red)] transition-all"
              />
              <button 
                type="submit"
                disabled={!input.trim() || isTyping}
                className="bg-red text-primary px-5 font-mono text-xs font-bold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-light hover:shadow-[4px_4px_0px_var(--color-border-strong)] transition-all border-2 border-transparent hover:border-border-strong"
              >
                SEND
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
