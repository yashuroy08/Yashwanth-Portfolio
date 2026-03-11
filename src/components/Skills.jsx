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
            <h3 className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-muted opacity-80 absolute top-4 left-4">L CORE_TECH</h3>
            
            <div className="flex gap-6 mb-8 mt-10">
                {/* Java */}
                <svg className="w-10 h-10 text-accent opacity-80" viewBox="0 0 24 24" fill="currentColor"><path d="M12.247 4.295c.24-1.293-.42-2.316-1.574-3.565-1.933 2.012-1.928 2.37.07 4.145-.192.423-.466.726-.81 1.055-1.116-1.127-1.134-1.109.11-2.906-2.528 2.072-2.482 2.66.494 5.25.048.066.082.138.106.216-1.4.385-2.09-.07-3.085-.811-.476 1.406.84 2.872 2.923 2.94 1.1-.96 1.637-2.135 1.105-3.35.53-.51 1.13-.918 1.944-1.196.88 1.487 2.016 3.013 4.246 2.4-2.83-.816-1.93-3.136-1.954-3.14-.15-.992.548-1.58.625-1.638 1.574 1.705 3.018 3.092 2.007 5.753 2.222-1.564 3.04-3.167 1.547-6.22-1.18 1.493-1.64 2.614-.863 3.963-1.07-2.096-1.96-2.825-4.89-2.898zM5.526 13.911c-1.107 1.25-.494 2.062 1.341 2.383.041.01.29.073.497.103-1.396-.543-2.31-.956-1.838-2.486zm2.251 3.522c-1.354 1.034-1.035 1.835 1.144 2.2.046.006.183.023.301.033-1.428-.507-2.365-1-1.445-2.233zm3.125 3.122c-1.286.725-1.066 1.427.697 1.905.044.015.087.03.111.038-1.155-.429-1.98-.82-.808-1.943zm8.286-6.492c.677 2.527-2.738 4.757-8.086 5.372-5.348.614-10.274-.356-10.952-2.882-.603-2.247 2.023-4.27 6.398-5.115-.473.486-.33.916.321 1.076-4.502.9-6.326 2.37-5.91 3.918.666 2.486 6.55 3.036 11.835 1.428 3.543-1.078 5.708-2.454 5.302-3.965-.137-.507-.648-1.054-1.55-1.616l.164.045c.895.394 1.284 1.05 1.478 1.739z"/></svg>
                {/* Spring Boot */}
                <svg className="w-10 h-10 text-red opacity-80" viewBox="0 0 64 64" fill="currentColor"><path d="M58.2 3.365a29.503 29.503 0 0 1-3.419 6.064A32.094 32.094 0 1 0 9.965 55.372l1.186 1.047a32.08 32.08 0 0 0 52.67-22.253c.875-8.17-1.524-18.51-5.62-30.8zM14.53 55.558a2.744 2.744 0 1 1-.404-3.857 2.744 2.744 0 0 1 .404 3.857zm43.538-9.61c-7.92 10.55-24.83 6.99-35.672 7.502 0 0-1.922.113-3.857.43 0 0 .73-.31 1.663-.663 7.614-2.65 11.213-3.16 15.838-5.54 8.708-4.427 17.322-14.122 19.112-24.2-3.313 9.695-13.373 18.032-22.53 21.418-6.276 2.313-17.614 4.566-17.614 4.566l-.457-.245c-7.714-3.75-7.952-20.457 6.077-25.845 6.143-2.366 12.02-1.067 18.654-2.65 7.084-1.683 15.28-6.99 18.615-13.916 3.73 11.08 8.224 28.422.166 39.15z"/></svg>
            </div>
            
            <div className="flex flex-col">
              <span className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none" style={{ color: 'var(--color-accent)' }}>JAVA</span>
              <span className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none text-red mt-2">SPRING BOOT</span>
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
            <h3 className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-red opacity-80 absolute top-4 left-4">L CLIENT_&_MOBILE</h3>
            
            <div className="flex gap-6 mb-6 mt-10">
                 {/* React */}
                 <svg className="w-10 h-10 text-accent opacity-80" viewBox="0 0 256 296" fill="currentColor"><path fill="currentColor" d="m128 0 128 73.9v147.8l-128 73.9L0 221.7V73.9z"/><path d="M34.865 220.478c17.016 21.78 71.095 5.185 122.15-34.704 51.055-39.888 80.24-88.345 63.224-110.126-17.017-21.78-71.095-5.184-122.15 34.704-51.055 39.89-80.24 88.346-63.224 110.126Zm7.27-5.68c-5.644-7.222-3.178-21.402 7.573-39.253 11.322-18.797 30.541-39.548 54.06-57.923 23.52-18.375 48.303-32.004 69.281-38.442 19.922-6.113 34.277-5.075 39.92 2.148 5.644 7.223 3.178 21.403-7.573 39.254-11.322 18.797-30.541 39.547-54.06 57.923-23.52 18.375-48.304 32.004-69.281 38.441-19.922 6.114-34.277 5.076-39.92-2.147Z" fill="#1e1e1e"/><path d="M220.239 220.478c17.017-21.78-12.169-70.237-63.224-110.126C105.96 70.464 51.88 53.868 34.865 75.648c-17.017 21.78 12.169 70.238 63.224 110.126 51.055 39.889 105.133 56.485 122.15 34.704Zm-7.27-5.68c-5.643 7.224-19.998 8.262-39.92 2.148-20.978-6.437-45.761-20.066-69.28-38.441-23.52-18.376-42.74-39.126-54.06-57.923-10.752-17.851-13.218-32.03-7.575-39.254 5.644-7.223 19.999-8.261 39.92-2.148 20.978 6.438 45.762 20.067 69.281 38.442 23.52 18.375 42.739 39.126 54.06 57.923 10.752 17.85 13.218 32.03 7.574 39.254Z" fill="#1e1e1e"/><path d="M127.552 167.667c10.827 0 19.603-8.777 19.603-19.604 0-10.826-8.776-19.603-19.603-19.603-10.827 0-19.604 8.777-19.604 19.603 0 10.827 8.777 19.604 19.604 19.604Z" fill="#1e1e1e"/></svg>
                 {/* Flutter */}
                 <svg className="w-10 h-10 text-red opacity-80" viewBox="0 0 256 317" fill="none"><path fill="currentColor" d="M158 0 0 158l49 48L255 0zM157 145l-85 85 49 50 49-49 85-86z"/><path fill="white" fillOpacity="0.4" d="m121 280 37 37h97l-85-86z"/><path fill="white" fillOpacity="0.2" d="m72 230 48-48 50 49-49 49z"/></svg>
                 {/* Dart */}
                 <svg className="w-10 h-10 text-accent opacity-80" viewBox="0 0 256 256" fill="currentColor"><path d="M52.209 203.791 8.413 159.995C3.218 154.67 0 147.141 0 139.782c0-3.407 1.92-8.733 3.369-11.782l40.427-84.204 8.413 159.995Z"/><path d="M202.116 52.209 158.32 8.413C154.5 4.573 146.538 0 139.8 0c-5.796 0-11.48 1.167-15.15 3.369L43.815 43.796l158.301 8.413ZM104.418 256h106.111v-45.471l-79.16-25.276-72.422 25.276z"/><path fill="white" fillOpacity="0.5" d="M43.796 180.209c0 13.513 1.694 16.826 8.413 23.582l6.738 6.738h151.582l-74.097-84.204-92.636-82.53V180.21Z"/><path fill="white" fillOpacity="0.3" d="M178.534 43.777H43.796L210.529 210.51H256V106.093L202.097 52.19c-7.566-7.585-14.285-8.413-23.563-8.413Z"/></svg>
            </div>
            
            <div className="flex flex-col gap-2">
              <span className="text-3xl md:text-5xl font-black uppercase tracking-tight" style={{ color: 'var(--color-accent)' }}>REACT.JS</span>
              <span className="text-3xl md:text-5xl font-black uppercase tracking-tight text-red">FLUTTER</span>
              <span className="text-xl md:text-2xl font-bold uppercase tracking-tight text-muted">DART</span>
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
            <h3 className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-muted mb-2 absolute top-4 left-4">L DATA_LAYER</h3>
            
            <div className="flex gap-6 mb-6 mt-10">
               {/* MongoDB (Simple Leaf) */}
               <svg className="w-10 h-10 text-accent opacity-80" viewBox="0 0 24 24" fill="currentColor"><path d="M15.166 21.018c-3.175.782-3.197.809-3.265 1.572-.036.425-.091.956-.12 1.18l-.053.407-.058-.415c-.033-.217-.087-.738-.119-1.157-.075-.989-.044-.972-3.775-1.993-2.909-.794-3.037-.84-3.744-1.378-1.571-1.196-2.583-3.179-2.883-5.632-.266-2.18.232-4.502 1.488-6.914 1.341-2.578 3.39-4.57 6.16-5.989l.915-.469.915.469c2.77 1.42 4.819 3.411 6.16 5.989 1.256 2.412 1.754 4.734 1.488 6.914-.3 2.453-1.312 4.436-2.883 5.632-.707.538-.835.584-3.744 1.378z" fill="none" stroke="currentColor" strokeWidth="1.5"/></svg>
               {/* MySQL */}
               <svg className="w-10 h-10 text-accent opacity-80" viewBox="0 0 256 252" fill="currentColor"><path d="M236 194c-14 0-25 1-34 5-3 1-7 1-7 4l3 6c2 3 5 8 9 11l11 8 21 10 11 9 6 4-3-6-5-5c-5-7-11-13-18-18-6-3-18-9-20-15h-1l12-3 18-3 8-2v-2l-9-10c-8-8-18-15-28-22l-18-8c-2-1-6-2-7-4l-7-13-15-30-8-20c-18-30-38-48-68-65-6-4-14-5-22-7l-13-1-8-6C34 5 8-9 1 9c-5 11 7 22 11 28l9 13 3 9c3 8 5 17 9 24l6 10c2 2 4 3 5 6-3 4-3 9-4 13-7 20-4 44 5 59 2 4 9 14 18 10 8-3 6-13 8-22l1-4 8 14c5 9 14 18 22 24 4 3 8 8 13 10l-4-4-9-10c-8-10-14-21-20-32l-7-17-3-6c-3 4-7 7-9 12-3 7-3 17-4 26h-1c-6-1-8-7-10-12-5-12-6-32-1-46 1-4 6-15 4-19-1-3-4-5-6-7l-7-12-10-30-9-13c-3-5-7-8-10-14-1-2-2-5 0-7l2-2c2-2 9 0 11 1 6 3 12 5 17 9l8 6h4c6 1 12 0 17 2 9 3 18 7 25 12 23 14 42 35 54 59 3 4 3 8 5 12l12 26c4 8 7 16 12 23 3 4 14 6 18 8l12 4 18 12c2 2 11 7 12 10Z"/><path d="m58 43-7 1 6 7 4 9v-1c3-1 4-4 4-8l-2-4-5-4Z"/></svg>
            </div>
            
            <div className="flex flex-col gap-2">
              <span className="text-3xl md:text-4xl font-bold uppercase tracking-widest" style={{ color: 'var(--color-accent)' }}>MONGODB</span>
              <span className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-muted">MYSQL</span>
            </div>
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
            <h3 className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-red opacity-80 absolute top-4 left-4">L DEPLOYMENT</h3>
            <div className="flex gap-4 mb-4 mt-6">
              <svg viewBox="0 0 256 222" className="w-8 h-8 object-contain" fill="currentColor"><path d="m128 0 128 221.705H0z"/></svg>
              <img src="/render.svg" alt="Render" className="w-8 h-8 object-contain" />
            </div>
            <div className="flex flex-col items-center">
              <span className="font-bold text-sm uppercase tracking-widest text-light">VERCEL</span>
              <span className="font-bold text-sm uppercase tracking-widest text-red">RENDER</span>
            </div>
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
            {/* Official Git Logo */}
            <svg className="w-10 h-10 mb-2 mt-6 opacity-80" style={{ color: 'var(--color-accent)' }} viewBox="0 0 24 24" fill="currentColor"><path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.738 2.736c.64-.23 1.383-.09 1.899.426.702.702.702 1.841 0 2.541-.702.703-1.84.703-2.54 0-.52-.52-.662-1.272-.435-1.921l-2.707-2.706c-.05.025-.102.046-.153.067v3.917c.231.22.378.533.378.878 0 .674-.547 1.221-1.221 1.221s-1.22-.547-1.22-1.22c0-.342.146-.653.374-.871V8.406c-.228-.219-.374-.53-.374-.873 0-.17.037-.333.103-.483L5.457 4.593 .454 9.596c-.605.604-.605 1.584 0 2.19l10.48 10.478c.604.604 1.581.604 2.188 0l10.424-10.423c.603-.604.603-1.584 0-2.19m0 0"/></svg>
            <div className="flex flex-col items-center">
              <span className="font-bold text-lg uppercase tracking-widest text-light">GIT</span>
              <span className="font-bold text-lg uppercase tracking-widest text-red">SVN</span>
            </div>
          </motion.div>

          {/* Card 6: Wide Security / API Layer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="md:col-span-2 md:row-span-1 border-4 bg-primary p-6 md:p-8 relative flex flex-col justify-center overflow-hidden"
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

            <h3 className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-muted mb-4 absolute top-4 left-4 z-20">L SECURITY_&_APIS</h3>

            {/* Shield Icon container */}
            <div className="flex gap-6 mb-6 mt-10 relative z-10">
              <svg className="w-10 h-10 text-accent opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="square" strokeLinejoin="miter" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>

            <div className="relative z-10 flex flex-col gap-2">
              <span className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-light">REST APIS</span>
              <span className="text-2xl md:text-3xl font-bold uppercase tracking-widest text-red">SPRING SEC</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Skills;