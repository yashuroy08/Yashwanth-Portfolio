import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary py-12 border-t border-muted border-opacity-20">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 md:mb-0"
          >
            <div className="flex items-center mb-4">
              <div className="flex items-center justify-center w-8 h-8 border border-light/50 mr-4">
                <span className="font-mono text-xs font-black tracking-tighter text-light">YP</span>
              </div>
              <span className="font-mono text-lg tracking-[0.2em] text-light">YASHWANTH</span>
            </div>
            <p className="text-muted text-xs font-mono uppercase tracking-widest">
              Full-Stack Developer & AI/ML Researcher
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-6 md:ml-auto"
          >
            <a href="#home" className="text-muted hover:text-light transition-colors">Home</a>
            <a href="#projects" className="text-muted hover:text-light transition-colors">Projects</a>
            <a href="#skills" className="text-muted hover:text-light transition-colors">Skills</a>
            <a href="#contact" className="text-muted hover:text-light transition-colors">Contact</a>
          </motion.div>
        </div>

        <div className="border-t border-muted border-opacity-10 pt-8 flex flex-col md:flex-row items-center justify-between">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm text-muted mb-4 md:mb-0"
          >
            © {currentYear} Yashwanth Patam. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;