import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TerminalFeature = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([
        { type: 'output', content: 'Welcome to Yashwanth\'s Portfolio Terminal v1.0.0' },
        { type: 'output', content: 'Type "help" to see available commands.' }
    ]);

    const commands = {
        help: 'Available commands: about, skills, contact, clear, exit',
        about: 'Yashwanth Patam - Java Developer specializing in Spring Boot and Backend Architectures.',
        skills: 'Java, Spring Boot, MongoDB, Vercel, Render, React, Tailwind CSS.',
        contact: 'Email: yashwanthp2335.sse@saveetha.com | GitHub: https://github.com/yashuroy08',
        clear: 'clear',
        exit: 'exit'
    };

    const handleCommand = (e) => {
        if (e.key === 'Enter') {
            const trimmedInput = input.trim().toLowerCase();
            const newHistory = [...history, { type: 'input', content: input }];

            if (trimmedInput === 'clear') {
                setHistory([]);
            } else if (trimmedInput === 'exit') {
                setIsOpen(false);
            } else if (commands[trimmedInput]) {
                newHistory.push({ type: 'output', content: commands[trimmedInput] });
                setHistory(newHistory);
            } else if (trimmedInput !== '') {
                newHistory.push({ type: 'output', content: `Command not found: ${trimmedInput}. Type "help" for options.` });
                setHistory(newHistory);
            }

            setInput('');
        }
    };

    return (
        <>
            {/* Terminal Trigger Button */}
            <motion.button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-8 left-8 z-50 p-4 bg-primary border border-accent/30 rounded-full shadow-[0_0_20px_rgba(var(--color-accent),0.2)] hover:border-accent transition-all group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent group-hover:rotate-12 transition-transform">
                    <polyline points="4 17 10 11 4 5"></polyline>
                    <line x1="12" y1="19" x2="20" y2="19"></line>
                </svg>
            </motion.button>

            {/* Terminal Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="fixed inset-0 md:inset-auto md:bottom-24 md:left-8 md:w-[500px] md:h-[400px] z-[60] bg-[#0c0c0c] border border-accent/20 rounded-lg shadow-2xl flex flex-col font-mono overflow-hidden"
                    >
                        {/* Title Bar */}
                        <div className="bg-primary/80 px-4 py-2 border-b border-accent/10 flex items-center justify-between">
                            <span className="text-xs text-muted">terminal — yashwanth_portfolio</span>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="hover:text-white text-muted transition-colors"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                            </button>
                        </div>

                        {/* Content Area */}
                        <div className="flex-1 p-4 overflow-y-auto text-sm text-accent/80 scrollbar-hide">
                            {history.map((line, i) => (
                                <div key={i} className="mb-2">
                                    {line.type === 'input' ? (
                                        <div className="flex">
                                            <span className="text-green-500 mr-2">yash@portfolio:~$</span>
                                            <span>{line.content}</span>
                                        </div>
                                    ) : (
                                        <div className="text-muted leading-relaxed whitespace-pre-wrap">{line.content}</div>
                                    )}
                                </div>
                            ))}

                            <div className="flex items-center">
                                <span className="text-green-400 mr-2">yash@portfolio:~$</span>
                                <input
                                    autoFocus
                                    className="bg-transparent border-none outline-none flex-1 text-accent caret-accent"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={handleCommand}
                                />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default TerminalFeature;
