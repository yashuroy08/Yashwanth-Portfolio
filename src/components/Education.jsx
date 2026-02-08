import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const timelineData = [
    {
      year: "2026",
      title: "Smart Energy Meter Project",
      subtitle: "IoT & Hardware Integration",
      description: "Successfully built and deployed a real-time energy monitoring system using Arduino, NodeMCU, and React. Solved critical data sync issues between hardware and web dashboard.",
      type: "project"
    },
    {
      year: "2025-26",
      title: "Full-Stack Development Mastery",
      subtitle: "MERN Stack Expert",
      description: "Mastered React, Node.js, and MongoDB. Built complex applications including a full-featured E-commerce platform with payment integration.",
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
          <h4 className="font-mono text-sm text-muted mb-2 tracking-widest uppercase">EXPERIENCE</h4>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Journey</h2>
          <div className="w-16 h-[2px] bg-light opacity-50"></div>
        </motion.div>

        <div className="relative max-w-4xl mx-auto pl-4 md:pl-0">
          {/* Vertical line on the left */}
          <div className="absolute left-[29px] top-2 bottom-0 w-[1px] bg-muted/20"></div>

          <div className="space-y-8">
            {timelineData.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex gap-6 md:gap-8 min-h-[80px]"
              >
                {/* Timeline Dot (Minimal Ring) */}
                <div className="relative z-10 flex-shrink-0 mt-1.5 ml-[21px]">
                  <div className={`w-4 h-4 rounded-full border-2 bg-[#050505] ${item.type === 'education' ? 'border-blue-400/80' :
                    item.type === 'project' ? 'border-green-400/80' :
                      item.type === 'achievement' ? 'border-amber-400/80' :
                        item.type === 'certification' ? 'border-red-500/80' : 'border-purple-400/80'
                    }`}></div>
                </div>

                {/* Content Card */}
                <div className="flex-grow pt-1 pb-6 border-b border-muted/10 last:border-0 relative">
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 mb-2">
                    <h3 className="text-lg md:text-xl font-bold text-light">{item.title}</h3>
                    <span className={`inline-block px-2 py-0.5 text-[10px] font-mono border rounded w-fit whitespace-nowrap ${item.type === 'education' ? 'text-blue-400 border-blue-400/20 bg-blue-400/5' :
                      item.type === 'project' ? 'text-green-400 border-green-400/20 bg-green-400/5' :
                        item.type === 'achievement' ? 'text-amber-400 border-amber-400/20 bg-amber-400/5' :
                          item.type === 'certification' ? 'text-red-500 border-red-500/20 bg-red-500/5' : 'text-purple-400 border-purple-400/20 bg-purple-400/5'
                      }`}>
                      {item.year}
                    </span>
                  </div>

                  <h4 className="text-sm font-mono text-muted/80 mb-2">{item.subtitle}</h4>
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