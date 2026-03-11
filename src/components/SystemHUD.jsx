import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useIdle from '../hooks/useIdle';

const SystemHUD = () => {
    const [uptime, setUptime] = useState(0);
    const [localTime, setLocalTime] = useState(new Date().toLocaleTimeString());
    const [activeSection, setActiveSection] = useState('HOME');
    const [isCollapsed, setIsCollapsed] = useState(true);
    const isIdle = useIdle(3000);

    useEffect(() => {
        const startTime = Date.now();
        const timer = setInterval(() => {
            setUptime(Math.floor((Date.now() - startTime) / 1000));
            setLocalTime(new Date().toLocaleTimeString());
        }, 1000);

        const handleScroll = () => {
            const sections = ['hero', 'skills', 'projects', 'activity', 'education', 'blogs', 'contact'];
            const current = sections.find(id => {
                const el = document.getElementById(id);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current.toUpperCase());
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            clearInterval(timer);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const formatUptime = (seconds) => {
        const hrs = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div className="fixed bottom-6 left-6 z-[100] hidden md:block">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                    animate={{ 
                        opacity: isIdle ? 0 : 1, 
                        x: isIdle ? -10 : 0 
                    }}
                    transition={{ duration: 0.3 }}
                    className={`nothing-card cursor-pointer bg-primary transition-all duration-300 ${isCollapsed ? 'p-3' : 'p-4 min-w-[220px]'} ${isIdle ? 'pointer-events-none' : ''}`}
                    onMouseEnter={() => setIsCollapsed(false)}
                onMouseLeave={() => setIsCollapsed(true)}
                onClick={() => setIsCollapsed(true)}
            >
                <div className={`flex items-center justify-between ${!isCollapsed ? 'mb-4 border-b border-border-subtle pb-2' : ''}`}>
                    <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-red uppercase mr-4 pointer-events-none">
                        {isCollapsed ? '[SYS]' : '[SYS.STATUS_MONITOR]'}
                    </span>
                    <div className="text-muted pointer-events-none">
                        {isCollapsed ? '[+]' : '[-]'}
                    </div>
                </div>

                <AnimatePresence>
                    {!isCollapsed && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="space-y-3 overflow-hidden"
                        >
                            <div className="flex justify-between items-center text-[10px] font-mono">
                                <span className="text-muted uppercase">SESSION_UPTIME:</span>
                                <span className="text-light">{formatUptime(uptime)}</span>
                            </div>
                            <div className="flex justify-between items-center text-[10px] font-mono">
                                <span className="text-muted uppercase">LOCAL_TIME:</span>
                                <span className="text-light">{localTime}</span>
                            </div>
                            <div className="flex justify-between items-center text-[10px] font-mono">
                                <span className="text-muted uppercase">ACTIVE_MODULE:</span>
                                <span className="text-red font-bold">[{activeSection}]</span>
                            </div>

                            {/* Decorative scanline or progress bar */}
                            <div className="mt-4 h-[2px] w-full bg-accent/5 relative overflow-hidden">
                                <motion.div
                                    animate={{ x: ['-100%', '100%'] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                    className="absolute inset-0 w-1/3 bg-red/40"
                                />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Corner Accents */}
                <div className="nothing-corner-bottom pointer-events-none absolute inset-0 z-0"></div>
            </motion.div>
        </div>
    );
};

export default SystemHUD;
