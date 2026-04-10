import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const timelineData = [
    // {
    //   year: "2026",
    //   title: "Smart Energy Meter Project",
    //   subtitle: "IoT & Hardware Integration",
    //   description: "Successfully built and deployed a real-time energy monitoring system using Arduino, NodeMCU, and React. Solved critical data sync issues between hardware and web dashboard.",
    //   type: "project"
    // },
    {
      year: "Aug 2025 – Dec 2025",
      title: "AI Intern",
      subtitle: "LearnFlu (Remote)",
      description: "Developed RESTful APIs with ML model integration. Improved pipeline efficiency by 30% using Azure ML optimizations and built microservices for scalable model access.",
      type: "project"
    },
    {
      year: "2025-26",
      title: "Backend Development Mastery",
      subtitle: "Java & Spring Boot",
      description: "Mastered Java, Spring Boot, and robust database architectures. Built complex RESTful applications including secure E-commerce backends.",
      type: "milestone"
    },
    {
      year: "Nov 2024",
      title: "Oracle Database Specialist",
      subtitle: "Certification",
      description: "Earned the Oracle Database Specialist certification, validating expertise in database design, complex queries, and data management using Oracle SQL.",
      type: "certification"
    },
    {
      year: "2024",
      title: "Hackathon Winner",
      subtitle: "AI Implementation",
      description: "Secured 1st Prize for developing an AI-powered computer vision application solving real-world accessibility problems.",
      type: "achievement"
    },
    {
      year: "2023 - 2027",
      title: "Bachelor of Engineering",
      subtitle: "Saveetha School of Engineering",
      description: "Pursuing Computer Science and Engineering. Focusing on Data Structures, Algorithms, and System Design. maintained a consistent academic record.",
      type: "education"
    }
  ];

  return (
    <section id="education" className="section-padding bg-transparent relative">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <ScrollReveal delay={0}>
            <h4 className="font-mono text-sm text-muted mb-2 tracking-widest uppercase"><span className="text-red">// 05</span> &mdash; EXPERIENCE</h4>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-accent"><span className="glitch-hover" data-text="MY JOURNEY">MY JOURNEY</span></h2>
            <div className="w-16 h-[2px]" style={{ backgroundColor: 'var(--color-red)', opacity: 0.6 }}></div>
          </ScrollReveal>
        </motion.div>

        <div className="relative max-w-4xl mx-auto pl-4 md:pl-0">
          {/* Vertical line on the left */}
          <div className="absolute left-[29px] top-2 bottom-0 w-[1px] bg-red/10 overflow-hidden">
            <motion.div 
              animate={{ 
                y: ["-100%", "100%"],
                opacity: [0.1, 1, 0.1]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="w-full h-1/4 bg-gradient-to-b from-transparent via-red-500 to-transparent"
              style={{ filter: 'drop-shadow(0 0 4px var(--color-red))' }}
            />
          </div>

          <div className="space-y-8">
            {timelineData.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex gap-6 md:gap-8 min-h-[80px]"
              >
                {/* Tactical Node (Crosshair style) */}
                <div className="relative z-10 flex-shrink-0 mt-1.5 ml-[21px]">
                  <div className="relative flex items-center justify-center w-4 h-4">
                    {/* Crosshair Lines */}
                    <div className="absolute w-full h-[1px] bg-red/40"></div>
                    <div className="absolute h-full w-[1px] bg-red/40"></div>
                    {/* Inner Square */}
                    <motion.div 
                      animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className={`w-2 h-2 bg-primary border ${item.type === 'education' ? 'border-blue-400' :
                        item.type === 'project' ? 'border-green-400' :
                          item.type === 'achievement' ? 'border-amber-400' :
                            item.type === 'certification' ? 'border-red-500' : 'border-purple-400'
                        }`} 
                    />
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-grow pt-0 pb-6 relative" style={{ borderBottom: '2px solid var(--color-border-strong)' }}>
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-3">
                    <h3 className="text-lg md:text-xl font-bold text-light uppercase tracking-tight">{item.title}</h3>
                    <span className={`inline-block px-2 py-1 text-[10px] font-mono border-2 font-bold uppercase w-fit whitespace-nowrap ${item.type === 'education' ? 'text-blue-400 border-blue-400 bg-blue-400/5' :
                      item.type === 'project' ? 'text-green-400 border-green-400 bg-green-400/5' :
                        item.type === 'achievement' ? 'text-amber-400 border-amber-400 bg-amber-400/5' :
                          item.type === 'certification' ? 'text-red-500 border-red-500 bg-red-500/5' : 'text-purple-400 border-purple-400 bg-purple-400/5'
                      }`} style={{ borderRadius: '0px', boxShadow: '2px 2px 0px currentColor' }}>
                      {item.year}
                    </span>
                  </div>

                  <h4 className="text-sm font-mono text-muted mb-3 font-semibold uppercase">{item.subtitle}</h4>
                  <p className="text-muted text-sm leading-relaxed max-w-2xl">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;