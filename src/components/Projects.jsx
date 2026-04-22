import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from './ScrollReveal';
import TiltCard from './TiltCard';
import GlitchText from './GlitchText';

const projects = [
  {
    title: "E-commerce Backend Service",
    description: "A high-performance backend architecture for a modern e-commerce ecosystem. Developed using Spring Boot and MongoDB, this service handles complex business logic, concurrent order processing, and secure financial transactions through a multi-layered microservices-ready approach deployed on Render and Vercel.",
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
    description: "A sophisticated Role-Based Access Control (RBAC) system featuring granular permission management and dynamic role assignment. The system handles secure user authentication, complex authorization hierarchies, and real-time security monitoring. It was designed to provide a modular security layer that can be seamlessly integrated into any enterprise-grade application.",
    tech: ["Spring Boot", "Spring Security", "JWT", "MySQL", "JPA"],
    color: "from-indigo-500/20 to-blue-500/20",
    liveLink: "#",
    githubLink: "https://github.com/yashuroy08/RBAC",
    highlights: [
      "Granular permission-based access control (RBAC)",
      "Secure user authentication with stateless JWT validation",
      "Dynamic role-permission mapping with MySQL backend",
      "Automated risk evaluation & session management"
    ]
  }
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="projects" className="section-padding bg-transparent relative overflow-hidden">
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
            <p className="text-muted max-w-2xl text-lg">
              A selection of my recent works, focusing on robust backend architectures, enterprise solutions, and secure applications.
            </p>
          </ScrollReveal>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Project selector */}
          <motion.div
            className="md:col-span-4 space-y-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`group relative p-5 cursor-pointer transition-all duration-300 ${activeProject === index
                  ? "nothing-card"
                  : "hover:bg-secondary/20 border border-transparent rounded-sm"
                  }`}
                onClick={() => setActiveProject(index)}
              >
                {activeProject === index && <div className="nothing-corner-bottom pointer-events-none absolute inset-0 z-0"></div>}

                {/* Selection indicator line */}
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-[2px]"
                  style={{ backgroundColor: 'var(--color-red)' }}
                  initial={false}
                  animate={{
                    opacity: activeProject === index ? 0.9 : 0,
                    height: activeProject === index ? '100%' : '0%'
                  }}
                />

                <h3 className={`font-semibold text-lg mb-1 transition-colors duration-300 ${activeProject === index ? "text-light" : "text-muted group-hover:text-light/80"
                  }`}>
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.slice(0, 3).map((t, i) => (
                    <span key={i} className="text-[10px] uppercase tracking-tighter text-muted/60 font-mono">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Blueprint Overlay (Appears on Hover) */}
                <div className="absolute inset-0 border-2 border-red opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20" style={{ mixBlendMode: 'difference' }}>
                  {/* Spec Labels */}
                  <div className="absolute top-2 right-2 font-mono text-[8px] bg-red text-white px-1 tracking-widest uppercase shadow-[2px_2px_0px_#000]">
                    [SYS.ID: {index + 1}00]
                  </div>
                  <div className="absolute bottom-2 right-2 font-mono text-[8px] text-red border border-red px-1 bg-black/50">
                    TARGET: ACQUIRED
                  </div>
                  {/* Crosshairs */}
                  <div className="absolute top-1/2 left-2 w-2 h-px bg-red"></div>
                  <div className="absolute top-2 left-1/2 w-px h-2 bg-red"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Project details area */}
          <div className="md:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
              >
                <TiltCard
                  maxTilt={6}
                  glare={true}
                  className="nothing-card overflow-hidden cursor-default"
                >
                {/* Bottom crosshairs for Nothing style */}
                <div className="nothing-corner-bottom pointer-events-none absolute inset-0 z-0"></div>

                <div className="p-6 md:p-8 relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold">{projects[activeProject]?.title}</h3>
                  </div>

                  <p className="text-muted mb-8 leading-relaxed text-lg">
                    {projects[activeProject]?.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="text-xs font-mono text-light uppercase tracking-widest mb-4 opacity-70">[_FEATURES]</h4>
                      <ul className="space-y-3">
                        {projects[activeProject]?.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="text-xs mt-1" style={{ color: 'var(--color-red)' }}>●</span>
                            <span className="text-sm text-muted">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xs font-mono text-light uppercase tracking-widest mb-4 opacity-70">[_STACK]</h4>
                      <div className="flex flex-wrap gap-2">
                        {projects[activeProject]?.tech.map((tech, i) => (
                          <span
                            key={i}
                            className={`text-[10px] py-1 px-2 border-2 font-mono uppercase font-bold tracking-[0.1em] text-accent border-border-strong bg-primary`}
                            style={{ boxShadow: '2px 2px 0px var(--color-border-strong)' }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 flex flex-wrap gap-4" style={{ borderTop: '2px solid var(--color-border-strong)' }}>
                    {projects[activeProject]?.liveLink && projects[activeProject].liveLink !== '#' && (
                      <a
                        href={projects[activeProject]?.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glitch-click group flex items-center justify-center font-bold text-xs tracking-widest uppercase transition-all duration-200 text-white bg-red border-2 border-accent"
                        style={{
                          backgroundColor: 'var(--color-red)',
                          padding: '0.75rem 1.5rem',
                          boxShadow: '4px 4px 0px var(--color-accent)',
                          transform: 'translate(-2px, -2px)'
                        }}
                        onMouseOver={(e) => { e.currentTarget.style.transform = 'translate(0px, 0px)'; e.currentTarget.style.boxShadow = '0px 0px 0px var(--color-accent)'; }}
                        onMouseOut={(e) => { e.currentTarget.style.transform = 'translate(-2px, -2px)'; e.currentTarget.style.boxShadow = '4px 4px 0px var(--color-accent)'; }}
                      >
                        [EXECUTE] LIVE_PROJECT
                        <svg className="ml-2 w-4 h-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                      </a>
                    )}

                    {projects[activeProject]?.githubLink && projects[activeProject].githubLink !== '#' && (
                      <a
                        href={projects[activeProject]?.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="glitch-click group flex items-center justify-center font-bold text-xs tracking-widest uppercase transition-all duration-200 text-light bg-primary border-2 border-border-strong"
                        style={{
                          padding: '0.75rem 1.5rem',
                          boxShadow: '4px 4px 0px var(--color-border-strong)',
                          transform: 'translate(-2px, -2px)'
                        }}
                        onMouseOver={(e) => { e.currentTarget.style.transform = 'translate(0px, 0px)'; e.currentTarget.style.boxShadow = '0px 0px 0px var(--color-border-strong)'; }}
                        onMouseOut={(e) => { e.currentTarget.style.transform = 'translate(-2px, -2px)'; e.currentTarget.style.boxShadow = '4px 4px 0px var(--color-border-strong)'; }}
                      >
                        [VIEW] SOURCE_CODE
                        <svg className="ml-2 w-4 h-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.477 2 2 6.477 2 12C2 16.418 4.865 20.166 8.84 21.49C9.34 21.581 9.522 21.276 9.522 21.008C9.522 20.766 9.513 20.011 9.508 19.172C6.726 19.791 6.143 17.898 6.143 17.898C5.699 16.754 5.064 16.451 5.064 16.451C4.187 15.818 5.131 15.829 5.131 15.829C6.104 15.898 6.626 16.868 6.626 16.868C7.498 18.412 8.974 17.945 9.541 17.687C9.63 17.058 9.888 16.592 10.175 16.32C7.956 16.046 5.62 15.233 5.62 11.477C5.62 10.386 6.01 9.491 6.646 8.787C6.546 8.531 6.202 7.57 6.747 6.181C6.747 6.181 7.563 5.908 9.497 7.211C10.29 7.002 11.151 6.898 12.001 6.894C12.849 6.899 13.71 7.002 14.505 7.211C16.437 5.908 17.252 6.181 17.252 6.181C17.798 7.57 17.454 8.531 17.354 8.787C17.991 9.491 18.379 10.386 18.379 11.477C18.379 15.246 16.038 16.044 13.813 16.313C14.172 16.647 14.492 17.308 14.492 18.313C14.492 19.754 14.479 20.674 14.479 21.007C14.479 21.278 14.659 21.586 15.167 21.49C19.137 20.162 22 16.418 22 12C22 6.477 17.523 2 12 2Z" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
                </TiltCard>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;