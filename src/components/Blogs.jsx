import { motion } from 'framer-motion';

const blogPosts = [
    {
        id: 1,
        date: 'MAR 11, 2026',
        unit: 'BACKEND_LOGS',
        title: 'BUILDING A SCALABLE E-COMMERCE BACKEND WITH JAVA',
        excerpt: 'A detailed breakdown of how I used Spring Boot and MySQL to construct a high-performance RESTful API supporting concurrent transactions and robust authentication.',
        tags: ['JAVA', 'SPRING_BOOT', 'MYSQL', 'REST_API'],
        readMore: '#'
    },
    {
        id: 2,
        date: 'FEB 28, 2026',
        unit: 'SYSTEMS_LOGS',
        title: 'IMPLEMENTING ROLE-BASED ACCESS CONTROL (RBAC)',
        excerpt: 'Securing enterprise applications using Spring Security and JWT. Examining how granular permissions and modular security layers prevent unauthorized data access.',
        tags: ['SECURITY', 'JWT', 'SPRING_SECURITY'],
        readMore: '#'
    },
    {
        id: 3,
        date: 'JAN 15, 2026',
        unit: 'FRONTEND_LOGS',
        title: 'THE NEO-BRUTALIST DESIGN MANIFESTO',
        excerpt: 'Why harsh borders, high contrast, and raw typography are returning to web design in the era of Nothing OS.',
        tags: ['UI_UX', 'REACT', 'CSS'],
        readMore: '#'
    }
];

const Blogs = () => {
    return (
        <section id="blogs" className="py-20 px-4 md:px-10 relative overflow-hidden bg-primary">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-64 h-64 border-r-2 border-t-2 border-border-strong opacity-10 pointer-events-none"></div>

            <div className="container-custom mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 md:mb-16"
                >
                    <div className="flex items-center gap-4 mb-2">
                        <div className="w-8 h-[1px]" style={{ backgroundColor: 'var(--color-red)', opacity: 0.7 }}></div>
                        <h4 className="font-mono text-sm text-muted tracking-widest uppercase"><span className="text-red">// 05</span> &mdash; LOGS</h4>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-accent"><span className="glitch-hover" data-text="PERSONAL BLOGS">PERSONAL BLOGS</span></h2>
                    <div className="w-16 h-[4px] mb-6" style={{ backgroundColor: 'var(--color-red)' }} />
                    <p className="text-muted max-w-2xl text-lg">
                        Deep dives into system architectures, security implementations, and Java backend development.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <motion.a
                            href={post.readMore}
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="neo-card p-6 flex flex-col h-full group bg-primary border-2 border-border-strong transition-all duration-300 relative overflow-hidden glitch-click block"
                            style={{
                                boxShadow: '4px 4px 0px var(--color-border-strong)',
                                borderRadius: '0px'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = 'var(--color-red)';
                                e.currentTarget.style.boxShadow = '8px 8px 0px var(--color-red)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = 'var(--color-border-strong)';
                                e.currentTarget.style.boxShadow = '4px 4px 0px var(--color-border-strong)';
                            }}
                        >
                            {/* Card Meta */}
                            <div className="flex justify-between items-center mb-6">
                                <span className="font-mono text-[9px] tracking-widest text-muted">
                  // {post.date}
                                </span>
                                <span className="font-mono text-[9px] tracking-widest text-red font-bold">
                                    [{post.unit}]
                                </span>
                            </div>

                            {/* Card Title */}
                            <h4 className="text-xl font-bold tracking-tight mb-4 group-hover:text-red transition-colors font-mono uppercase">
                                {post.title}
                            </h4>

                            {/* Excerpt */}
                            <p className="text-muted text-xs leading-relaxed mb-8 flex-grow group-hover:text-light transition-colors">
                                {post.excerpt}
                            </p>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                                {post.tags.map(tag => (
                                    <span key={tag} className="text-[8px] font-mono tracking-widest border border-border-strong px-2 py-0.5 opacity-50 group-hover:border-red group-hover:opacity-100 group-hover:text-red transition-all">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.a>
                    ))}
                </div>

                {/* Bottom indicator */}
                <div className="mt-16 pt-8 border-t border-border-strong/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="font-mono text-[9px] text-muted tracking-widest opacity-40">
                        LOG_STREAM_CONNECTED // PENDING_AUTHORIZATION
                    </p>
                    <div className="flex items-center gap-1">
                        {[1, 2, 3, 4, 5].map(i => (
                            <div key={i} className="w-1 h-3 bg-border-strong opacity-20"></div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blogs;
