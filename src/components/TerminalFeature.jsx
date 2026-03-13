import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useIdle from '../hooks/useIdle';
import { useTheme } from '../context/ThemeContext';

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
            <div className="bg-[#0a0a0a] border border-border-strong rounded-sm overflow-hidden relative group">
                <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(255,255,255,0)_50%,rgba(255,255,255,0.05)_50%)] bg-[length:100%_4px] mix-blend-overlay z-10"></div>

                <div className="bg-[#111] px-3 py-1.5 border-b border-border-strong flex justify-between items-center relative z-20">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-muted">System.GitHub_Records</span>
                    <div className="flex gap-1.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-border-strong animate-pulse"></div>
                    </div>
                </div>

                <div className="flex divide-x divide-border-strong relative z-20">
                    <div className="flex flex-col items-center justify-around py-4 px-3 bg-[#111]/50 w-12">
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

                <div className="bg-[#111] px-3 py-1.5 border-t border-border-strong flex justify-between items-center z-20 relative">
                    <span className="text-[9px] font-mono text-muted">query.time: {queryTime}ms</span>
                    <span className="text-[9px] font-mono text-green-500">[LIVE]</span>
                </div>
            </div>
        </div>
    );
};

const WELCOME_MESSAGES = [
    'Welcome to Yashwanth\'s Portfolio Terminal v1.0.0',
    'Type "help" to see available commands.'
];

const TypingLine = ({ text, onDone }) => {
    const [displayed, setDisplayed] = useState('');
    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setDisplayed(text.slice(0, i + 1));
            i++;
            if (i >= text.length) {
                clearInterval(interval);
                onDone?.();
            }
        }, 25);
        return () => clearInterval(interval);
    }, [text, onDone]);
    return <div className="text-muted leading-relaxed whitespace-pre-wrap">{displayed}<span className="animate-pulse">▌</span></div>;
};

const TerminalFeature = () => {
    const [isOpen, setIsOpen] = useState(false);
    const isIdle = useIdle(3000); // 3 seconds timeout
    const { accentColor, setAccentColor } = useTheme();
    const [input, setInput] = useState('');
    const [history, setHistory] = useState([]);
    const [welcomeStep, setWelcomeStep] = useState(0);
    const [commandHistory, setCommandHistory] = useState([]);
    const [_historyIndex, setHistoryIndex] = useState(-1);
    const scrollRef = useRef(null);

    const scrollToBottom = () => {
        scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [history]);

    // Trigger welcome typing when terminal opens
    useEffect(() => {
        if (isOpen) setWelcomeStep(0);
    }, [isOpen]);

    const handleArrowKeys = useCallback((e) => {
        if (e.key === 'ArrowUp') {
            e.preventDefault();
            setHistoryIndex((prev) => {
                const next = Math.min(prev + 1, commandHistory.length - 1);
                setInput(commandHistory[commandHistory.length - 1 - next] ?? '');
                return next;
            });
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            setHistoryIndex((prev) => {
                const next = Math.max(prev - 1, -1);
                setInput(next === -1 ? '' : (commandHistory[commandHistory.length - 1 - next] ?? ''));
                return next;
            });
        }
    }, [commandHistory]);

    const handleKeyDown = useCallback((e) => {
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
            setIsOpen((prev) => !prev);
        }
    }, []);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [handleKeyDown]);

    const commands = {
        help: `AVAILABLE_COMMANDS:\n\n  - about       : System overview\n  - skills      : Technical stack analysis\n  - projects    : Deployment logs\n  - contact     : Establish uplink\n  - resume      : DOWNLOAD_RESUME.PDF\n  - fetch-stats : Live GitHub telemetry\n  - theme       : Rotate accent sub-routines\n  - date        : System time\n  - status      : Tactical overview\n  - clear       : Wipe terminal buffer`,
        about: 'Yashwanth Patam - Java Developer specializing in Spring Boot and Backend Architectures.',
        skills: 'Java, Spring Boot, MongoDB, Vercel, Render, React, Tailwind CSS.',
        contact: 'Email: yashwanthp2335.sse@saveetha.com | Linkedin: https://www.linkedin.com/in/yashwanth-patam/',
        clear: 'clear',
        exit: 'exit'
    };

    const handleCommand = (e) => {
        if (e.key === 'Enter') {
            const trimmedInput = input.trim().toLowerCase();
            if (trimmedInput !== '') {
                setCommandHistory((prev) => [...prev, input.trim()]);
                setHistoryIndex(-1);
            }
            const newHistory = [...history, { type: 'input', content: input }];

            if (trimmedInput === 'clear') {
                setHistory([]);
            } else if (trimmedInput === 'exit') {
                setIsOpen(false);
            } else if (trimmedInput === 'resume') {
                const resumeUrl = '/resume.pdf';
                window.open(resumeUrl, '_blank');
                const link = document.createElement('a');
                link.href = resumeUrl;
                link.download = 'Yashwanth_Resume.pdf';
                link.click();
                newHistory.push({ type: 'output', content: 'INITIALIZING_RESUME_UPLINK... [OPEN_IN_NEW_TAB // TRIGGER_DOWNLOAD]' });
                setHistory(newHistory);
            } else if (trimmedInput === 'theme') {
                const nextAccent = accentColor === 'red' ? 'green' : 'red';
                setAccentColor(nextAccent);
                newHistory.push({ type: 'output', content: `Accent theme switched to ${nextAccent.toUpperCase()}` });
                setHistory(newHistory);
            } else if (trimmedInput === 'fetch-stats') {
                newHistory.push({ type: 'component', component: 'github-stats' });
                setHistory(newHistory);
            } else if (trimmedInput === 'date') {
                newHistory.push({ type: 'output', content: `CURRENT_SYSTEM_TIME: ${new Date().toLocaleString()}\nUTC_OFFSET: ${new Date().getTimezoneOffset()}\nSTATUS: TIME_SYNC_SUCCESSFUL` });
                setHistory(newHistory);
            } else if (trimmedInput === 'status') {
                newHistory.push({ type: 'output', content: `[SYSTEM_STATUS_REPORT]\n----------------------\nUPTIME: 12h 43m 12s\nMEMORY: 1.4GB / 4.0GB [|||||-----]\nCPU: 12% LOAD\nCONNECTION: STABLE_SSL\nSESSION: ${Math.random().toString(16).substring(2, 10).toUpperCase()}\n----------------------\nALL SYSTEMS NOMINAL` });
                setHistory(newHistory);
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
            {/* Terminal Shortcut Hint Button */}
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        onClick={() => setIsOpen(true)}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: isIdle ? 0 : 1, x: isIdle ? -10 : 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className={`fixed bottom-[100px] left-6 z-40 bg-primary/80 backdrop-blur-sm border border-border-strong px-2 py-1.5 rounded-sm shadow-sm flex items-center gap-2 hover:border-accent hover:bg-white/5 transition-all outline-none ${isIdle ? 'pointer-events-none' : ''}`}
                        title="Open Terminal (Ctrl+K)"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent">
                            <polyline points="4 17 10 11 4 5"></polyline>
                            <line x1="12" y1="19" x2="20" y2="19"></line>
                        </svg>
                        <span className="text-[10px] text-muted font-mono tracking-wider"></span>
                        <div className="hidden md:flex gap-1 ml-1 opacity-60">
                            <kbd className="bg-secondary px-1 py-0.5 rounded text-[9px] font-mono border border-border-strong text-accent">Ctrl+K</kbd>
                        </div>
                    </motion.button>
                )}
            </AnimatePresence>

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
                            {/* Animated welcome lines */}
                            {WELCOME_MESSAGES.slice(0, welcomeStep + 1).map((msg, i) => (
                                <div key={`welcome-${i}`} className="mb-2">
                                    {i === welcomeStep && i < WELCOME_MESSAGES.length ? (
                                        <TypingLine text={msg} onDone={() => setWelcomeStep(s => Math.min(s + 1, WELCOME_MESSAGES.length - 1))} />
                                    ) : (
                                        <div className="text-muted leading-relaxed whitespace-pre-wrap">{msg}</div>
                                    )}
                                </div>
                            ))}
                            {history.map((line, i) => (
                                <div key={i} className="mb-2">
                                    {line.type === 'input' ? (
                                        <div className="flex">
                                            <span className={`${accentColor === 'green' ? 'text-green-500' : 'text-red'} mr-2`}>yash@portfolio:~$</span>
                                            <span className="text-white">{line.content}</span>
                                        </div>
                                    ) : line.type === 'component' && line.component === 'github-stats' ? (
                                        <GitHubStats />
                                    ) : (
                                        <div className="text-muted leading-relaxed whitespace-pre-wrap">{line.content}</div>
                                    )}
                                </div>
                            ))}

                            <div className="flex items-center">
                                <span className={`${accentColor === 'green' ? 'text-green-500' : 'text-red'} mr-2`}>yash@portfolio:~$</span>
                                <input
                                    autoFocus
                                    className="bg-transparent border-none outline-none flex-1 text-white caret-white"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={(e) => { handleArrowKeys(e); handleCommand(e); }}
                                />
                            </div>
                            <div ref={scrollRef} />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default TerminalFeature;
