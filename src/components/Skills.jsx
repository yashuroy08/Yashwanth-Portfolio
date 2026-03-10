import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [viewMode, setViewMode] = useState('visual');

  const categories = [
    {
      name: "Frontend",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
      skills: [
        { name: "React.js", icon: <i className="devicon-react-original colored text-lg"></i> },
        { name: "HTML5", icon: <i className="devicon-html5-plain colored text-lg"></i> },
        { name: "CSS3", icon: <i className="devicon-css3-plain colored text-lg"></i> },
        { name: "JavaScript", icon: <i className="devicon-javascript-plain colored text-lg"></i> },
        { name: "Tailwind CSS", icon: <i className="devicon-tailwindcss-original colored text-lg"></i> }
      ]
    },
    {
      name: "Backend & Frameworks",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
      skills: [
        { name: "Java", icon: <i className="devicon-java-plain colored text-lg"></i> },
        { name: "Spring Boot", icon: <i className="devicon-spring-original colored text-lg"></i> },
        { name: "Hibernate / JPA", icon: <i className="devicon-java-plain text-white text-lg"></i> },
        { name: "REST APIs", icon: <i className="devicon-fastapi-plain colored text-lg"></i> }
      ]
    },
    {
      name: "Databases",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
        </svg>
      ),
      skills: [
        { name: "PostgreSQL", icon: <i className="devicon-postgresql-plain colored text-lg"></i> },
        { name: "MySQL", icon: <i className="devicon-mysql-plain colored text-lg"></i> },
        { name: "MongoDB", icon: <i className="devicon-mongodb-plain colored text-lg"></i> },
        { name: "Redis", icon: <i className="devicon-redis-plain colored text-lg"></i> }
      ]
    },
    {
      name: "DevOps & Cloud",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      ),
      skills: [
        { name: "Git", icon: <i className="devicon-git-plain colored text-lg"></i> },
        { name: "Docker", icon: <i className="devicon-docker-plain colored text-lg"></i> },
        { name: "CI / CD", icon: <i className="devicon-github-original text-white text-lg"></i> }
      ]
    },
    {
      name: "Build Tools & Testing",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
        </svg>
      ),
      skills: [
        { name: "Maven", icon: <i className="devicon-apache-plain text-white text-lg"></i> },
        { name: "Gradle", icon: <i className="devicon-gradle-plain colored text-lg"></i> },
        { name: "JUnit", icon: <i className="devicon-java-plain colored text-lg"></i> },
        { name: "Postman", icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#FF6C37"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z" /></svg> }
      ]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-transparent">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <ScrollReveal delay={0}>
            <div>
              <h4 className="font-mono text-[10px] text-accent/50 mb-2 tracking-[0.4em] uppercase"><span className="text-red">// 01</span> &mdash; EXPERTISE</h4>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight"><span className="glitch-hover" data-text="Technical Skills">Technical Skills</span></h2>
              <div className="w-12 h-[2px]" style={{ backgroundColor: 'var(--color-red)', opacity: 0.6 }}></div>
            </div>
          </ScrollReveal>

          <div className="flex items-center p-1" style={{ border: '2px solid var(--color-border-strong)', borderRadius: '0px' }}>
            <button
              onClick={() => setViewMode('visual')}
              className={`px-4 py-1.5 text-[10px] font-mono uppercase tracking-widest transition-all ${viewMode === 'visual' ? 'bg-red text-white' : 'text-muted hover:text-light'}`}
              style={viewMode === 'visual' ? { backgroundColor: 'var(--color-red)' } : {}}
            >
              Visual
            </button>
            <button
              onClick={() => setViewMode('json')}
              className={`px-4 py-1.5 text-[10px] font-mono uppercase tracking-widest transition-all ${viewMode === 'json' ? 'bg-red text-white' : 'text-muted hover:text-light'}`}
              style={viewMode === 'json' ? { backgroundColor: 'var(--color-red)' } : {}}
            >
              JSON View
            </button>
          </div>
        </motion.div>

        {viewMode === 'visual' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, i) => (
              <motion.div
                key={i}
                className="neo-card p-6 transition-all category-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              >
                <h3 className="text-light font-semibold mb-4 pb-2 flex items-center gap-2" style={{ borderBottom: '1px solid var(--color-border)' }}>
                  <span style={{ color: 'var(--color-red)' }}>{category.icon}</span>
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, j) => (
                    <div
                      key={j}
                      className="group relative flex items-center px-3 py-2 transition-all duration-300 cursor-default bg-surface"
                      style={{ border: '2px solid var(--color-border-strong)', borderRadius: '0px' }}
                    >
                      <div className="mr-2 transform group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </div>
                      <span className="text-xs font-mono text-muted group-hover:text-light transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full bg-primary overflow-hidden relative font-mono text-sm leading-relaxed transition-all duration-300"
            style={{ border: '2px solid var(--color-border-strong)', boxShadow: '8px 8px 0px var(--color-border-strong)' }}
            onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--color-red)'; e.currentTarget.style.boxShadow = '8px 8px 0px var(--color-red)'; }}
            onMouseOut={(e) => { e.currentTarget.style.borderColor = 'var(--color-border-strong)'; e.currentTarget.style.boxShadow = '8px 8px 0px var(--color-border-strong)'; }}
          >
            <div className="w-full h-8 bg-muted/5 flex items-center px-4" style={{ borderBottom: '1px solid var(--color-border)' }}>
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
              </div>
              <span className="ml-4 text-[10px] text-muted/60 tracking-wider">GET /api/v1/skills</span>
            </div>
            <div className="p-6 md:p-8 overflow-x-auto text-muted whitespace-pre">
              <span className="text-muted/70 dark:text-muted/50">{'{'}</span>
              <br />
              <span className="text-blue-600 dark:text-blue-400">  "developer"</span><span className="text-muted/70 dark:text-muted/50">: </span><span className="text-green-600 dark:text-green-400">"Java Backend Engineer"</span><span className="text-muted/70 dark:text-muted/50">,</span>
              <br />
              <span className="text-blue-600 dark:text-blue-400">  "status"</span><span className="text-muted/70 dark:text-muted/50">: </span><span className="text-purple-600 dark:text-purple-400">200</span><span className="text-muted/70 dark:text-muted/50">,</span>
              <br />
              <span className="text-blue-600 dark:text-blue-400">  "expertise"</span><span className="text-muted/70 dark:text-muted/50">: {'{'}</span>
              {categories.map((cat, i) => (
                <div key={i}>
                  <span className="text-blue-600 dark:text-blue-400">    "{cat.name.toLowerCase().replace(/ & /g, '_').replace(/ /g, '_')}"</span><span className="text-muted/70 dark:text-muted/50">: [</span>
                  {cat.skills.map((skill, j) => (
                    <span key={j} className="text-green-600 dark:text-green-400"> "{skill.name}"{j < cat.skills.length - 1 ? <span className="text-muted/70 dark:text-muted/50">,</span> : ''}</span>
                  ))}
                  <span className="text-muted/70 dark:text-muted/50">]{i < categories.length - 1 ? ',' : ''}</span>
                </div>
              ))}
              <span className="text-muted/70 dark:text-muted/50">  {'}'}</span>
              <br />
              <span className="text-muted/70 dark:text-muted/50">{'}'}</span>
            </div>
          </motion.div>
        )}

        <motion.div
          className="mt-16 flex flex-col md:flex-row items-center justify-between p-8 neo-card"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Ready to collaborate?</h3>
            <p className="text-muted text-sm max-w-md">I'm currently available for freelance work and new opportunities. Let's build something extraordinary.</p>
          </div>
          <a href="#contact" className="px-6 py-3 font-bold text-sm tracking-wide uppercase transition-all duration-200 text-white bg-red"
            style={{
              backgroundColor: 'var(--color-red)',
              border: '2px solid var(--color-accent)',
              boxShadow: '4px 4px 0px var(--color-accent)',
              transform: 'translate(-2px, -2px)'
            }}
            onMouseOver={(e) => { e.currentTarget.style.transform = 'translate(0px, 0px)'; e.currentTarget.style.boxShadow = '0px 0px 0px var(--color-accent)'; }}
            onMouseOut={(e) => { e.currentTarget.style.transform = 'translate(-2px, -2px)'; e.currentTarget.style.boxShadow = '4px 4px 0px var(--color-accent)'; }}
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;