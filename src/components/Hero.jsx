import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Avatar from './Avatar';

const DottedText = ({ text }) => {
  return (
    <div className="relative inline-block overflow-visible group">
      <span className="relative z-10 text-accent/90">{text}</span>
      <div className="absolute inset-0 opacity-[0.05] group-hover:opacity-10 transition-opacity bg-accent blur-md -z-10"></div>
    </div>
  );
};

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };


  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-transparent pt-16">



      <div className="container-custom relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          <motion.div
            className="w-full lg:w-3/5 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >


            <motion.div variants={childVariants} className="mb-8">
              <h2 className="font-mono text-[12px] tracking-[0.4em] text-muted mb-4 opacity-70">HI,I AM </h2>
              <h1 className="font-mono tracking-tighter text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-none">
                <DottedText text="YASHWANTH PATAM" />
              </h1>
              <div className="flex items-center justify-center lg:justify-start gap-4 text-xl md:text-2xl text-muted font-light tracking-wide italic">
                <div className="w-1.5 h-1.5 rounded-full bg-accent/80 shadow-[0_0_10px_rgba(var(--color-accent),0.3)]"></div>
                Full-Stack Developer & AI/ML Researcher
              </div>
            </motion.div>

            <motion.p
              variants={childVariants}
              className="text-muted text-lg md:text-xl mb-12 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed opacity-80"
            >
              Crafting high-performance <span className="text-accent">Full-Stack applications</span> with the MERN stack , while exploring the frontiers of <span className="text-accent">Artificial Intelligence</span> using TensorFlow and PyTorch. Committed to building seamless, premium user experiences and robust digital solutions.
            </motion.p>

            <motion.div
              variants={childVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-8 mb-14"
            >
              <a href="https://github.com/yashuroy08" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted hover:text-light transition-colors">
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12C2 16.418 4.865 20.166 8.84 21.49C9.34 21.581 9.522 21.276 9.522 21.008C9.522 20.766 9.513 20.011 9.508 19.172C6.726 19.791 6.143 17.898 6.143 17.898C5.699 16.754 5.064 16.451 5.064 16.451C4.187 15.818 5.131 15.829 5.131 15.829C6.104 15.898 6.626 16.868 6.626 16.868C7.498 18.412 8.974 17.945 9.541 17.687C9.63 17.058 9.888 16.592 10.175 16.32C7.956 16.046 5.62 15.233 5.62 11.477C5.62 10.386 6.01 9.491 6.646 8.787C6.546 8.531 6.202 7.57 6.747 6.181C6.747 6.181 7.563 5.908 9.497 7.211C10.29 7.002 11.151 6.898 12.001 6.894C12.849 6.899 13.71 7.002 14.505 7.211C16.437 5.908 17.252 6.181 17.252 6.181C17.798 7.57 17.454 8.531 17.354 8.787C17.991 9.491 18.379 10.386 18.379 11.477C18.379 15.246 16.038 16.044 13.813 16.313C14.172 16.647 14.492 17.308 14.492 18.313C14.492 19.754 14.479 20.674 14.479 21.007C14.479 21.278 14.659 21.586 15.167 21.49C19.137 20.162 22 16.418 22 12C22 6.477 17.523 2 12 2Z" />
                </svg>
                GITHUB
              </a>

              <a href="https://leetcode.com/u/Yashuroy08/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted hover:text-light transition-colors">
                <img src="https://leetcode.com/_next/static/images/logo-dark-c96c407d175e36c81e236fcfdd682a0b.png"
                  alt="LeetCode Logo"
                  className="w-6 h-6" />
                LEETCODE
              </a>

              <a href="https://www.linkedin.com/in/yashwanth-patam-506044324/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted hover:text-light transition-colors">
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z" />
                </svg>
                LINKEDIN
              </a>
            </motion.div>

            <motion.div
              variants={childVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6"
            >
              <a href="#projects" className="nothing-btn group px-10 py-4 font-mono text-xs letter-spacing-widest">
                EXPLORE_PROJECTS
              </a>
              <a href={import.meta.env.VITE_RESUME_URL || "/resume.pdf"} target="_blank" rel="noopener noreferrer" className="nothing-btn group px-10 py-4 font-mono text-xs letter-spacing-widest">
                VIEW_RESUME
              </a>
            </motion.div>
          </motion.div>

          <div className="w-full lg:w-2/5 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative hidden md:block"
            >
              <div className="absolute inset-0 bg-light opacity-[0.03] blur-[60px] rounded-full scale-125"></div>
              <Avatar />
            </motion.div>
          </div>
        </div>
      </div>


    </section>
  );
};

export default Hero;
