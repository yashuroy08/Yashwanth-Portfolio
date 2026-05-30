import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '../ui/ScrollReveal';
import TiltCard from '../ui/TiltCard';

const projects = [
  {
    title: "E-commerce Backend Service",
    image: "/ecommerce-ss.png",
    tech: ["Java", "Spring Boot", "MongoDB", "Render", "Vercel"],
    color: "from-blue-500/20 to-purple-500/20",
    liveLink: "https://threads-fashion.vercel.app/",
    githubLink: "https://github.com/yashuroy08/Threads-Fashion",
    highlights: [
      "Architected scalable RESTful APIs with Spring Boot",
      "Implemented secure JWT-based authentication & RBAC",
      "Reduced query latency by 35% through MongoDB optimization",
      "Deployed microservices architecture for scalable access"
    ]
  },
  {
    title: "Advanced RBAC System",
    image: "/rbac-ss.png",
    tech: ["Spring Boot", "Spring Security", "JWT", "MySQL", "JPA"],
    color: "from-indigo-500/20 to-blue-500/20",
    liveLink: "https://rbac-guard.vercel.app/",
    githubLink: "https://github.com/yashuroy08/RBAC",
    highlights: [
      "Granular permission-based access control (RBAC)",
      "Secure user authentication with stateless JWT validation",
      "Dynamic role-permission mapping with MySQL backend",
      "Automated risk evaluation & session management"
    ]
  }
];

const cardVariants = {
  enter: (dir) => ({ x: dir > 0 ? 300 : -300, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir) => ({ x: dir > 0 ? -300 : 300, opacity: 0 }),
};

const Projects = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isHovered, setIsHovered] = useState(false);
  const current = ((page % projects.length) + projects.length) % projects.length;

  const paginate = (newDir) => {
    setPage(([prev]) => [prev + newDir, newDir]);
  };

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      paginate(1);
    }, 5000);
    return () => clearInterval(timer);
  }, [page, isHovered]);

  const project = projects[current];

  return (
    <section id="projects" className="section-padding bg-transparent relative overflow-hidden" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <ScrollReveal delay={0}>
            <div className="flex items-center gap-4 mb-2">
              <div className="w-8 h-[1px]" style={{ backgroundColor: 'var(--color-red)', opacity: 0.7 }}></div>
              <h4 className="font-mono text-sm text-muted tracking-widest uppercase"><span className="text-red">// 02</span> &mdash; PORTFOLIO</h4>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-accent"><span className="glitch-hover" data-text="FEATURED PROJECTS">FEATURED PROJECTS</span></h2>
            <div className="w-16 h-[4px] mb-6" style={{ backgroundColor: 'var(--color-red)' }} />
            <p className="text-muted max-w-2xl text-lg hidden md:block">
              A selection of my recent works, focusing on robust backend architectures, enterprise solutions, and secure applications.
            </p>
          </ScrollReveal>
        </motion.div>

        <div className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <div className="overflow-hidden relative min-h-[400px] md:min-h-[500px]">
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
                <TiltCard
                  maxTilt={2}
                  glare={true}
                  className="neo-card p-4 md:p-8 bg-primary border-2 border-border-strong relative overflow-hidden flex flex-col h-full"
                  style={{ boxShadow: '6px 6px 0px var(--color-border-strong)', borderRadius: 0 }}
                >
                  <div className="flex justify-between items-start mb-6 md:mb-8">
                    {/* Hide title text on mobile, but keep container for flex layout if needed, or just hide the h3 */}
                    <div className="flex flex-col gap-3">
                      <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tighter" style={{ color: 'var(--color-accent)' }}>
                        {project.title}
                      </h3>
                      {/* Tech stack as meta data with noticeable colors beside/below title */}
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="text-[10px] py-1 px-2 border border-red font-mono uppercase tracking-[0.15em] text-red bg-red/10"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex gap-3 items-center ml-auto">
                      {project.githubLink && project.githubLink !== '#' && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted hover:text-accent transition-colors"
                          title="View Source"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.477 2 2 6.477 2 12C2 16.418 4.865 20.166 8.84 21.49C9.34 21.581 9.522 21.276 9.522 21.008C9.522 20.766 9.513 20.011 9.508 19.172C6.726 19.791 6.143 17.898 6.143 17.898C5.699 16.754 5.064 16.451 5.064 16.451C4.187 15.818 5.131 15.829 5.131 15.829C6.104 15.898 6.626 16.868 6.626 16.868C7.498 18.412 8.974 17.945 9.541 17.687C9.63 17.058 9.888 16.592 10.175 16.32C7.956 16.046 5.62 15.233 5.62 11.477C5.62 10.386 6.01 9.491 6.646 8.787C6.546 8.531 6.202 7.57 6.747 6.181C6.747 6.181 7.563 5.908 9.497 7.211C10.29 7.002 11.151 6.898 12.001 6.894C12.849 6.899 13.71 7.002 14.505 7.211C16.437 5.908 17.252 6.181 17.252 6.181C17.798 7.57 17.454 8.531 17.354 8.787C17.991 9.491 18.379 10.386 18.379 11.477C18.379 15.246 16.038 16.044 13.813 16.313C14.172 16.647 14.492 17.308 14.492 18.313C14.492 19.754 14.479 20.674 14.479 21.007C14.479 21.278 14.659 21.586 15.167 21.49C19.137 20.162 22 16.418 22 12C22 6.477 17.523 2 12 2Z" />
                          </svg>
                        </a>
                      )}
                      {project.liveLink && project.liveLink !== '#' && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted hover:text-red transition-colors"
                          title="Live Project"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>

                  {/* 2-column layout (stacks on mobile) */}
                  <div className="flex flex-col md:flex-row gap-6 md:gap-8 flex-1">
                    {/* Image Display */}
                    <div className="w-full md:w-[60%] border-4 border-border-strong p-1 relative shadow-[6px_6px_0px_var(--color-border-strong)] bg-primary flex items-center justify-center">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 object-cover object-center opacity-90 hover:opacity-100" 
                      />
                    </div>

                    <div className="w-full md:w-[40%] flex flex-col justify-center">
                      {/* Hide highlights on mobile */}
                      <div className="hidden md:block">
                        <h4 className="text-xs font-mono text-red uppercase tracking-widest mb-4 flex items-center gap-2">
                          <span className="w-2 h-2 bg-red inline-block"></span>
                          System Highlights
                        </h4>
                        <ul className="space-y-4">
                          {project.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <span className="text-xs mt-1 text-border-strong opacity-50">#</span>
                              <span className="text-[13px] text-muted leading-relaxed font-mono">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center gap-2">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(() => [i, i > current ? 1 : -1])}
                  className="transition-all duration-200"
                  aria-label={`Go to project ${i + 1}`}
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

            <div className="flex items-center gap-4">
              <span className="font-mono text-[9px] tracking-widest text-muted/50 hidden md:inline">
                {String(current + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
              </span>
              <div className="flex gap-2">
                <button
                  onClick={() => paginate(-1)}
                  className="w-10 h-10 flex items-center justify-center border-2 border-border-strong hover:border-red hover:text-red transition-all duration-200 font-mono text-muted"
                  aria-label="Previous project"
                >
                  ←
                </button>
                <button
                  onClick={() => paginate(1)}
                  className="w-10 h-10 flex items-center justify-center border-2 border-border-strong hover:border-red hover:text-red transition-all duration-200 font-mono text-muted"
                  aria-label="Next project"
                >
                  →
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;