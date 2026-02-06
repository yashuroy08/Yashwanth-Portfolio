import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const categories = [
    {
      name: "Frontend",
      skills: ["React.js", "React Native", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"]
    },
    {
      name: "Backend",
      skills: ["Node.js", "Express.js", "Python", "Java", "REST APIs", "WebSockets"]
    },
    {
      name: "Database",
      skills: ["SQL", "MongoDB", "PostgreSQL"]
    },
    {
      name: "DevOps & Tools",
      skills: ["Git", "Docker", "Google Gemini API"]
    },
    {
      name: "AI/ML",
      skills: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "Keras"]
    }
  ];

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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="skills" className="section-padding bg-transparent">
      <div className="container-custom" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h4 className="font-mono text-sm text-muted mb-2">EXPERTISE</h4>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="w-16 h-[2px] bg-light opacity-50"></div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {categories.map((category, i) => (
            <motion.div
              key={i}
              className="border border-muted/20 bg-secondary/50 p-6"
              variants={itemVariants}
            >
              <h3 className="text-light font-medium mb-4 pb-2 border-b border-muted border-opacity-20">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, j) => (
                  <motion.div
                    key={j}
                    className="group relative flex items-center px-3 py-2 border border-muted/10 bg-primary/20 transition-all duration-300 hover:border-light/20"
                    whileHover={{ y: -2 }}
                  >
                    <div className="w-1 h-1 bg-light rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="text-[11px] font-mono tracking-wider text-muted group-hover:text-light transition-colors">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="mt-16 flex flex-col md:flex-row items-center justify-between p-6 border border-muted/20 bg-secondary/50"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-medium mb-2">Ready to collaborate?</h3>
            <p className="text-muted">Let's discuss how my skills can help your project.</p>
          </div>
          <a href="#contact" className="btn btn-primary whitespace-nowrap">
            Get in Touch
            <span className="ml-2">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;