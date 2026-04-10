import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';

/* ─── Reference Icon SVGs ─── */
const YouTubeIcon = () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" fill="#FF0000" />
        <path d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z" fill="#FFFFFF" />
    </svg>
);
const GitHubIcon = () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
);
const DocIcon = () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
);
const RenderIcon = () => (
    <svg viewBox="0 0 800 800" className="w-4 h-4 shrink-0" fill="currentColor">
        <path d="M605.28 288.733c-.059-1.365-.178-2.7-.296-4.065-.03-.326-.03-.682-.09-1.009-.089-.83-.207-1.632-.326-2.462-.119-.861-.208-1.691-.327-2.522a30 30 0 0 0-.326-1.751c-.178-1.038-.356-2.106-.564-3.144-.178-.831-.386-1.632-.564-2.463-.178-.801-.356-1.572-.534-2.373-.208-.831-.475-1.632-.713-2.463a63 63 0 0 0-.653-2.284c-.267-.831-.564-1.662-.86-2.493l-.713-2.136c-.386-1.038-.801-2.047-1.187-3.056-.208-.504-.386-.979-.594-1.483a106 106 0 0 0-1.454-3.234c-.178-.386-.356-.801-.534-1.187-.475-1.009-1.01-1.988-1.514-2.967-.238-.445-.445-.89-.683-1.335-.593-1.098-1.246-2.195-1.87-3.263-.178-.297-.326-.594-.504-.89a78 78 0 0 0-2.137-3.323l-.446-.712a114 114 0 0 0-2.76-3.887 103 103 0 0 0-2.76-3.531c-.06-.089-.119-.178-.208-.267-18.344-22.222-46.037-36.344-77.054-36.374V194l-.089.059h.029c-8.607 0-16.978 1.098-24.962 3.145-4.779 1.217-9.439 2.819-13.921 4.688a118 118 0 0 0-4.423 1.988c-29.474 14.181-50.845 42.426-55.564 76.011h-.059c-2.078 14.39-6.501 28.008-12.793 40.528h.208c-21.906 43.435-66.903 73.252-118.906 73.252-23.211 0-44.998-5.933-63.994-16.347-2.226-1.217-4.927.386-4.927 2.907v13.44H206v199.583h199.7v-99.806h.207v-49.903c0-27.563 22.351-49.903 49.925-49.903h49.925c8.548 0 16.83-1.098 24.755-3.145a105 105 0 0 0 13.921-4.688 117 117 0 0 0 4.422-1.988c30.543-14.715 52.448-44.533 56.039-79.75.327-3.352.505-6.764.505-10.206 0-1.72-.03-3.441-.119-5.132\" />
    </svg>
);
const VercelIcon = () => (
    <svg viewBox="0 0 256 222" className="w-4 h-4 shrink-0" fill="currentColor">
        <path d="m128 0 128 221.705H0z" />
    </svg>
);
const OpenAIIcon = () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="currentColor">
        <path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.032.067L9.756 19.86a4.5 4.5 0 0 1-6.157-1.556zM2.61 8.64a4.485 4.485 0 0 1 2.34-1.974V12.2a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0L4.572 14.51A4.501 4.501 0 0 1 2.61 8.64zm16.44 3.866-5.836-3.37 2.02-1.165a.073.073 0 0 1 .072 0l4.49 2.59a4.496 4.496 0 0 1-.696 8.114v-5.536a.797.797 0 0 0-.05-.633zm2.008-3.023-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.52 9.979V7.648a.071.071 0 0 1 .028-.068l4.487-2.59a4.496 4.496 0 0 1 6.675 4.654zm-12.64 4.135-2.02-1.164a.08.08 0 0 1-.038-.057V7.81a4.496 4.496 0 0 1 7.375-3.453l-.142.08L8.704 7.193a.795.795 0 0 0-.393.681zm1.097-2.365 2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5Z" />
    </svg>
);
const BaeldungIcon = () => (
    <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l6 6v8a2 2 0 01-2 2z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 4v6h-6" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 14h6M9 17h4" />
    </svg>
);
const SpringIcon = () => (
    <svg viewBox="0 0 32 32" className="w-4 h-4 shrink-0" fill="#70AD51">
        <path d="M5.466 27.993c.586.473 1.446.385 1.918-.202.475-.585.386-1.445-.2-1.92-.585-.474-1.444-.383-1.92.202-.45.555-.392 1.356.115 1.844l-.266-.234C1.972 24.762 0 20.597 0 15.978 0 7.168 7.168 0 15.98 0c4.48 0 8.53 1.857 11.435 4.836.66-.898 1.232-1.902 1.7-3.015 2.036 6.118 3.233 11.26 2.795 15.31-.592 8.274-7.508 14.83-15.93 14.83-3.912 0-7.496-1.416-10.276-3.757l-.238-.21zm23.58-4.982c4.01-5.336 1.775-13.965-.085-19.48-1.657 3.453-5.738 6.094-9.262 6.93-3.303.788-6.226.142-9.283 1.318-6.97 2.68-6.86 10.992-3.02 12.86.002 0 .23.124.227.12 0-.002 5.644-1.122 8.764-2.274 4.56-1.684 9.566-5.835 11.213-10.657-.877 5.015-5.182 9.84-9.507 12.056-2.302 1.182-4.092 1.445-7.88 2.756-.464.158-.828.314-.828.314.96-.16 1.917-.212 1.917-.212 5.393-.255 13.807 1.516 17.745-3.73z" />
    </svg>
);

const blogPosts = [
    {
        id: 'java-ecommerce',
        date: 'MAR 11, 2026',
        unit: 'CASE_STUDY',
        category: 'Project Reflection',
        title: 'BUILDING A SCALABLE E-COMMERCE BACKEND WITH JAVA',
        excerpt: 'A walkthrough of the full lifecycle of my Spring Boot & MongoDB e-commerce API — from raw sketches to scalable deployment on Render and Vercel.',
        tags: ['JAVA', 'SPRING_BOOT', 'MONGODB', 'RENDER', 'VERCEL'],
        refs: [
            { label: 'Spring Boot Docs', url: 'https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/', Icon: SpringIcon },
            { label: 'Telusko – Java Backend', url: 'https://youtu.be/BGTx91t8q50?si=JJklDUjvJzEHatBF', Icon: YouTubeIcon },
            { label: 'GitHub Copilot', url: 'https://github.com/features/copilot', Icon: GitHubIcon },
            { label: 'Render Backend', url: 'https://render.com', Icon: RenderIcon },
            { label: 'Vercel Frontend', url: 'https://vercel.com', Icon: VercelIcon },
        ]
    },
    {
        id: 'rbac-security',
        date: 'FEB 28, 2026',
        unit: 'HOW_TO_GUIDE',
        category: 'How-To Guide',
        title: 'IMPLEMENTING ROLE-BASED ACCESS CONTROL WITH SPRING SECURITY',
        excerpt: 'Step-by-step guide on setting up JWT-based RBAC in a Spring Boot application — with granular roles, method-level security and session management.',
        tags: ['SPRING_SECURITY', 'JWT', 'MYSQL', 'JPA'],
        refs: [
            { label: 'Spring Security Docs', url: 'https://docs.spring.io/spring-security/reference/index.html', Icon: SpringIcon },
            { label: 'Telusko – Spring Security', url: 'https://youtu.be/BGTx91t8q50?si=JJklDUjvJzEHatBF', Icon: YouTubeIcon },
            { label: 'ChatGPT (debugging JWT)', url: 'https://chatgpt.com', Icon: OpenAIIcon },
            { label: 'Baeldung RBAC Guide', url: 'https://www.baeldung.com/spring-security-role-filter-url', Icon: BaeldungIcon },
        ]
    },
];

const cardVariants = {
    enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
};

const Blogs = () => {
    const [[page, direction], setPage] = useState([0, 0]);
    const dragStartX = useRef(0);

    const current = ((page % blogPosts.length) + blogPosts.length) % blogPosts.length;

    const paginate = (newDir) => {
        setPage(([prev]) => [prev + newDir, newDir]);
    };

    const handleDragStart = (e) => {
        dragStartX.current = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX;
    };

    const handleDragEnd = (e) => {
        const endX = e.type === 'touchend' ? e.changedTouches[0].clientX : e.clientX;
        const delta = dragStartX.current - endX;
        if (Math.abs(delta) > 50) paginate(delta > 0 ? 1 : -1);
    };

    const post = blogPosts[current];

    return (
        <section id="blogs" className="py-20 px-4 md:px-10 relative overflow-hidden bg-primary">
            <div className="absolute top-0 right-0 w-64 h-64 border-r-2 border-t-2 border-border-strong opacity-10 pointer-events-none" />

            <div className="container-custom mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 md:mb-16"
                >
                    <div className="flex items-center gap-4 mb-2">
                        <div className="w-8 h-[1px]" style={{ backgroundColor: 'var(--color-red)', opacity: 0.7 }} />
                        <h4 className="font-mono text-sm text-muted tracking-widest uppercase">
                            <span className="text-red">// 05</span> &mdash; LOGS
                        </h4>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-accent">
                        <span className="glitch-hover" data-text="PERSONAL BLOGS">PERSONAL BLOGS</span>
                    </h2>
                    <div className="w-16 h-[4px] mb-6" style={{ backgroundColor: 'var(--color-red)' }} />
                    <p className="text-muted max-w-2xl text-lg">
                        Deep dives, learning logs, and how-to guides from my actual project experience.
                    </p>
                </motion.div>

                {/* Carousel */}
                <div className="relative">
                    {/* Slide */}
                    <div
                        className="overflow-hidden"
                        onMouseDown={handleDragStart}
                        onMouseUp={handleDragEnd}
                        onTouchStart={handleDragStart}
                        onTouchEnd={handleDragEnd}
                        style={{ cursor: 'grab' }}
                    >
                        <AnimatePresence custom={direction} mode="wait">
                            <motion.div
                                key={page}
                                custom={direction}
                                variants={cardVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ duration: 0.35, ease: 'easeInOut' }}
                            >
                                <div
                                    className="neo-card p-6 md:p-10 bg-primary border-2 border-border-strong relative overflow-hidden"
                                    style={{ boxShadow: '6px 6px 0px var(--color-border-strong)', borderRadius: 0 }}
                                >
                                    {/* Corner accents */}
                                    <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-red" />
                                    <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-red" />
                                    <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-red" />
                                    <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-red" />

                                    {/* Meta */}
                                    <div className="flex flex-wrap justify-between items-center mb-6 gap-2">
                                        <span className="font-mono text-[9px] tracking-widest text-muted">// {post.date}</span>
                                        <span className="font-mono text-[9px] tracking-widest text-red font-bold border border-red px-2 py-0.5">
                                            [{post.unit}]
                                        </span>
                                    </div>

                                    {/* Category Badge */}
                                    <div className="inline-block font-mono text-[8px] tracking-[0.3em] uppercase mb-4 px-2 py-1 text-accent bg-red/10 border border-red/30">
                                        {post.category}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl md:text-3xl font-black font-mono uppercase tracking-tight mb-4 text-accent leading-tight">
                                        {post.title}
                                    </h3>

                                    {/* Divider */}
                                    <div className="w-12 h-[2px] mb-6" style={{ backgroundColor: 'var(--color-red)' }} />

                                    {/* Excerpt */}
                                    <p className="text-muted text-sm md:text-base leading-relaxed mb-8 max-w-3xl">
                                        {post.excerpt}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {post.tags.map(tag => (
                                            <span key={tag} className="text-[9px] font-mono tracking-widest border border-border-strong px-2 py-0.5 text-muted">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* References */}
                                    <div className="border-t border-border-strong/30 pt-6">
                                        <p className="font-mono text-[9px] tracking-[0.3em] text-muted/60 uppercase mb-4">
                                            // REFERENCES &amp; TOOLS
                                        </p>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                                            {post.refs.map((ref, i) => (
                                                <a
                                                    key={i}
                                                    href={ref.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="group flex items-center gap-2 border border-border-strong/50 hover:border-red/60 px-3 py-2 transition-all duration-200 hover:bg-red/5"
                                                >
                                                    <span className="text-muted group-hover:text-red transition-colors">
                                                        <ref.Icon />
                                                    </span>
                                                    <span className="font-mono text-[8px] tracking-wide text-muted group-hover:text-red transition-colors truncate">
                                                        {ref.label}
                                                    </span>
                                                </a>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Read More */}
                                    <div className="mt-8">
                                        <Link
                                            to={`/blog/${post.id}`}
                                            className="inline-flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase text-red hover:gap-4 transition-all duration-200"
                                        >
                                            READ_FULL_LOG
                                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Nav Controls */}
                    <div className="flex items-center justify-between mt-8">
                        {/* Dot Indicators */}
                        <div className="flex items-center gap-2">
                            {blogPosts.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setPage(() => [i, i > current ? 1 : -1])}
                                    className="transition-all duration-200"
                                    aria-label={`Go to slide ${i + 1}`}
                                >
                                    <div
                                        className="transition-all duration-300"
                                        style={{
                                            width: i === current ? '24px' : '8px',
                                            height: '4px',
                                            backgroundColor: i === current ? 'var(--color-red)' : 'var(--color-border-strong)',
                                            opacity: i === current ? 1 : 0.4,
                                        }}
                                    />
                                </button>
                            ))}
                        </div>

                        {/* Counter + Arrows */}
                        <div className="flex items-center gap-4">
                            <span className="font-mono text-[9px] tracking-widest text-muted/50">
                                {String(current + 1).padStart(2, '0')} / {String(blogPosts.length).padStart(2, '0')}
                            </span>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => paginate(-1)}
                                    className="w-9 h-9 flex items-center justify-center border-2 border-border-strong hover:border-red hover:text-red transition-all duration-200 font-mono text-muted"
                                    aria-label="Previous post"
                                >
                                    ←
                                </button>
                                <button
                                    onClick={() => paginate(1)}
                                    className="w-9 h-9 flex items-center justify-center border-2 border-border-strong hover:border-red hover:text-red transition-all duration-200 font-mono text-muted"
                                    aria-label="Next post"
                                >
                                    →
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom status bar */}
                <div className="mt-12 pt-6 border-t border-border-strong/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="font-mono text-[9px] text-muted tracking-widest opacity-40">
                        LOG_STREAM_CONNECTED // {blogPosts.length}_ENTRIES_LOADED
                    </p>
                    <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map(i => (
                            <div key={i} className="w-1 h-3 bg-border-strong opacity-20" />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blogs;
