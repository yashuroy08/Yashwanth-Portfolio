import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="skills" className="section-padding bg-transparent relative overflow-hidden py-24">

      {/* Subtle Dot-Grid Background Overlay */}
      <div
        className="absolute inset-0 z-[-1] opacity-30 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(var(--color-border-strong) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      {/* Section Heading */}
      <div className="container-custom relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <ScrollReveal delay={0}>
            <h4 className="text-sm text-muted mb-2 tracking-widest uppercase flex items-center gap-3">
              <span className="text-red font-bold">// 02</span>
              <span>&mdash; CAPABILITIES</span>
            </h4>
            <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter" style={{ fontFamily: 'monospace' }}>
              <span className="text-muted/30"></span>
              <span className="glitch-hover mx-2" data-text="SKILLS" style={{ color: 'var(--color-accent)' }}>SKILLS</span>
              <span className="text-muted/30"></span>
            </h2>
            <div className="w-16 h-[4px]" style={{ backgroundColor: 'var(--color-red)' }} />
          </ScrollReveal>
        </motion.div>

        {/* ── BENTO GRID LAYOUT ── */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)] text-accent font-mono relative mt-12">

          {/* Card 1: Large Core Area (Span 2x2) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 md:row-span-2 border-4 bg-primary p-6 md:p-10 relative flex flex-col justify-between group"
            style={{
              borderColor: 'var(--color-accent)',
              boxShadow: '10px 10px 0px var(--color-accent)', // Heavy hard-edge shadow
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}
            onMouseOver={(e) => { e.currentTarget.style.transform = 'translate(4px, 4px)'; e.currentTarget.style.boxShadow = '6px 6px 0px var(--color-accent)'; }}
            onMouseOut={(e) => { e.currentTarget.style.transform = 'translate(0px, 0px)'; e.currentTarget.style.boxShadow = '10px 10px 0px var(--color-accent)'; }}
          >
            {/* Minimalist Server Icon */}
            <svg className="absolute top-6 right-6 w-16 h-16 text-accent opacity-20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
              <path strokeLinecap="square" strokeLinejoin="miter" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V5zm0 6h14m-14 6h14" />
            </svg>
            <div>
              <h3 className="text-xs uppercase tracking-[0.3em] text-muted mb-6">L CORE_TECH</h3>
              <div className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none" style={{ fontFamily: 'monospace' }}>
                <span style={{ color: 'var(--color-accent)' }}>JAVA</span><br />
                <span className="text-red">SPRING BOOT</span>
              </div>
            </div>
            <div className="mt-8 text-sm md:text-lg font-bold text-muted uppercase tracking-widest">
              High-Availability Backend Architecture
            </div>
          </motion.div>

          {/* Card 2: Medium Frontend/Language Area (Span 2x1) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2 md:row-span-1 border-4 bg-primary p-6 md:p-8 relative flex flex-col justify-center"
            style={{
              borderColor: 'var(--color-red)',
              boxShadow: '8px 8px 0px var(--color-red)',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}
            onMouseOver={(e) => { e.currentTarget.style.transform = 'translate(4px, 4px)'; e.currentTarget.style.boxShadow = '4px 4px 0px var(--color-red)'; }}
            onMouseOut={(e) => { e.currentTarget.style.transform = 'translate(0px, 0px)'; e.currentTarget.style.boxShadow = '8px 8px 0px var(--color-red)'; }}
          >
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-xs md:text-sm uppercase tracking-[0.3em] text-red opacity-80">L CLIENT_&_MOBILE</h3>
              <svg className="w-8 h-8 text-red opacity-40 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="square" strokeLinejoin="miter" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="flex flex-wrap gap-4 text-3xl md:text-4xl font-black uppercase tracking-tight" style={{ color: 'var(--color-accent)' }}>
              <span>REACT.JS</span>
              <span className="text-red">/</span>
              <span>FLUTTER</span>
              <span className="text-red">/</span>
              <span>DART</span>
            </div>
          </motion.div>

          {/* Card 3: Medium Data Layer (Span 2x1) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2 md:row-span-1 border-4 bg-primary p-6 relative flex justify-between items-center"
            style={{
              borderColor: 'var(--color-accent)',
              boxShadow: '8px 8px 0px var(--color-accent)',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}
            onMouseOver={(e) => { e.currentTarget.style.transform = 'translate(4px, 4px)'; e.currentTarget.style.boxShadow = '4px 4px 0px var(--color-accent)'; }}
            onMouseOut={(e) => { e.currentTarget.style.transform = 'translate(0px, 0px)'; e.currentTarget.style.boxShadow = '8px 8px 0px var(--color-accent)'; }}
          >
            <div>
              <h3 className="text-xs uppercase tracking-[0.3em] text-muted mb-2">L DATA_LAYER</h3>
              <div className="text-2xl md:text-3xl font-bold uppercase tracking-widest mt-4" style={{ color: 'var(--color-accent)' }}>
                POSTGRESQL // MYSQL
              </div>
            </div>
            {/* Minimalist wireframe DB icon */}
            <svg className="w-12 h-12 text-accent opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="square" strokeLinejoin="miter" d="M4 7v10c0 2 3.5 3 8 3s8-1 8-3V7M4 7c0 2 3.5 3 8 3s8-1 8-3m-16 0c0-2 3.5-3 8-3s8 1 8 3m-16 5c0 2 3.5 3 8 3s8-1 8-3" />
            </svg>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-1 md:row-span-1 border-4 p-6 relative flex flex-col items-center justify-center text-center"
            style={{
              borderColor: 'var(--color-red)',
              boxShadow: '6px 6px 0px var(--color-red)',
              transition: 'transform 0.2s, box-shadow 0.2s',
              backgroundColor: 'var(--color-secondary)'
            }}
            onMouseOver={(e) => { e.currentTarget.style.transform = 'translate(3px, 3px)'; e.currentTarget.style.boxShadow = '3px 3px 0px var(--color-red)'; }}
            onMouseOut={(e) => { e.currentTarget.style.transform = 'translate(0px, 0px)'; e.currentTarget.style.boxShadow = '6px 6px 0px var(--color-red)'; }}
          >
            <h3 className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-red opacity-80 absolute top-4 left-4">L DEVOPS</h3>
            {/* Wireframe Box Icon */}
            <svg className="w-12 h-12 mb-4 mt-6" style={{ color: 'var(--color-accent)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="square" strokeLinejoin="miter" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
            <span className="font-bold text-xl uppercase tracking-widest" style={{ color: 'var(--color-accent)' }}>DOCKER</span>
          </motion.div>

          {/* Card 5: Small Square Version Control */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="md:col-span-1 md:row-span-1 border-4 p-6 relative flex flex-col items-center justify-center text-center"
            style={{
              borderColor: 'var(--color-accent)',
              boxShadow: '6px 6px 0px var(--color-accent)',
              transition: 'transform 0.2s, box-shadow 0.2s',
              backgroundColor: 'var(--color-secondary)'
            }}
            onMouseOver={(e) => { e.currentTarget.style.transform = 'translate(3px, 3px)'; e.currentTarget.style.boxShadow = '3px 3px 0px var(--color-accent)'; }}
            onMouseOut={(e) => { e.currentTarget.style.transform = 'translate(0px, 0px)'; e.currentTarget.style.boxShadow = '6px 6px 0px var(--color-accent)'; }}
          >
            <h3 className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-muted opacity-80 absolute top-4 left-4">L VCS</h3>
            {/* Wireframe Branch Icon */}
            <svg className="w-12 h-12 mb-4 mt-6" style={{ color: 'var(--color-accent)' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="square" strokeLinejoin="miter" d="M8 7v10m8-10v5a2 2 0 01-2 2h-4" />
              <circle cx="8" cy="5" r="2" strokeWidth="1.5" />
              <circle cx="8" cy="19" r="2" strokeWidth="1.5" />
              <circle cx="16" cy="5" r="2" strokeWidth="1.5" />
            </svg>
            <span className="font-bold text-xl uppercase tracking-widest" style={{ color: 'var(--color-accent)' }}>GIT_SVN</span>
          </motion.div>

          {/* Card 6: Wide Security / API Layer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="md:col-span-2 md:row-span-1 border-4 bg-primary p-6 md:p-8 relative flex justify-between items-center overflow-hidden"
            style={{
              borderColor: 'var(--color-accent)',
              boxShadow: '8px 8px 0px var(--color-accent)',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}
            onMouseOver={(e) => { e.currentTarget.style.transform = 'translate(4px, 4px)'; e.currentTarget.style.boxShadow = '4px 4px 0px var(--color-accent)'; }}
            onMouseOut={(e) => { e.currentTarget.style.transform = 'translate(0px, 0px)'; e.currentTarget.style.boxShadow = '8px 8px 0px var(--color-accent)'; }}
          >
            {/* Decorative warning stripes */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, var(--color-red) 10px, var(--color-red) 20px)' }} />

            <div className="relative z-10 flex flex-col justify-center">
              <h3 className="text-xs md:text-sm uppercase tracking-[0.3em] text-muted mb-4">L SECURITY_&_APIS</h3>
              <div className="text-2xl md:text-3xl font-bold uppercase tracking-widest flex flex-wrap gap-4 items-center" style={{ color: 'var(--color-accent)' }}>
                <span>REST APIS</span>
                <span className="text-red">/</span>
                <span>SPRING SEC</span>
              </div>
            </div>

            {/* Shield Icon */}
            <svg className="w-12 h-12 text-accent opacity-50 relative z-10 hidden md:block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="square" strokeLinejoin="miter" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Skills;