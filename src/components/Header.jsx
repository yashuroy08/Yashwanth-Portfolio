import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle.jsx';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = ['Home', 'Projects', 'Skills', 'Education', 'Contact'];

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section based on scroll position
      const sections = navItems.map(item => item.toLowerCase());
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerVariants = {
    initial: { y: -100 },
    animate: { y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } },
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 + 0.2, duration: 0.4 }
    })
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 transition-all duration-500 ${mobileMenuOpen ? 'z-[100] bg-primary' : 'z-50'
          } ${scrolled ? 'glassmorphism-no-border py-2' : 'bg-transparent py-4'
          }`}
        variants={headerVariants}
        initial="initial"
        animate="animate"
      >
        <div className="w-full px-4 md:px-10 flex items-center justify-between h-16 relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-4 group cursor-pointer"
          >
            <div className="flex items-center justify-center w-10 h-10 border-2 border-accent/90">
              <span className="font-mono text-base font-black tracking-tighter text-accent">YP</span>
            </div>
            <div className="hidden lg:block">
              <span className="font-mono text-[10px] tracking-[0.5em] text-accent/50 uppercase whitespace-nowrap">
                Developer Portfolio
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation & Toggle */}
          <div className="hidden md:flex items-center gap-10 ml-auto">
            <nav>
              <ul className="flex items-center space-x-10">
                {navItems.map((item, i) => {
                  const isActive = activeSection === item.toLowerCase();
                  return (
                    <motion.li
                      key={item}
                      custom={i}
                      variants={navItemVariants}
                      initial="hidden"
                      animate="visible"
                      className="relative"
                    >
                      <a
                        href={`#${item.toLowerCase()}`}
                        className={`text-[10px] font-mono tracking-[0.4em] transition-all duration-300 uppercase relative pb-1 ${isActive ? 'text-accent' : 'text-muted hover:text-accent'
                          }`}
                      >
                        {item}
                        {isActive && (
                          <motion.div
                            layoutId="underline"
                            className="absolute bottom-0 left-0 right-0 h-[1px] bg-accent opacity-80"
                            transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                          />
                        )}
                      </a>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-4">
            <div className="md:hidden">
              <ThemeToggle />
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="md:hidden text-accent p-2 focus:outline-none z-[70]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="w-6 flex flex-col items-end space-y-1.5">
                <motion.div
                  className="h-[1.5px] bg-accent"
                  animate={mobileMenuOpen ? { rotate: 45, y: 6, width: "100%" } : { rotate: 0, y: 0, width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="h-[1.5px] bg-accent"
                  animate={mobileMenuOpen ? { opacity: 0, width: "0%" } : { opacity: 1, width: "70%" }}
                  transition={{ duration: 0.2 }}
                />
                <motion.div
                  className="h-[1.5px] bg-accent"
                  animate={mobileMenuOpen ? { rotate: -45, y: -6, width: "100%" } : { rotate: 0, y: 0, width: "40%" }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay - Forced Solid Background */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100vw' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100vw' }}
            transition={{ type: 'spring', damping: 30, stiffness: 250 }}
            className="fixed inset-0 z-[999] flex flex-col p-8 md:hidden h-screen pointer-events-auto"
            style={{ backgroundColor: 'var(--color-primary)' }}
          >
            <div className="flex justify-between items-center mb-16 px-4">
              <span className="font-mono text-xs tracking-[0.4em] opacity-40 text-accent uppercase">Navigation</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-accent/60 hover:text-accent transition-colors"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            <ul className="flex flex-col space-y-6 px-4">
              {navItems.map((item, i) => {
                const isActive = activeSection === item.toLowerCase();
                return (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                  >
                    <a
                      href={`#${item.toLowerCase()}`}
                      className={`text-3xl font-mono tracking-[0.1em] transition-all duration-300 uppercase flex items-baseline ${isActive ? 'text-accent' : 'text-muted hover:text-accent'
                        }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="text-[10px] opacity-20 mr-4 font-mono">0{i + 1}</span>
                      {item}
                    </a>
                  </motion.li>
                );
              })}
            </ul>

            <div className="mt-auto px-4 pb-12">
              <div className="h-[1px] w-full bg-accent/5 mb-8"></div>
              <p className="font-mono text-[10px] tracking-[0.2em] text-muted opacity-40">
                © 2026 / YASHWANTH_PATAM <br />
                DEVELOPER_PORTFOLIO // V1.0
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
