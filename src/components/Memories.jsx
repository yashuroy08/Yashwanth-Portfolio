import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const Blogs = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });

    const memories = [
        {
            title: "Global Hackathon Finals",
            date: "11.15.2025",
            location: "SAN FRANCISCO, CA",
            excerpt: "Secured 1st place building an AI-powered accessibility tool. 48 hours of pure coding, zero sleep, and unforgettable teamwork.",
            image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&auto=format&fit=crop",
            link: "#"
        },
        {
            title: "First Major Open Source Merge",
            date: "08.22.2025",
            location: "REMOTE / GITHUB",
            excerpt: "After weeks of debugging and refactoring, my core architectural change was merged into a major React ecosystem library.",
            image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=600&auto=format&fit=crop",
            link: "#"
        },
        {
            title: "Tech Conference Speaker Debut",
            date: "05.10.2025",
            location: "MUMBAI, IN",
            excerpt: "Presented my research on monolithic refactoring strategies to an audience of 500+ developers. A terrifying but exhilarating milestone.",
            image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&auto=format&fit=crop",
            link: "#"
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
    };

    return (
        <section id="memories" className="section-padding bg-transparent relative overflow-hidden">
            <div className="container-custom" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="mb-12 md:mb-16"
                >
                    <ScrollReveal delay={0}>
                        <h4 className="font-mono text-sm text-muted mb-2 tracking-widest uppercase"><span className="text-red">// 04</span> &mdash; CAPTURED MOMENTS</h4>
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-accent"><span className="glitch-hover" data-text="MEMORIES & EVENTS">MEMORIES & EVENTS</span></h2>
                        <div className="w-16 h-[2px]" style={{ backgroundColor: 'var(--color-red)', opacity: 0.6 }}></div>
                    </ScrollReveal>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                >
                    {memories.map((memory, index) => (
                        <motion.article
                            key={index}
                            variants={itemVariants}
                            className="bg-primary border-2 border-border-strong group hover:border-accent transition-colors flex flex-col h-full relative"
                            style={{
                                boxShadow: '4px 4px 0px var(--color-border-strong)',
                            }}
                        >
                            {/* Image Container for Memories */}
                            <div className="w-full h-48 border-b-2 border-border-strong overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-500">
                                <img
                                    src={memory.image}
                                    alt={memory.title}
                                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
                                />
                                <div className="absolute inset-0 bg-red mix-blend-multiply opacity-20 group-hover:opacity-0 transition-opacity duration-500"></div>
                            </div>

                            <div className="p-6 flex flex-col h-full relative z-10">
                                <header className="mb-4">
                                    <h4 className="font-mono text-[10px] sm:text-[11px] text-muted tracking-widest uppercase flex flex-wrap gap-x-4 gap-y-2">
                                        <span className="text-red">[{memory.date}]</span>
                                        <span>LOC: {memory.location}</span>
                                    </h4>
                                </header>

                                <h3 className="text-xl font-bold mb-3 mt-auto group-hover:text-red transition-colors leading-tight">{memory.title}</h3>

                                <p className="text-muted text-sm leading-relaxed mb-6 flex-grow">
                                    {memory.excerpt}
                                </p>

                                <a href={memory.link} className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-accent group-hover:text-red transition-colors w-max mt-auto">
                                    <span className="bg-red/10 w-6 h-6 flex items-center justify-center border border-red/30 group-hover:bg-red group-hover:text-primary transition-all">
                                        +
                                    </span>
                                    <span>VIEW_GALLERY</span>
                                </a>
                            </div>

                            {/* Hover Shadow Offset Change */}
                            <div className="absolute inset-0 border-2 border-red opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" style={{ transform: 'translate(4px, 4px)' }}></div>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Blogs;
