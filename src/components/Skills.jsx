import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import ScrollReveal from './ScrollReveal';

const ScrambleText = ({ text, className, style }) => {
  const [displayText, setDisplayText] = useState(text);
  const intervalRef = useRef(null);

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  const scramble = () => {
    let iteration = 0;
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayText(text
        .split("")
        .map((letter, index) => {
          if (index < iteration || letter === " ") {
            return text[index];
          }
          const chars = ">!*&#@%$!^ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("")
      );

      if (iteration >= text.length) {
        clearInterval(intervalRef.current);
      }

      iteration += 1 / 3;
    }, 30);
  };

  return (
    <span
      className={`cursor-crosshair inline-block ${className || ''}`}
      style={style}
      onMouseEnter={scramble}
      onTouchStart={scramble}
    >
      {displayText}
    </span>
  );
};

const ProficiencyBadge = ({ level, label = "SYS.LEVEL" }) => {
  return (
    <div className="flex items-center gap-2 mt-2 opacity-90 bg-black/20 w-fit px-2 py-1 border border-border-strong/50">
      <span className="text-[9px] font-mono tracking-widest text-muted uppercase">{label}</span>
      <div className="flex gap-1 ml-1">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className={`w-1.5 h-3 ${i < level ? 'bg-red' : 'bg-muted/20'}`}
            animate={i < level ? { opacity: [0.3, 1, 0.3] } : {}}
            transition={{
              duration: 1.5 - (level * 0.15), // Higher proficiency = faster pulse (sys vibe)
              repeat: Infinity,
              delay: i * 0.1,
              ease: "linear"
            }}
          />
        ))}
      </div>
    </div>
  );
};

const bootUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (customDelay) => ({
    opacity: [0, 0.4, 0.1, 1],
    y: 0,
    transition: {
      delay: customDelay,
      duration: 0.6,
      times: [0, 0.4, 0.6, 1],
      ease: "easeOut"
    }
  })
};

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
            custom={0.1}
            initial="hidden"
            whileInView="visible"
            variants={bootUpVariants}
            viewport={{ once: true, amount: 0.2 }}
            className="md:col-span-2 md:row-span-2 border-4 bg-primary p-6 md:p-10 relative flex flex-col justify-between group"
            style={{
              borderColor: 'var(--color-accent)',
              boxShadow: '10px 10px 0px var(--color-accent)', // Heavy hard-edge shadow
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}
            onMouseOver={(e) => { e.currentTarget.style.transform = 'translate(4px, 4px)'; e.currentTarget.style.boxShadow = '6px 6px 0px var(--color-accent)'; }}
            onMouseOut={(e) => { e.currentTarget.style.transform = 'translate(0px, 0px)'; e.currentTarget.style.boxShadow = '10px 10px 0px var(--color-accent)'; }}
          >
            <h3 className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-muted opacity-80 absolute top-4 left-4 glitch-hover" data-text="L CORE_TECH">L CORE_TECH</h3>

            <div className="flex gap-6 mb-8 mt-10">
              {/* Java Logo */}
              <svg className="w-10 h-10 opacity-90 shadow-sm" style={{ color: 'var(--color-red)' }} viewBox="0 0 32 32" fill="currentColor">
                <path d="M 17.625 3 C 19.027344 6.308594 12.597656 8.335938 12 11.09375 C 11.453125 13.625 15.808594 16.59375 15.8125 16.59375 C 15.148438 15.546875 14.664063 14.664063 14 13.03125 C 12.875 10.273438 20.855469 7.785156 17.625 3 Z M 21.875 7.59375 C 21.875 7.59375 16.253906 7.949219 15.96875 11.625 C 15.839844 13.261719 17.453125 14.121094 17.5 15.3125 C 17.539063 16.285156 16.53125 17.09375 16.53125 17.09375 C 16.53125 17.09375 18.339844 16.765625 18.90625 15.28125 C 19.53125 13.632813 17.6875 12.507813 17.875 11.1875 C 18.054688 9.925781 21.875 7.59375 21.875 7.59375 Z M 23.25 16.0625 C 22.660156 16.035156 21.996094 16.253906 21.40625 16.6875 C 22.570313 16.429688 23.5625 17.160156 23.5625 18 C 23.5625 19.882813 20.875 21.65625 20.875 21.65625 C 20.875 21.65625 25.03125 21.191406 25.03125 18.09375 C 25.03125 16.816406 24.230469 16.109375 23.25 16.0625 Z M 12.21875 16.09375 C 10.769531 16.144531 7.875 16.382813 7.875 17.5 C 7.875 19.054688 14.617188 19.175781 19.4375 18.21875 C 19.4375 18.21875 20.75 17.304688 21.09375 16.96875 C 17.933594 17.625 10.71875 17.726563 10.71875 17.15625 C 10.71875 16.632813 13.03125 16.09375 13.03125 16.09375 C 13.03125 16.09375 12.703125 16.078125 12.21875 16.09375 Z M 11.78125 18.96875 C 10.988281 18.96875 9.8125 19.585938 9.8125 20.1875 C 9.8125 21.398438 15.78125 22.328125 20.1875 20.5625 L 18.65625 19.625 C 15.667969 20.601563 10.148438 20.277344 11.78125 18.96875 Z M 12.53125 21.6875 C 11.449219 21.6875 10.75 22.371094 10.75 22.875 C 10.75 24.425781 17.214844 24.578125 19.78125 23 L 18.15625 21.9375 C 16.242188 22.761719 11.425781 22.882813 12.53125 21.6875 Z M 8.90625 23.09375 C 7.140625 23.058594 6 23.859375 6 24.53125 C 6 28.105469 24.09375 27.933594 24.09375 24.28125 C 24.09375 23.675781 23.378906 23.386719 23.125 23.25 C 24.601563 26.742188 8.34375 26.46875 8.34375 24.40625 C 8.34375 23.9375 9.546875 23.46875 10.65625 23.6875 L 9.71875 23.15625 C 9.441406 23.113281 9.160156 23.097656 8.90625 23.09375 Z M 26 25.5 C 23.25 28.160156 16.289063 29.113281 9.28125 27.46875 C 16.289063 30.398438 25.964844 28.769531 26 25.5 Z" />
              </svg>
              {/* Spring Boot Logo */}
              <svg className="w-10 h-10 opacity-90 shadow-sm" viewBox="0 0 32 32" fill="none" style={{ color: 'var(--color-accent)' }}>
                <path fill="currentColor" d="M5.466 27.993c.586.473 1.446.385 1.918-.202.475-.585.386-1.445-.2-1.92-.585-.474-1.444-.383-1.92.202-.45.555-.392 1.356.115 1.844l-.266-.234C1.972 24.762 0 20.597 0 15.978 0 7.168 7.168 0 15.98 0c4.48 0 8.53 1.857 11.435 4.836.66-.898 1.232-1.902 1.7-3.015 2.036 6.118 3.233 11.26 2.795 15.31-.592 8.274-7.508 14.83-15.93 14.83-3.912 0-7.496-1.416-10.276-3.757l-.238-.21zm23.58-4.982c4.01-5.336 1.775-13.965-.085-19.48-1.657 3.453-5.738 6.094-9.262 6.93-3.303.788-6.226.142-9.283 1.318-6.97 2.68-6.86 10.992-3.02 12.86.002 0 .23.124.227.12 0-.002 5.644-1.122 8.764-2.274 4.56-1.684 9.566-5.835 11.213-10.657-.877 5.015-5.182 9.84-9.507 12.056-2.302 1.182-4.092 1.445-7.88 2.756-.464.158-.828.314-.828.314.96-.16 1.917-.212 1.917-.212 5.393-.255 13.807 1.516 17.745-3.73z"/>
              </svg>
            </div>

            <div className="flex flex-col items-start w-full">
              <div className="flex flex-col md:flex-row md:items-end gap-2 md:gap-4 w-full">
                <ScrambleText text="JAVA" className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none" style={{ color: 'var(--color-red)' }} />
                <div className="mb-1"><ProficiencyBadge level={5} label="JAVA" /></div>
              </div>
              <div className="flex flex-col md:flex-row md:items-end gap-2 md:gap-4 mt-4 w-full">
                <ScrambleText text="SPRING BOOT" className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none" style={{ color: 'var(--color-accent)' }} />
                <div className="mb-1"><ProficiencyBadge level={4} label="SPRING BOOT" /></div>
              </div>
            </div>
            <div className="mt-8 text-sm md:text-lg font-bold text-muted uppercase tracking-widest">
              High-Availability Backend Architecture
            </div>
          </motion.div>



          {/* Card 3: Medium Data Layer (Span 2x1) */}
          <motion.div
            custom={0.3}
            initial="hidden"
            whileInView="visible"
            variants={bootUpVariants}
            viewport={{ once: true, amount: 0.2 }}
            className="md:col-span-2 md:row-span-1 border-4 bg-primary p-6 relative flex justify-between items-center"
            style={{
              borderColor: 'var(--color-accent)',
              boxShadow: '8px 8px 0px var(--color-accent)',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}
            onMouseOver={(e) => { e.currentTarget.style.transform = 'translate(4px, 4px)'; e.currentTarget.style.boxShadow = '4px 4px 0px var(--color-accent)'; }}
            onMouseOut={(e) => { e.currentTarget.style.transform = 'translate(0px, 0px)'; e.currentTarget.style.boxShadow = '8px 8px 0px var(--color-accent)'; }}
          >
            <h3 className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-muted mb-2 absolute top-4 left-4 glitch-hover" data-text="L DATA_LAYER">L DATA_LAYER</h3>

            <div className="flex gap-6 mb-6 mt-10">
              {/* MongoDB Logo */}
              <svg className="w-10 h-10 opacity-90 shadow-sm" style={{ color: 'var(--color-accent)' }} viewBox="0 0 32 32" fill="currentColor">
                <path d="M15.821 23.185s0-10.361 0.344-10.36c0.266 0 0.612 13.365 0.612 13.365-0.476-0.056-0.956-2.199-0.956-3.005zM22.489 12.945c-0.919-4.016-2.932-7.469-5.708-10.134l-0.007-0.006c-0.338-0.516-0.647-1.108-0.895-1.732l-0.024-0.068c0.001 0.020 0.001 0.044 0.001 0.068 0 0.565-0.253 1.070-0.652 1.409l-0.003 0.002c-3.574 3.034-5.848 7.505-5.923 12.508l-0 0.013c-0.001 0.062-0.001 0.135-0.001 0.208 0 4.957 2.385 9.357 6.070 12.115l0.039 0.028 0.087 0.063q0.241 1.784 0.412 3.576h0.601c0.166-1.491 0.39-2.796 0.683-4.076l-0.046 0.239c0.396-0.275 0.742-0.56 1.065-0.869l-0.003 0.003c2.801-2.597 4.549-6.297 4.549-10.404 0-0.061-0-0.121-0.001-0.182l0 0.009c-0.003-0.981-0.092-1.94-0.261-2.871l0.015 0.099z" />
              </svg>
              {/* MySQL Logo */}
              <svg className="w-10 h-10 opacity-90 shadow-sm" style={{ color: 'var(--color-light)' }} viewBox="0 0 24 24" fill="currentColor">
                <path d="m24.129 23.412-.508-.484c-.251-.331-.518-.624-.809-.891l-.005-.004q-.448-.407-.931-.774-.387-.266-1.064-.641c-.371-.167-.661-.46-.818-.824l-.004-.01-.048-.024c.212-.021.406-.06.592-.115l-.023.006.57-.157c.236-.074.509-.122.792-.133h.006c.298-.012.579-.06.847-.139l-.025.006q.194-.048.399-.109t.351-.109v-.169q-.145-.217-.351-.496c-.131-.178-.278-.333-.443-.468l-.005-.004q-.629-.556-1.303-1.076c-.396-.309-.845-.624-1.311-.916l-.068-.04c-.246-.162-.528-.312-.825-.435l-.034-.012q-.448-.182-.883-.399c-.097-.048-.21-.09-.327-.119l-.011-.002c-.117-.024-.217-.084-.29-.169l-.001-.001c-.138-.182-.259-.389-.355-.609l-.008-.02q-.145-.339-.314-.651-.363-.702-.702-1.427t-.651-1.452q-.217-.484-.399-.967c-.134-.354-.285-.657-.461-.942l.013.023c-.432-.736-.863-1.364-1.331-1.961l.028.038c-.463-.584-.943-1.106-1.459-1.59l-.008-.007c-.509-.478-1.057-.934-1.632-1.356l-.049-.035q-.896-.651-1.96-1.282c-.285-.168-.616-.305-.965-.393l-.026-.006-1.113-.278-.629-.048q-.314-.024-.629-.024c-.148-.078-.275-.171-.387-.279-.11-.105-.229-.204-.353-.295l-.01-.007c-.605-.353-1.308-.676-2.043-.93l-.085-.026c-.193-.113-.425-.179-.672-.179-.176 0-.345.034-.499.095l.009-.003c-.38.151-.67.458-.795.84l-.003.01c-.073.172-.115.371-.115.581 0 .368.13.705.347.968l-.002-.003q.544.725.834 1.14.217.291.448.605c.141.188.266.403.367.63l.008.021c.056.119.105.261.141.407l.003.016q.048.206.121.448.217.556.411 1.14c.141.425.297.785.478 1.128l-.019-.04q.145.266.291.52t.314.496c.065.098.147.179.241.242l.003.002c.099.072.164.185.169.313v.001c-.114.168-.191.369-.217.586l-.001.006c-.035.253-.085.478-.153.695l.008-.03c-.223.666-.351 1.434-.351 2.231 0 .258.013.512.04.763l-.003-.031c.06.958.349 1.838.812 2.6l-.014-.025c.197.295.408.552.641.787.168.188.412.306.684.306.152 0 .296-.037.422-.103l-.005.002c.35-.126.599-.446.617-.827v-.002c.048-.474.12-.898.219-1.312l-.013.067c.024-.063.038-.135.038-.211 0-.015-.001-.03-.002-.045v.002q-.012-.109.133-.206v.048q.145.339.302.677t.326.677c.295.449.608.841.952 1.202l-.003-.003c.345.372.721.706 1.127 1.001l.022.015c.212.162.398.337.566.528l.004.004c.158.186.347.339.56.454l.01.005v-.024h.048c-.039-.087-.102-.157-.18-.205l-.002-.001c-.079-.044-.147-.088-.211-.136l.005.003q-.217-.217-.448-.484t-.423-.508q-.508-.702-.969-1.467t-.871-1.555q-.194-.387-.375-.798t-.351-.798c-.049-.099-.083-.213-.096-.334v-.005c-.006-.115-.072-.214-.168-.265l-.002-.001c-.121.206-.255.384-.408.545l.001-.001c-.159.167-.289.364-.382.58l-.005.013c-.141.342-.244.739-.289 1.154l-.002.019q-.072.641-.145 1.318l-.048.024-.024.024c-.26-.053-.474-.219-.59-.443l-.002-.005q-.182-.351-.326-.69c-.248-.637-.402-1.374-.423-2.144v-.009c-.009-.122-.013-.265-.013-.408 0-.666.105-1.308.299-1.91l-.012.044q.072-.266.314-.896t.097-.871c-.05-.165-.143-.304-.265-.41l-.001-.001c-.122-.106-.233-.217-.335-.335l-.003-.004q-.169-.244-.326-.52t-.278-.544c-.165-.382-.334-.861-.474-1.353l-.022-.089c-.159-.565-.336-1.043-.546-1.503l.026.064c-.111-.252-.24-.47-.39-.669l.006.008q-.244-.326-.436-.617-.244-.314-.484-.605c-.163-.197-.308-.419-.426-.657l-.009-.02c-.048-.097-.09-.21-.119-.327l-.002-.011c-.011-.035-.017-.076-.017-.117 0-.082.024-.159.066-.223l-.001.002c.011-.056.037-.105.073-.145.039-.035.089-.061.143-.072h.002c.085-.055.188-.088.3-.088.084 0 .165.019.236.053l-.003-.001c-.219.062.396.124.569.195l-.036-.013q.459.194.847.375c.298.142.552.292.792.459l-.018-.012q.194.121.387.266t.411.291h.339q.387 0 .822.037c.293.023.564.078.822.164l-.024-.007c.481.143.894.312 1.286.515l-.041-.019q.593.302 1.125.641c.589.367 1.098.743 1.577 1.154l-.017-.014c.5.428.954.867 1.38 1.331l.01.012c.416.454.813.947 1.176 1.464l.031.047c.334.472.671 1.018.974 1.584l.042.085c.081.154.163.343.234.536l.011.033q.097.278.217.57.266.605.57 1.221t.57 1.198l.532 1.161c.187.406.396.756.639 1.079l-.011-.015c.203.217.474.369.778.422l.008.001c.368.092.678.196.978.319l-.047-.017c.143.065.327.134.516.195l.04.011c.212.065.396.151.565.259l-.009-.005c.327.183.604.363.868.559l-.021-.015q.411.302.822.57.194.145.651.423t.484.52c-.114-.004-.249-.007-.384-.007-.492 0-.976.032-1.45.094l.056-.006c-.536.072-1.022.203-1.479.39l.04-.014c-.113.049-.248.094-.388.129l-.019.004c-.142.021-.252.135-.266.277v.001c.061.076.11.164.143.26l.002.006c.034.102.075.19.125.272l-.003-.006c.119.211.247.393.391.561l-.004-.005c.141.174.3.325.476.454l.007.005q.244.194.508.399c.161.126.343.25.532.362l.024.013c.284.174.614.34.958.479l.046.016c.374.15.695.324.993.531l-.016-.011q.291.169.58.375t.556.399c.073.072.137.152.191.239l.003.005c.091.104.217.175.36.193h.003v-.048c-.088-.067-.153-.16-.184-.267l-.001-.004c-.025-.102-.062-.191-.112-.273l.002.004zm-18.576-19.205q-.194 0-.363.012c-.115.008-.222.029-.323.063l.009-.003v.024h.048q.097.145.244.326t.266.351l.387.798.048-.024c.113-.082.2-.192.252-.321l.002-.005c.052-.139.082-.301.082-.469 0-.018 0-.036-.001-.054v.003c-.045-.044-.082-.096-.108-.154l-.001-.003-.081-.182c-.053-.084-.127-.15-.214-.192l-.003-.001c-.094-.045-.174-.102-.244-.169z"/></svg>
            </div>

            <div className="flex flex-col gap-4 items-end">
              <div className="flex flex-col items-end gap-1">
                <ScrambleText text="MONGODB" className="text-3xl md:text-4xl font-bold uppercase tracking-widest leading-none" style={{ color: 'var(--color-accent)' }} />
                <ProficiencyBadge level={4} label="NOSQL" />
              </div>
              <div className="flex flex-col items-end gap-1">
                <ScrambleText text="MYSQL" className="text-3xl md:text-4xl font-bold uppercase tracking-widest leading-none" style={{ color: 'var(--color-light)' }} />
                <ProficiencyBadge level={3} label="SQL" />
              </div>
            </div>
          </motion.div>

          <motion.div
            custom={0.4}
            initial="hidden"
            whileInView="visible"
            variants={bootUpVariants}
            viewport={{ once: true, amount: 0.2 }}
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
            <h3 className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-red opacity-80 absolute top-4 left-4 glitch-hover" data-text="L DEPLOYMENT">L DEPLOYMENT</h3>
            <div className="flex gap-4 mb-4 mt-6">
              {/* Render Icon */}
              <svg viewBox="0 0 800 800" className="w-10 h-10 opacity-90" style={{ color: 'var(--color-light)' }} fill="currentColor">
                <path d="M605.28 288.733c-.059-1.365-.178-2.7-.296-4.065-.03-.326-.03-.682-.09-1.009-.089-.83-.207-1.632-.326-2.462-.119-.861-.208-1.691-.327-2.522a30 30 0 0 0-.326-1.751c-.178-1.038-.356-2.106-.564-3.144-.178-.831-.386-1.632-.564-2.463-.178-.801-.356-1.572-.534-2.373-.208-.831-.475-1.632-.713-2.463a63 63 0 0 0-.653-2.284c-.267-.831-.564-1.662-.86-2.493l-.713-2.136c-.386-1.038-.801-2.047-1.187-3.056-.208-.504-.386-.979-.594-1.483a106 106 0 0 0-1.454-3.234c-.178-.386-.356-.801-.534-1.187-.475-1.009-1.01-1.988-1.514-2.967-.238-.445-.445-.89-.683-1.335-.593-1.098-1.246-2.195-1.87-3.263-.178-.297-.326-.594-.504-.89a78 78 0 0 0-2.137-3.323l-.446-.712a114 114 0 0 0-2.76-3.887 103 103 0 0 0-2.76-3.531c-.06-.089-.119-.178-.208-.267-18.344-22.222-46.037-36.344-77.054-36.374V194l-.089.059h.029c-8.607 0-16.978 1.098-24.962 3.145-4.779 1.217-9.439 2.819-13.921 4.688a118 118 0 0 0-4.423 1.988c-29.474 14.181-50.845 42.426-55.564 76.011h-.059c-2.078 14.39-6.501 28.008-12.793 40.528h.208c-21.906 43.435-66.903 73.252-118.906 73.252-23.211 0-44.998-5.933-63.994-16.347-2.226-1.217-4.927.386-4.927 2.907v13.44H206v199.583h199.7v-99.806h.207v-49.903c0-27.563 22.351-49.903 49.925-49.903h49.925c8.548 0 16.83-1.098 24.755-3.145a105 105 0 0 0 13.921-4.688 117 117 0 0 0 4.422-1.988c30.543-14.715 52.448-44.533 56.039-79.75.327-3.352.505-6.764.505-10.206 0-1.72-.03-3.441-.119-5.132" />
              </svg>
              {/* Vercel Icon */}
              <svg viewBox="0 0 256 222" className="w-10 h-10 opacity-90" style={{ color: 'var(--color-light)' }} fill="currentColor">
                <path d="m128 0 128 221.705H0z" />
              </svg>
            </div>
            <div className="flex flex-col items-center gap-1 w-full">
              <ScrambleText text="RENDER / VERCEL" className="font-bold text-lg uppercase tracking-widest text-light" />
              <div className="mt-2 text-center flex justify-center w-full"><ProficiencyBadge level={3} label="CLOUD_DEPLOYS" /></div>
            </div>
          </motion.div>

          {/* Card 5: Small Square Version Control */}
          <motion.div
            custom={0.5}
            initial="hidden"
            whileInView="visible"
            variants={bootUpVariants}
            viewport={{ once: true, amount: 0.2 }}
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
            <h3 className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-muted opacity-80 absolute top-4 left-4 glitch-hover" data-text="L VCS">L VCS</h3>
            <div className="flex gap-4 items-center mb-2 mt-6">
              {/* Official Git Logo */}
              <svg className="w-10 h-10 opacity-90" style={{ color: 'var(--color-red)' }} viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.738 2.736c.64-.23 1.383-.09 1.899.426.702.702.702 1.841 0 2.541-.702.703-1.84.703-2.54 0-.52-.52-.662-1.272-.435-1.921l-2.707-2.706c-.05.025-.102.046-.153.067v3.917c.231.22.378.533.378.878 0 .674-.547 1.221-1.221 1.221s-1.22-.547-1.22-1.22c0-.342.146-.653.374-.871V8.406c-.228-.219-.374-.53-.374-.873 0-.17.037-.333.103-.483L5.457 4.593 .454 9.596c-.605.604-.605 1.584 0 2.19l10.48 10.478c.604.604 1.581.604 2.188 0l10.424-10.423c.603-.604.603-1.584 0-2.19m0 0" />
              </svg>
              {/* GitHub Logo */}
              <svg className="w-10 h-10 opacity-90" viewBox="0 0 24 24" style={{ color: 'var(--color-accent)' }} fill="currentColor">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              {/* Docker Logo */}
              <svg className="w-10 h-10 opacity-90" viewBox="0 0 24 24" style={{ color: 'var(--color-light)' }} fill="currentColor">
                <path d="M13.983 11.078h2.119c.102 0 .186.084.186.186v2.119c0 .102-.084.186-.186.186h-2.119a.186.186 0 01-.186-.186v-2.119c0-.102.084-.186.186-.186zM11.221 11.078h2.119c.102 0 .186.084.186.186v2.119c0 .102-.084.186-.186.186h-2.119a.186.186 0 01-.186-.186v-2.119c0-.102.084-.186.186-.186zM11.221 8.35h2.119c.102 0 .186.084.186.186v2.119c0 .102-.084.186-.186.186h-2.119a.186.186 0 01-.186-.186v-2.119c0-.102.084-.186.186-.186zM11.221 5.617h2.119c.102 0 .186.084.186.186v2.119c0 .102-.084.186-.186.186h-2.119a.186.186 0 01-.186-.186V5.803a.186.186 0 01.186-.186zM8.473 11.078h2.119c.102 0 .186.084.186.186v2.119c0 .102-.084.186-.186.186H8.473a.186.186 0 0 1-.186-.186v-2.119c0-.102.084-.186.186-.186zM8.473 8.35h2.119c.102 0 .186.084.186.186v2.119c0 .102-.084.186-.186.186H8.473a.186.186 0 0 1-.186-.186v-2.119c0-.102.084-.186.186-.186zM5.725 11.078h2.119c.102 0 .186.084.186.186v2.119c0 .102-.084.186-.186.186H5.725a.186.186 0 0 1-.186-.186v-2.119c0-.102.084-.186.186-.186zM16.731 11.078h2.119c.102 0 .186.084.186.186v2.119c0 .102-.084.186-.186.186h-2.119a.186.186 0 0 1-.186-.186v-2.119c0-.102.084-.186.186-.186zM13.983 8.35h2.119c.102 0 .186.084.186.186v2.119c0 .102-.084.186-.186.186h-2.119a.186.186 0 0 1-.186-.186v-2.119c0-.102.084-.186.186-.186zM23.951 11.04c-.042-.311-.2-.843-.518-1.564-.316-.723-.591-1.025-1.011-1.189-.101-.038-.17-.038-.288.005l-.013.004c.002-.007.016-.071.013-.092-.016-.279-.118-.544-.229-.81a.571.571 0 0 0-.251-.24c-.037-.02-.275-.03-.275-.04l-.071.002c-.104.015-.224.08-.344.135-.12.052-.283.15-.36.257-.034.045-.05.101-.059.155a3.99 3.99 0 0 1-.013.048c.005.002.015.005.02.007.247.161.425.334.614.545.196.223.332.417.387.643.033.14.033.284.05.428.01.076.01.155-.01.233-.034.254-.15.485-.316.66-.167.17-.41.254-.644.251-.242 0-.47-.091-.655-.268-.16-.299-.24-.657-.234-1.017a4.673 4.673 0 0 1 .491-2.09c.189-.356.402-.693.636-1.012.356-.481.761-.918 1.189-1.326.31-.295.666-.549.972-.857.29-.294.577-.591.802-.911a4.91 4.91 0 0 0 .614-1.196c.205-.6.284-1.191.137-1.782a.083.083 0 0 0-.01-.03.04.04 0 0 0-.017-.015.228.228 0 0 0-.212.036c-.198.133-.356.326-.454.55-.107.245-.164.509-.234.767a5.523 5.523 0 0 1-.505 1.258c-.282.522-.614 1.014-.972 1.48a10.887 10.887 0 0 1-1.346 1.488 17.5 17.5 0 0 1-1.638 1.411 11.213 11.213 0 0 1-.417.3c-.042.028-.088.048-.135.068.013-.033.024-.067.042-.1.08-.166.195-.317.34-.447.135-.119.332-.234.505-.333.18-.084.34-.202.505-.306.166-.1.353-.257.488-.38l.004-.002a2.029 2.029 0 0 1-.161-.092c-.105-.074-.356-.251-.43-.284-.112-.055-.224-.131-.334-.203a2.31 2.31 0 0 1-.309-.251 2.373 2.373 0 0 1-.225-.219.091.091 0 0 0-.156.06c-.015.654-.08 1.309-.191 1.954-.108.644-.271 1.282-.497 1.905-.22.624-.51 1.228-.847 1.806a12.186 12.186 0 0 1-1.077 1.597l-.013.018a14.288 14.288 0 0 1-1.898 1.84 5.38 5.38 0 0 1-1.761.854 2.82 2.82 0 0 1-1.334.026 3.1 3.1 0 0 1-1.129-.444l-.011-.008a3.7 3.7 0 0 1-.497-.47l-.011-.013c-.22-.266-.425-.536-.571-.854-.15-.314-.249-.652-.279-1.001a1.986 1.986 0 0 1 .156-1.012c.15-.31.378-.58.653-.78a2.536 2.536 0 0 1 .983-.393 2.766 2.766 0 0 1 1.054.025c.345.068.667.22.955.437.28.21.491.503.623.834.04.099.176.082.176-.025V18.23l.002-.153c0-.1.084-.184.186-.184h11.758c.284 0 .546-.118.736-.312.19-.19.309-.452.309-.736V15.01c0-.102-.084-.186-.186-.186H4.258c-.102 0-.21.085-.246.18h-.002l-.004-.002c-.378 1.488-.519 3.013-.411 4.538.107 1.464.442 2.91 1.01 4.269.57 1.353 1.35 2.613 2.33 3.71l.011-.005C8.01 28.71 9.278 29.56 10.73 30.1c1.455.545 3.012.82 4.57 3.033v-2.031c.205-.013.41-.033.614-.076a14.86 14.86 0 0 0 3.74-.706c.643-1.31 1.258-2.673 1.834-4.072a74.15 74.15 0 0 0 2.253-5.914 2.8 2.8 0 0 0 .151-.838.487.487 0 0 1 .012-.086z" />
              </svg>
            </div>
            <div className="flex flex-col items-center gap-1 w-full">
              <ScrambleText text="GIT / GITHUB" className="font-bold text-lg uppercase tracking-widest" style={{ color: 'var(--color-red)' }} />
              <ScrambleText text="DOCKER" className="font-bold text-lg uppercase tracking-widest" style={{ color: 'var(--color-light)' }} />
              <div className="mt-1 text-center justify-center flex"><ProficiencyBadge level={4} label="DEVOPS" /></div>
            </div>
          </motion.div>

          {/* Card 6: Wide Security / API Layer */}
          <motion.div
            custom={0.6}
            initial="hidden"
            whileInView="visible"
            variants={bootUpVariants}
            viewport={{ once: true, amount: 0.2 }}
            className="md:col-span-4 md:row-span-1 border-4 bg-primary p-6 md:p-8 relative flex flex-col justify-center overflow-hidden"
            style={{
              borderColor: 'var(--color-accent)',
              boxShadow: '10px 10px 0px var(--color-accent)',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}
            onMouseOver={(e) => { e.currentTarget.style.transform = 'translate(4px, 4px)'; e.currentTarget.style.boxShadow = '6px 6px 0px var(--color-accent)'; }}
            onMouseOut={(e) => { e.currentTarget.style.transform = 'translate(0px, 0px)'; e.currentTarget.style.boxShadow = '10px 10px 0px var(--color-accent)'; }}
          >
            {/* Decorative warning stripes */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, var(--color-red) 10px, var(--color-red) 20px)' }} />

            <h3 className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-muted mb-4 absolute top-4 left-4 z-20 glitch-hover" data-text="L SECURITY_&_APIS">L SECURITY_&_APIS</h3>

            <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full relative z-10 mt-8 md:mt-0">

              {/* Shield Icon container */}
              <div className="flex gap-6 mb-6 md:mb-0 items-center mt-2 md:mt-0">
                <svg className="w-12 h-12 opacity-80" viewBox="0 0 20 20" fill="currentColor" style={{ color: 'var(--color-accent)' }}>
                  <path d="M16 13c-1.3 0-2.4.8-2.8 2H9c0-.7-.2-1.3-.5-1.8l7.1-7.3c.3 0 .6.1.9.1C17.9 6 19 4.9 19 3.5S17.9 1 16.5 1 14 2.1 14 3.5c0 .3.1.7.2 1l-7 7.2c-.6-.5-1.4-.7-2.2-.7V6.8C6.2 6.4 7 5.3 7 4c0-1.7-1.3-3-3-3S1 2.3 1 4c0 1.3.8 2.4 2 2.8v4.7c-1.2.7-2 2-2 3.4 0 2.2 1.8 4 4 4 1.5 0 2.8-.8 3.4-2h4.7c.4 1.1 1.5 2 2.8 2 1.6 0 3-1.3 3-3C19 14.3 17.6 13 16 13z"/>
                </svg>
              </div>

              <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start md:items-center text-left md:text-right border-l-0 md:border-l-4 pl-0 md:pl-8 border-transparent md:border-red">
                <div className="flex flex-col">
                  <ScrambleText text="REST APIS" className="text-3xl md:text-4xl font-black uppercase tracking-widest text-light leading-none" />
                  <ProficiencyBadge level={5} label="APIS" />
                </div>
                <div className="flex flex-col mt-4 md:mt-0">
                  <ScrambleText text="SPRING SECURITY" className="text-2xl md:text-3xl font-black uppercase tracking-widest text-red leading-none" />
                  <ProficiencyBadge level={4} label="SECURITY" />
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Skills;