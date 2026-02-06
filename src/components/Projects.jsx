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
      liveLink: "",
      highlights: [
        "Secure user authentication and authorization",
        "Dynamic product catalog with search and filter",
        "Integrated payment gateway",
        "Admin dashboard for order management"
      ]
    },
    {
      title: "URL Shortener Service",
      description: "A high-performance URL shortening service that transforms long URLs into manageable links. It features analytics tracking to monitor click-through rates and geographical data of users. Built with scalability in mind, it handles concurrent requests efficiently while providing a clean user interface for generating and managing links.",
      tech: ["Node.js", "Express.js", "MongoDB", "Redis", "React"],
      color: "from-green-500/20 to-teal-500/20",
      liveLink: "",
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
      liveLink: "",
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

                  {projects[activeProject].liveLink && (
                    <div className="pt-6 border-t border-muted/10">
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
                    </div>
                  )}
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