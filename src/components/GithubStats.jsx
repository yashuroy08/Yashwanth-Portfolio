import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';

import { useTheme } from '../context/ThemeContext.jsx';

const GithubStats = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });
    const username = "yashuroy08";
    const { theme } = useTheme();

    const [contribData, setContribData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`https://github-contributions-api.deno.dev/${username}.json`)
            .then(res => res.json())
            .then(data => {
                setContribData(data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch Github stats", err);
                setLoading(false);
            });
    }, [username]);

    const isLight = theme === 'light' || (theme === 'system' && typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: light)').matches);

    const getRedThemeColor = (level) => {
        switch (level) {
            case 'NONE': return isLight ? '#e0e0e0' : '#1a1a1a';
            case 'FIRST_QUARTILE': return '#5c1212';
            case 'SECOND_QUARTILE': return '#991f1f';
            case 'THIRD_QUARTILE': return '#cc2929';
            case 'FOURTH_QUARTILE': return '#ff3333';
            default: return isLight ? '#e0e0e0' : '#1a1a1a';
        }
    };

    return (
        <section id="activity" className="section-padding bg-transparent relative overflow-hidden min-h-[80vh] flex items-center">
            <div className="container-custom w-full" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <h4 className="font-mono text-sm text-muted tracking-widest uppercase mb-2"><span className="text-red">// 03</span> &mdash; OPEN SOURCE</h4>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-accent"><span className="glitch-hover" data-text="GITHUB ACTIVITY">GITHUB ACTIVITY</span></h2>
                    <div className="w-16 h-[2px]" style={{ backgroundColor: 'var(--color-red)', opacity: 0.6 }}></div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="w-full p-6 md:p-8 bg-primary relative border-2 border-accent"
                    style={{
                        boxShadow: '4px 4px 0px var(--color-red)'
                    }}
                >
                    <div className="flex justify-between items-end mb-8 border-b-2 border-accent pb-4">
                        <h3 className="font-mono text-xs tracking-[0.2em] text-accent uppercase font-bold">STATED.FREQ_ANALYSIS</h3>
                        <span className="font-mono text-[10px] text-red animate-pulse">LIVE_SYNC</span>
                    </div>

                    {loading ? (
                        <div className="flex justify-center items-center h-48">
                            <div className="w-8 h-8 border-4 border-red border-t-transparent rounded-full animate-spin"></div>
                        </div>
                    ) : contribData ? (
                        <div className="w-full overflow-x-auto pb-4 custom-scrollbar">
                            <div className="flex gap-1" style={{ minWidth: 'max-content' }}>
                                {contribData.contributions.map((week, idx) => (
                                    <div key={idx} className="flex flex-col gap-1">
                                        {week.map((day, dayIdx) => (
                                            <div
                                                key={`${idx}-${dayIdx}`}
                                                className="w-3 h-3 md:w-4 md:h-4 border border-border-subtle transition-transform hover:scale-125 hover:z-10 group relative"
                                                style={{ backgroundColor: getRedThemeColor(day.contributionLevel) }}
                                            >
                                                {/* Tooltip */}
                                                <div className="absolute opacity-0 group-hover:opacity-100 bottom-full left-1/2 -translate-x-1/2 mb-2 pointer-events-none z-20 whitespace-nowrap bg-secondary text-accent font-mono text-[10px] px-2 py-1 border border-border-strong uppercase">
                                                    {day.contributionCount} on {day.date}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                            <div className="flex justify-between items-center mt-6 text-xs font-mono text-muted">
                                <div>TOTAL: <span className="text-accent font-bold">{contribData.totalContributions}</span></div>
                                <div className="flex items-center gap-2">
                                    <span>LESS</span>
                                    {['NONE', 'FIRST_QUARTILE', 'SECOND_QUARTILE', 'THIRD_QUARTILE', 'FOURTH_QUARTILE'].map(level => (
                                        <div key={level} className="w-3 h-3 md:w-4 md:h-4 border border-border-subtle" style={{ backgroundColor: getRedThemeColor(level) }}></div>
                                    ))}
                                    <span>MORE</span>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="text-red font-mono text-sm py-10 text-center">ERR: FAILED_TO_FETCH_DATA</div>
                    )}

                    <div className="absolute top-0 left-0 w-2 h-2 bg-red"></div>
                    <div className="absolute top-0 right-0 w-2 h-2 bg-red"></div>
                    <div className="absolute bottom-0 left-0 w-2 h-2 bg-red"></div>
                    <div className="absolute bottom-0 right-0 w-2 h-2 bg-red"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default GithubStats;
