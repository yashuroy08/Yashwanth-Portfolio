import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "Full-Stack E-commerce Platform",
      description: "A robust online shopping platform featuring a seamless shopping experience. Users can browse products, manage their cart, and securely check out. The admin dashboard provides comprehensive controls for product management, order tracking, and inventory updates, ensuring efficient business operations. Built with modern web technologies to ensure performance and scalability.",
      tech: ["React", "Node.js", "Express.js", "MongoDB"],
      color: "from-blue-500/20 to-purple-500/20",
      liveLink: "https://threads-fashion.vercel.app/",
      githubLink: "https://github.com/yashuroy08/Threads-Fashion",
      highlights: [
        "Secure user authentication and authorization",
        "Dynamic product catalog with search and filter",
        "Integrated payment gateway",
        "Admin dashboard for order management"
      ]
    },
    {
      title: "Smart Energy Meter",
      description: "IoT-based system monitoring real-time energy consumption. Integrates hardware sensors with a web dashboard for data visualization and bill estimation, helping users track and reduce their energy footprint.",
      tech: ["C++", "Arduino", "NodeMCU", "Firebase", "React"],
      color: "from-green-500/20 to-emerald-500/20",
      liveLink: "https://youtu.be/2p0IYR5LZQY?si=B-mUne3wt7dyw4SU",
      githubLink: "https://github.com/yashuroy08/SmartMeter-",
      highlights: [
        "Real-time voltage & current monitoring",
        "WiFi-enabled data transmission using NodeMCU",
        "Live usage dashboard with bill estimation",
        "Alert system for high consumption"
      ]
    },
    {
      title: "URL Shortener Service",
      description: "A high-performance URL shortening service that transforms long URLs into manageable links. It features analytics tracking to monitor click-through rates and geographical data of users. Built with scalability in mind, it handles concurrent requests efficiently while providing a clean user interface for generating and managing links.",
      tech: ["Node.js", "Express.js", "MongoDB", "Redis", "React"],
      color: "from-green-500/20 to-teal-500/20",
      liveLink: "#",
      githubLink: "#",
      highlights: [
        "Fast redirection with caching mechanisms",
        "Detailed link analytics and tracking",
        "Custom alias support for branded links",
        "QR code generation for links"
      ]
    },
    {
      title: "Weather Forecast App",
      description: "A cross-platform mobile application built with Flutter and Dart that delivers real-time weather updates. It features a beautiful, responsive UI that adapts to current weather conditions, offering hourly and weekly forecasts, humidity levels, and wind speed details for any location worldwide. The app leverages device sensors for location access and provides accurate data visualization.",
      tech: ["Flutter", "Dart", "OpenWeather API", "Geolocator", "Bloc Pattern"],
      color: "from-orange-500/20 to-red-500/20",
      liveLink: "#",
      githubLink: "#",
      highlights: [
        "Real-time weather data integration",
        "Automatic user location detection",
        "Dynamic background animations based on weather",
        "7-day forecast visualization"
      ]
    }
  ];

  const getTechColor = (tech) => {
    const colors = {
      'React': 'text-blue-400 border-blue-400/30 bg-blue-400/5',
      'Node.js': 'text-green-400 border-green-400/30 bg-green-400/5',
      'MongoDB': 'text-emerald-400 border-emerald-400/30 bg-emerald-400/5',
      'Flutter': 'text-sky-400 border-sky-400/30 bg-sky-400/5',
      'Express.js': 'text-gray-400 border-gray-400/30 bg-gray-400/5',
      'Redis': 'text-red-400 border-red-400/30 bg-red-400/5',
      'Dart': 'text-cyan-400 border-cyan-400/30 bg-cyan-400/5',
      'Paypal': 'text-indigo-400 border-indigo-400/30 bg-indigo-400/5',
      'OpenWeather API': 'text-orange-400 border-orange-400/30 bg-orange-400/5',
      'Geolocator': 'text-teal-400 border-teal-400/30 bg-teal-400/5',
      'Bloc Pattern': 'text-purple-400 border-purple-400/30 bg-purple-400/5',
      'C++': 'text-blue-600 border-blue-600/30 bg-blue-600/5',
      'Arduino': 'text-teal-500 border-teal-500/30 bg-teal-500/5',
      'NodeMCU': 'text-slate-400 border-slate-400/30 bg-slate-400/5',
      'Firebase': 'text-amber-400 border-amber-400/30 bg-amber-400/5',
    };
    return colors[tech] || 'text-muted border-muted/30 bg-primary';
  };

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
          <div className="flex items-center gap-4 mb-2">
            <div className="w-8 h-[1px] bg-light opacity-50"></div>
            <h4 className="font-mono text-sm text-muted tracking-widest uppercase">PORTFOLIO</h4>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <p className="text-muted max-w-2xl text-lg">
            A selection of my recent works, ranging from complex full-stack applications to cross-platform mobile experiences.
          </p>
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
                className={`group relative p-5 cursor-pointer transition-all duration-500 overflow-hidden ${activeProject === index
                  ? "bg-secondary bg-opacity-40"
                  : "hover:bg-secondary hover:bg-opacity-20"
                  }`}
                onClick={() => setActiveProject(index)}
              >
                {/* Selection indicator line */}
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-[2px] bg-light"
                  initial={false}
                  animate={{
                    opacity: activeProject === index ? 0.8 : 0,
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
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-secondary/10 border border-muted/10 rounded-sm overflow-hidden"
              >


                <div className="p-6 md:p-8">
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold">{projects[activeProject].title}</h3>
                  </div>

                  <p className="text-muted mb-8 leading-relaxed text-lg">
                    {projects[activeProject].description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="text-xs font-mono text-light uppercase tracking-widest mb-4 opacity-50">Key Features</h4>
                      <ul className="space-y-3">
                        {projects[activeProject].highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="text-light text-xs mt-1">●</span>
                            <span className="text-sm text-muted">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-xs font-mono text-light uppercase tracking-widest mb-4 opacity-50">Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {projects[activeProject].tech.map((tech, i) => (
                          <span
                            key={i}
                            className={`text-[10px] py-1.5 px-3 border border-opacity-20 font-mono uppercase tracking-[0.1em] transition-colors ${getTechColor(tech)}`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-muted/10 flex flex-wrap gap-4">
                    {projects[activeProject].liveLink && projects[activeProject].liveLink !== '#' && (
                      <a
                        href={projects[activeProject].liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="nothing-btn group"
                      >
                        EXPLORE LIVE PROJECT
                        <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                      </a>
                    )}

                    {projects[activeProject].githubLink && projects[activeProject].githubLink !== '#' && (
                      <a
                        href={projects[activeProject].githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="nothing-btn group"
                      >
                        GITHUB REPO
                        <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.477 2 2 6.477 2 12C2 16.418 4.865 20.166 8.84 21.49C9.34 21.581 9.522 21.276 9.522 21.008C9.522 20.766 9.513 20.011 9.508 19.172C6.726 19.791 6.143 17.898 6.143 17.898C5.699 16.754 5.064 16.451 5.064 16.451C4.187 15.818 5.131 15.829 5.131 15.829C6.104 15.898 6.626 16.868 6.626 16.868C7.498 18.412 8.974 17.945 9.541 17.687C9.63 17.058 9.888 16.592 10.175 16.32C7.956 16.046 5.62 15.233 5.62 11.477C5.62 10.386 6.01 9.491 6.646 8.787C6.546 8.531 6.202 7.57 6.747 6.181C6.747 6.181 7.563 5.908 9.497 7.211C10.29 7.002 11.151 6.898 12.001 6.894C12.849 6.899 13.71 7.002 14.505 7.211C16.437 5.908 17.252 6.181 17.252 6.181C17.798 7.57 17.454 8.531 17.354 8.787C17.991 9.491 18.379 10.386 18.379 11.477C18.379 15.246 16.038 16.044 13.813 16.313C14.172 16.647 14.492 17.308 14.492 18.313C14.492 19.754 14.479 20.674 14.479 21.007C14.479 21.278 14.659 21.586 15.167 21.49C19.137 20.162 22 16.418 22 12C22 6.477 17.523 2 12 2Z" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;