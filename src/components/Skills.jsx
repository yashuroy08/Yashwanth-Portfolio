import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const categories = [
    {
      name: "Frontend",
      // Category icon (Keep SVG for abstract concept)
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
      skills: [
        { name: "React.js", icon: <i className="devicon-react-original colored text-lg"></i> },
        { name: "React Native", icon: <i className="devicon-react-original colored text-lg"></i> },
        { name: "Next.js", icon: <i className="devicon-nextjs-plain text-white text-lg"></i> },
        { name: "TypeScript", icon: <i className="devicon-typescript-plain colored text-lg"></i> },
        { name: "JavaScript", icon: <i className="devicon-javascript-plain colored text-lg"></i> },
        { name: "HTML5", icon: <i className="devicon-html5-plain colored text-lg"></i> },
        { name: "CSS3", icon: <i className="devicon-css3-plain colored text-lg"></i> },
        { name: "Tailwind CSS", icon: <i className="devicon-tailwindcss-original colored text-lg"></i> }
      ]
    },
    {
      name: "Backend",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
      skills: [
        { name: "Node.js", icon: <i className="devicon-nodejs-plain-wordmark colored text-lg"></i> },
        { name: "Express.js", icon: <i className="devicon-express-original text-white text-lg"></i> },
        { name: "Python", icon: <i className="devicon-python-plain colored text-lg"></i> },
        { name: "Java", icon: <i className="devicon-java-plain colored text-lg"></i> },
        { name: "REST APIs", icon: <i className="devicon-fastapi-plain colored text-lg"></i> }, // Proxy icon
        { name: "WebSockets", icon: <i className="devicon-socketio-original text-white text-lg"></i> } // Proxy icon
      ]
    },
    {
      name: "Database",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
        </svg>
      ),
      skills: [
        { name: "SQL", icon: <i className="devicon-mysql-plain colored text-lg"></i> },
        { name: "MongoDB", icon: <i className="devicon-mongodb-plain colored text-lg"></i> },
        { name: "PostgreSQL", icon: <i className="devicon-postgresql-plain colored text-lg"></i> }
      ]
    },
    {
      name: "DevOps & Tools",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      ),
      skills: [
        { name: "Git", icon: <i className="devicon-git-plain colored text-lg"></i> },
        { name: "Docker", icon: <i className="devicon-docker-plain colored text-lg"></i> },
        { name: "Google Gemini", icon: <i className="devicon-google-plain colored text-lg"></i> } // Fallback to Google G
      ]
    },
    {
      name: "AI/ML",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"></path>
          <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
          <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" transform="rotate(45 12 12)"></path>
          <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" transform="rotate(-45 12 12)"></path>
        </svg>
      ),
      skills: [
        { name: "Python", icon: <i className="devicon-python-plain colored text-lg"></i> },
        { name: "TensorFlow", icon: <i className="devicon-tensorflow-original colored text-lg"></i> },
        { name: "PyTorch", icon: <i className="devicon-pytorch-original colored text-lg"></i> },
        { name: "Scikit-learn", icon: <i className="devicon-scikitlearn-plain colored text-lg"></i> },
        { name: "Keras", icon: <i className="devicon-keras-plain colored text-lg"></i> } // Use plain/SVG if available
      ]
    },
    {
      name: "IoT & Hardware",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 13.381h20M8.66 19.381V5.666M15.32 19.381V5.666M2.5 16.381h19M2.5 10.381h19" />
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" opacity="0.1" />
        </svg>
      ),
      skills: [
        { name: "C++", icon: <i className="devicon-cplusplus-plain colored text-lg"></i> },
        { name: "Arduino", icon: <i className="devicon-arduino-plain colored text-lg"></i> },
        {
          name: "NodeMCU",
          // Devicon lacks NodeMCU specific, use embedded SVG fallback or similar chip icon
          icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#4B5563"><path d="M5 3h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2z M7 7h3v3H7z M14 7h3v3h-3z M7 14h3v3H7z M14 14h3v3h-3z" /></svg>
        },
        { name: "Firebase", icon: <i className="devicon-firebase-plain colored text-lg"></i> },
        {
          name: "IoT Cloud",
          // Generic cloud icon from Lucide/SVG
          icon: <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#00A4E4"><path d="M19.36 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.64-4.96z" /></svg>
        }
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
          className="mb-12"
        >
          <h4 className="font-mono text-sm text-muted mb-2 tracking-widest uppercase">EXPERTISE</h4>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="w-16 h-[2px] bg-light opacity-50"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, i) => (
            <motion.div
              key={i}
              className="border border-muted/20 bg-secondary/30 backdrop-blur-sm p-6 rounded-none hover:border-muted/40 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="text-light font-medium mb-4 pb-2 border-b border-muted/10 flex items-center gap-2">
                <span className="text-accent">{category.icon}</span>
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, j) => (
                  <div
                    key={j}
                    className="group relative flex items-center px-3 py-2 border border-muted/10 bg-primary/40 hover:bg-muted/10 transition-all duration-300 hover:border-light/20 cursor-default"
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

        <motion.div
          className="mt-16 flex flex-col md:flex-row items-center justify-between p-8 border border-muted/20 bg-secondary/30 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">Ready to collaborate?</h3>
            <p className="text-muted text-sm max-w-md">I'm currently available for freelance work and new opportunities. Let's build something extraordinary.</p>
          </div>
          <a href="#contact" className="px-6 py-3 bg-light text-primary font-bold text-sm tracking-wide uppercase hover:bg-white transition-colors duration-300">
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;