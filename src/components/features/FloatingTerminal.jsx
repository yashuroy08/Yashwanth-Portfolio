import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

const GitHubStats = () => {
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [queryTime, setQueryTime] = useState(0);

    useEffect(() => {
        const fetchStats = async () => {
            const start = performance.now();
            try {
                const [userRes, reposRes] = await Promise.all([
                    fetch('https://api.github.com/users/yashuroy08'),
                    fetch('https://api.github.com/users/yashuroy08/repos?per_page=100')
                ]);

                if (!userRes.ok || !reposRes.ok) throw new Error('API Error');

                const user = await userRes.json();
                const repos = await reposRes.json();

                const stars = repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);
                const forks = repos.reduce((acc, repo) => acc + repo.forks_count, 0);

                setStats({
                    repos: user.public_repos,
                    followers: user.followers,
                    stars,
                    forks
                });
            } catch {
                setError(true);
            } finally {
                setQueryTime(Math.round(performance.now() - start));
                setLoading(false);
            }
        };

        fetchStats();
    }, []);

    if (loading) return <div className="mt-4 mb-4 text-accent text-sm animate-pulse font-mono">[sys] querying github api...</div>;
    if (error) return <div className="mt-4 mb-4 text-red text-sm font-mono">[err] failed to fetch data. rate limit possibly exceeded.</div>;

    return (
        <div className="mt-4 mb-4 relative max-w-[400px]">
            {/* Terminal Prompt Header */}
            <div className="mb-3 flex flex-col gap-1">
                <div className="flex items-center gap-2 text-xs font-mono">
                    <span className="text-red">yash@portfolio</span>
                    <span className="text-muted">:</span>
                    <span className="text-accent">~/stats</span>
                    <span className="text-muted">$</span>
                    <span className="text-accent">fetch --profile-summary</span>
                </div>
                <div className="h-0.5 w-12 bg-accent opacity-50 mt-1"></div>
            </div>

            {/* Stats Card (Split Pane) */}
            <div className="bg-secondary border border-border-strong rounded-sm overflow-hidden relative group">
                <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(255,255,255,0)_50%,rgba(255,255,255,0.05)_50%)] bg-[length:100%_4px] mix-blend-overlay z-10"></div>

                <div className="bg-primary px-3 py-1.5 border-b border-border-strong flex justify-between items-center relative z-20">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-muted">System.GitHub_Records</span>
                    <div className="flex gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-border-strong animate-pulse"></div>
                    </div>
                </div>

                <div className="flex divide-x divide-border-strong relative z-20">
                    <div className="flex flex-col items-center justify-around py-4 px-3 bg-primary/50 w-12">
                        <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>
                        <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
                        <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
                        <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
                    </div>

                    <div className="flex-1 p-4 grid grid-cols-1 gap-4">
                        <div className="flex justify-between items-center group-hover:pl-1 transition-all">
                            <span className="text-xs text-muted uppercase tracking-wider">Public Repos</span>
                            <span className="font-bold text-green-500 text-sm">{stats.repos}</span>
                        </div>
                        <div className="flex justify-between items-center group-hover:pl-1 transition-all">
                            <span className="text-xs text-muted uppercase tracking-wider">Total Stars</span>
                            <span className="font-bold text-green-500 text-sm">{stats.stars}</span>
                        </div>
                        <div className="flex justify-between items-center group-hover:pl-1 transition-all">
                            <span className="text-xs text-muted uppercase tracking-wider">Forks</span>
                            <span className="font-bold text-accent text-sm">{stats.forks}</span>
                        </div>
                        <div className="flex justify-between items-center group-hover:pl-1 transition-all">
                            <span className="text-xs text-muted uppercase tracking-wider">Followers</span>
                            <span className="font-bold text-accent text-sm">{stats.followers}</span>
                        </div>
                    </div>
                </div>

                <div className="bg-primary px-3 py-1.5 border-t border-border-strong flex justify-between items-center z-20 relative">
                    <span className="text-[9px] font-mono text-muted">query.time: {queryTime}ms</span>
                    <span className="text-[9px] font-mono text-green-500">[LIVE]</span>
                </div>
            </div>
        </div>
    );
};

const ZoroTerminalIcon = () => (
    <svg 
        width="48" 
        height="48" 
        viewBox="0 0 48 48" 
        className="my-3 text-accent"
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
    >
        <circle cx="23.978" cy="22.3892" r="13.589"/>
        <path d="M23.978,32.1058c-1.734,.0054-3.4656,.1293-5.1827,.3707,1.6204,.7677,3.3896,1.1704,5.1827,1.1795,1.7982-.009,3.5723-.4138,5.1965-1.1857-1.7218-.24-3.458-.3618-5.1965-.3646Z" fill="currentColor" fillOpacity="0.15"/>
        <path d="M23.978,8.8012c-5.5025,.0113-10.455,3.3396-12.5438,8.4298,4.0158,1.4897,8.2607,2.2678,12.5438,2.2993,4.2914-.0318,8.5443-.813,12.5668-2.3085-2.0949-5.0943-7.0582-8.4201-12.5668-8.4206Z" fill="currentColor" fillOpacity="0.15"/>
        <path d="M35.0191,20.4503c-3.4793,1.1204-7.1877,1.7334-11.0411,1.7334-3.8453,0-7.5465-.6103-11.0194-1.7262-.1425,.6953-.2184,1.4025-.2268,2.1121,.0101,2.9031,1.1497,5.6892,3.1792,7.7716,2.6435-.6146,5.3487-.9338,8.0671-.9401,2.721,.0026,5.4304,.3179,8.0772,.9301,2.0233-2.0815,3.1591-4.8633,3.169-7.7615-.0008-.7113-.0694-1.4209-.2051-2.1193Z"/>
        <path d="M14.4473,20.8994v7.5824"/>
        <path d="M18.2201,21.7149v8.1555"/>
        <path d="M21.9929,22.1293v7.3266"/>
        <path d="M33.3113,20.9542v7.8308"/>
        <path d="M29.5385,21.753v8.0852"/>
        <path d="M25.7657,22.1293v7.3159"/>
        <path d="M12.9525,24.7384s7.343,.6929,11.0254,.6929,11.0254-.6929,11.0254-.6929"/>
        
        {/* Swords */}
        <path d="M31.4515,35.9134c-.4512-.4171-.915-.8462-1.3894-1.2852M11.4552,17.2222c-1.2812-1.2261-2.3576-2.2709-3.1433-3.0564-6.215-6.2145-1.7762-8.9889-1.7762-8.9889l8.0061,7.5014m19.7958,18.548l.7854,.7358m2.6265,2.461l4.6819,4.3868-3.4874,4.0137s-1.8631-1.7125-4.6909-4.3223"/>
        <path d="M29.5665,37.9626l7.5494-8.0133,2.3806,2.3894-7.0974,8.0465-2.8326-2.4226Z"/>
        <path d="M10.377,21.7093H5.153v3.027h5.3744m26.8352,0h1.781c3.6591,0,3.6591-3.027,3.6591-3.027h-5.2219"/>
        <path d="M5.153,21.7093l4.0886,2.9361"/>
        <path d="M5.153,24.7363l4.1586-3.0269"/>
        
        {/* Sword 2 */}
        <path d="M16.5485,35.913c.4512-.4171,.915-.8462,1.3894-1.2852m18.6069-17.406c1.2812-1.2261,2.3576-2.2709,3.1433-3.0564,6.215-6.2145,1.7762-8.9889,1.7762-8.9889l-8.0061,7.5014M13.6623,31.2258l-.7854,.7358m-2.6265,2.461l-4.6819,4.3868,3.4874,4.0137s1.8631-1.7125,4.6909-4.3223"/>
        <path d="M18.4335,37.9622l-7.5494-8.0133-2.3806,2.3894,7.0974,8.0465,2.8326-2.4226Z"/>
    </svg>
);

const FloatingTerminal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [isMaximized, setIsMaximized] = useState(false);
    const { accentColor, setAccentColor, isLowPerf, setIsLowPerf } = useTheme();
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([
        { type: 'output', content: 'YASH_OS Terminal [Version 2.0.1]\n(c) Yashwanth Patam. All rights reserved.\nType "help" for a list of available commands.' }
    ]);
    
    const scrollRef = useRef(null);
    const inputRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    useEffect(() => {
        if (isMaximized) {
            x.set(0);
            y.set(0);
        }
    }, [isMaximized, x, y]);

    useEffect(() => {
        const handleOpen = () => {
            setIsOpen(true);
            setIsMinimized(false);
            setTimeout(() => inputRef.current?.focus(), 100);
        };
        window.addEventListener('open-floating-terminal', handleOpen);
        return () => window.removeEventListener('open-floating-terminal', handleOpen);
    }, []);

    useEffect(() => {
        if (!isMinimized && isOpen) {
            scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [history, isMinimized, isOpen]);

    useEffect(() => {
        if (isOpen && !isMinimized) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen, isMinimized]);

    const executeCommand = (cmd) => {
        const trimmed = cmd.trim();
        if (!trimmed) return;
        
        const newHistory = [...history, { type: 'input', content: trimmed }];
        const lowerCmd = trimmed.toLowerCase();

        if (lowerCmd === 'clear') {
            setHistory([]);
            setInput('');
            return;
        } else if (lowerCmd === 'exit') {
            setIsOpen(false);
            setInput('');
            return;
        } else if (lowerCmd === 'help') {
            newHistory.push({ type: 'output', content: 'AVAILABLE COMMANDS:\n  help     - Show this message\n  skills   - View developer skills\n  projects - View featured projects\n  date     - Show system date\n  status   - Show system status\n  theme    - Toggle accent color\n  fps      - Toggle high FPS/perf mode\n  github   - Fetch GitHub stats\n  whoami   - Current user info\n  zoro     - Summon Roronoa Zoro AI\n  clear    - Clear terminal output\n  exit     - Close terminal' });
        } else if (lowerCmd === 'skills') {
            newHistory.push({ 
                type: 'output', 
                content: '⚔️ YASHWANTH\'S SKILLS:\n  [Java & Spring Boot]\n    - Java (Level 3 - Intermediate)\n    - Spring Boot (Level 3 - Intermediate)\n    - Spring Security & JWT (Level 3 - Intermediate)\n    - Hibernate/JPA (Level 2 - Familiar)\n  [Databases & Cloud]\n    - MySQL (Level 3 - Intermediate)\n    - MongoDB (Level 2 - Familiar)\n    - Docker (Level 3 - Intermediate)\n    - GCP (Level 3 - Intermediate)\n    - Azure (Level 3 - Intermediate)\n  [Frontend & Design]\n    - React (Level 2 - Familiar)\n    - Tailwind CSS (Level 2 - Familiar)\n    - Figma (Level 2 - Familiar)' 
            });
        } else if (lowerCmd === 'projects') {
            newHistory.push({ 
                type: 'output', 
                content: '📂 YASHWANTH\'S PROJECTS:\n\n1. E-commerce Backend Service\n   - Tech: Java, Spring Boot, MongoDB, Render, Vercel\n   - Description: Scalable RESTful e-commerce API with secure JWT RBAC.\n   - Link: https://threads-fashion.vercel.app/\n\n2. Advanced RBAC System\n   - Tech: Spring Boot, Spring Security, JWT, MySQL, JPA\n   - Description: Granular permission-based access control with stateless authentication.\n   - Link: https://rbac-guard.vercel.app/' 
            });
        } else if (lowerCmd === 'github' || lowerCmd === 'stats' || lowerCmd === 'github stats') {
            newHistory.push({ type: 'component', content: <GitHubStats /> });
        } else if (lowerCmd === 'whoami') {
            newHistory.push({ type: 'output', content: 'yashuroy08 / Yashwanth Patam\nRole: Backend Developer\nLocation: Web\nStatus: Online' });
        } else if (lowerCmd === 'zoro') {
            window.dispatchEvent(new CustomEvent('open-zoro'));
            newHistory.push({ 
                type: 'component', 
                content: (
                    <div className="flex flex-col gap-2 mt-2 mb-2 font-mono">
                        <ZoroTerminalIcon />
                        <div className="text-red font-bold">⚔️ RORONOA ZORO:</div>
                        <div className="text-accent italic">"When I decided to follow my dream, I had already discarded my life."</div>
                        <div className="text-muted text-xs">[sys] initiating system link to Zoro assistant...</div>
                    </div>
                )
            });
        } else if (lowerCmd === 'date') {
            newHistory.push({ type: 'output', content: `CURRENT_SYSTEM_TIME: ${new Date().toLocaleString()}` });
        } else if (lowerCmd === 'status') {
            newHistory.push({ type: 'output', content: `[SYSTEM_STATUS_REPORT]\nUPTIME: 12h 43m 12s\nMEMORY: 1.4GB / 4.0GB [|||||-----]\nCPU: 12% LOAD\nALL SYSTEMS NOMINAL` });
        } else if (lowerCmd === 'theme') {
            const nextAccent = accentColor === 'red' ? 'green' : 'red';
            setAccentColor(nextAccent);
            newHistory.push({ type: 'output', content: `Accent theme switched to ${nextAccent.toUpperCase()}` });
        } else if (lowerCmd === 'fps' || lowerCmd === 'perf' || lowerCmd === 'performance') {
            const nextVal = !isLowPerf;
            setIsLowPerf(nextVal);
            newHistory.push({ 
                type: 'output', 
                content: nextVal 
                    ? 'HIGH FPS MODE: ON\n- Particles disabled\n- Interactive mouse-glow grid disabled\n- Click ripples disabled\nEnjoy maximum performance!'
                    : 'HIGH FPS MODE: OFF\n- All background particles and visual animations restored.' 
            });
        } else {
            newHistory.push({ type: 'output', content: `Command not found: "${trimmed}". Type "help" for commands.` });
        }

        setHistory(newHistory);
        setInput('');
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            executeCommand(input);
        }
    };

    if (!isOpen) return null;

    if (isMinimized) {
        return (
            <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                className="fixed bottom-4 right-4 z-[9999]"
            >
                <button 
                    onClick={() => { setIsMinimized(false); setTimeout(() => inputRef.current?.focus(), 100); }}
                    className="flex items-center gap-2 bg-secondary border-2 border-border-strong px-4 py-2 hover:border-accent transition-colors font-mono shadow-[4px_4px_0px_var(--color-border-strong)]"
                >
                    <span className="text-accent font-bold">&gt;_</span>
                    <span className="text-accent text-sm">Terminal (Running)</span>
                </button>
            </motion.div>
        );
    }

    const modalVariants = {
        normal: { width: 'min(90vw, 600px)', height: '400px', top: 'auto', left: 'auto', bottom: '20vh', right: '5vw', opacity: 1, scale: 1 },
        maximized: { width: '100vw', height: '100vh', top: 0, left: 0, bottom: 'auto', right: 'auto', opacity: 1, scale: 1 }
    };

    return (
        <AnimatePresence>
            <motion.div 
                drag={!isMaximized}
                dragMomentum={false}
                dragConstraints={{ top: 0, bottom: typeof window !== 'undefined' ? window.innerHeight - 50 : 1000 }}
                dragElastic={0.1}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isMaximized ? "maximized" : "normal"}
                variants={modalVariants}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                style={isMaximized ? { position: 'fixed' } : { x, y, position: 'fixed' }}
                className={`z-[9999] bg-secondary/95 backdrop-blur-md border-2 border-border-strong flex flex-col font-mono shadow-[8px_8px_0px_rgba(0,0,0,0.5)] overflow-hidden ${isMaximized ? 'border-0 rounded-none' : 'rounded-sm'}`}
            >
                {/* Window Controls Header */}
                <div 
                    className="flex items-center justify-between px-3 py-2 border-b-2 border-border-strong bg-primary select-none cursor-move"
                >
                    <div className="flex gap-2">
                        <span className="text-xs text-muted tracking-widest uppercase">YASH_OS / Terminal</span>
                    </div>
                    <div className="flex gap-3">
                        <button onClick={() => setIsMinimized(true)} className="text-muted hover:text-accent focus:outline-none">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                        </button>
                        <button onClick={() => setIsMaximized(!isMaximized)} className="text-muted hover:text-green-500 focus:outline-none">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>
                        </button>
                        <button onClick={() => setIsOpen(false)} className="text-muted hover:text-red focus:outline-none">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                        </button>
                    </div>
                </div>

                {/* Terminal Content */}
                <div className="flex-1 overflow-y-auto p-4 text-sm scrollbar-hide">
                    {history.map((line, i) => (
                        <div key={i} className="mb-2 break-words">
                            {line.type === 'input' ? (
                                <div className="flex text-muted">
                                    <span className="mr-2 text-accent">&gt;</span>
                                    <span className="text-accent">{line.content}</span>
                                </div>
                            ) : line.type === 'component' ? (
                                line.content
                            ) : (
                                <div className="text-muted leading-relaxed whitespace-pre-wrap">{line.content}</div>
                            )}
                        </div>
                    ))}
                    <div className="flex items-center gap-2 mt-2">
                        <span className="text-accent font-bold">&gt;</span>
                        <input
                            ref={inputRef}
                            className="flex-1 bg-transparent border-none outline-none text-accent font-mono caret-accent"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            spellCheck={false}
                            autoComplete="off"
                        />
                    </div>
                    <div ref={scrollRef} />
                </div>
            </motion.div>
        </AnimatePresence>
    );
};

export default FloatingTerminal;
