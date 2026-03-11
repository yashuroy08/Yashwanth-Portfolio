import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary py-12" style={{ borderTop: '1px solid var(--color-border-strong)' }}>
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 md:mb-0"
          >
            <div className="flex items-center mb-4 gap-3">
              <div
                className="flex items-center justify-center w-10 h-10 border-2"
                style={{
                  background: 'var(--color-red)',
                  borderColor: 'var(--color-border-strong)',
                  boxShadow: '4px 4px 0px var(--color-border-strong)',
                }}
              >
                <span className="text-sm font-black tracking-tight text-white font-mono">YP</span>
              </div>
              <span className="font-mono text-[10px] tracking-[0.5em] text-accent uppercase font-bold">DEVELOPER PORTFOLIO</span>
            </div>
            <p className="text-muted text-[10px] font-mono uppercase tracking-widest border-2 w-fit px-2 py-1 border-border-strong">
              Backend Engineer
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex space-x-6 md:ml-auto"
          >
            <a href="#home" className="text-muted hover:text-light transition-colors uppercase tracking-widest text-[10px] font-mono">HOME</a>
            <a href="#projects" className="text-muted hover:text-light transition-colors uppercase tracking-widest text-[10px] font-mono">PROJECTS</a>
            <a href="#skills" className="text-muted hover:text-light transition-colors uppercase tracking-widest text-[10px] font-mono">SKILLS</a>
            <a href="#contact" className="text-muted hover:text-light transition-colors uppercase tracking-widest text-[10px] font-mono">CONTACT</a>
          </motion.div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between" style={{ borderTop: '2px solid var(--color-border-strong)' }}>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-mono tracking-widest uppercase text-muted mb-4 md:mb-0"
          >
            © {currentYear} Yashwanth Patam. All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;