import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const GithubStats = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });
    const username = "yashuroy08"; // confirmed from file path

    return (
        <section id="github-stats" className="section-padding bg-transparent relative overflow-hidden">
            <div className="container-custom" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-12 md:mb-16"
                >
                    <h4 className="font-mono text-sm text-muted mb-2 tracking-widest uppercase">OPEN SOURCE</h4>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">GitHub Activity</h2>
                    <div className="w-16 h-[2px] bg-light opacity-50"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 items-start">

                    {/* Main Stats Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="w-full flex justify-center"
                    >
                        <img
                            src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=transparent&title_color=60a5fa&text_color=a3a3a3&icon_color=4ade80&bg_color=00000000&hide_border=true`}
                            alt="GitHub Stats"
                            className="w-full h-auto max-w-md object-contain border border-white/5 rounded-xl bg-secondary/5 hover:bg-secondary/10 transition-colors p-2"
                        />
                    </motion.div>

                    {/* Top Languages Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="w-full flex justify-center"
                    >
                        <img
                            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=transparent&title_color=60a5fa&text_color=a3a3a3&bg_color=00000000&hide_border=true`}
                            alt="Top Languages"
                            className="w-full h-auto max-w-md object-contain border border-white/5 rounded-xl bg-secondary/5 hover:bg-secondary/10 transition-colors p-2"
                        />
                    </motion.div>

                    {/* Streak Stats (Full Width on Desktop) */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="w-full flex justify-center md:col-span-2 lg:col-span-2 mt-2"
                    >
                        <img
                            src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=transparent&background=00000000&ring=60a5fa&currStreakLabel=60a5fa&fire=f59e0b&sideNums=a3a3a3&sideLabels=a3a3a3&dates=a3a3a3&hide_border=true`}
                            alt="GitHub Streak"
                            className="w-full h-auto max-w-3xl object-contain border border-white/5 rounded-xl bg-secondary/5 hover:bg-secondary/10 transition-colors p-2"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default GithubStats;
