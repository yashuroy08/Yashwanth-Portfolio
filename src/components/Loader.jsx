import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ACCENT = '#ff3333';

const logs = [
  'MOUNTING KERNEL...',
  'LOADING ASSETS...',
  'INJECTING MODULES...',
  'COMPILING ROUTES...',
  'VERIFYING INTEGRITY...',
  'SYSTEM READY',
];

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState('loading'); // loading → done → exit
  const [logLine, setLogLine] = useState('INITIALIZING...');

  useEffect(() => {
    let p = 0;
    // Fast tick — fills 0→100 in ~1.2s
    const interval = setInterval(() => {
      p += Math.random() * 5 + 2.5;
      if (p >= 100) {
        p = 100;
        clearInterval(interval);
        setLogLine('SYSTEM READY');
        setProgress(100);
        setTimeout(() => setPhase('done'), 200);
        setTimeout(() => setPhase('exit'), 600);
        setTimeout(onComplete, 1000);
        return;
      }
      setProgress(Math.floor(p));
      setLogLine(logs[Math.min(Math.floor((p / 100) * logs.length), logs.length - 1)]);
    }, 22);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== 'exit' && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
          style={{ backgroundColor: '#050505', fontFamily: "'JetBrains Mono', 'Courier New', monospace" }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: 'blur(8px)', scale: 1.03 }}
          transition={{ duration: 0.45, ease: 'easeInOut' }}
        >
          {/* ── Scanline overlay ── */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.012) 2px, rgba(255,255,255,0.012) 4px)',
            }}
          />

          {/* ── Sweep line ── */}
          <motion.div
            initial={{ top: '0%' }}
            animate={{ top: '100%' }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'linear', repeatDelay: 0.3 }}
            className="absolute left-0 right-0 pointer-events-none"
            style={{
              height: 1,
              background: `linear-gradient(90deg, transparent, ${ACCENT}55, transparent)`,
              zIndex: 2,
            }}
          />

          {/* ── Corner brackets ── */}
          {[
            { top: 16, left: 16, r: 0 },
            { top: 16, right: 16, r: 90 },
            { bottom: 16, right: 16, r: 180 },
            { bottom: 16, left: 16, r: 270 },
          ].map((pos, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.06, duration: 0.3 }}
              style={{
                position: 'absolute',
                top: pos.top,
                left: pos.left,
                right: pos.right,
                bottom: pos.bottom,
                width: 20,
                height: 20,
                borderTop: `2px solid ${ACCENT}`,
                borderLeft: `2px solid ${ACCENT}`,
                transform: `rotate(${pos.r}deg)`,
              }}
            />
          ))}

          {/* ── Main content ── */}
          <div className="relative z-10 text-center flex flex-col items-center gap-6 sm:gap-7">
            {/* Header tag */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div
                className="text-[9px] sm:text-[10px] tracking-[0.5em] mb-2"
                style={{ color: '#2a2a2a' }}
              >
                // PORTFOLIO.INIT
              </div>

              {/* Name */}
              <div
                className="text-[clamp(34px,8vw,72px)] font-black leading-none"
                style={{ letterSpacing: '-0.03em', color: '#ffffff' }}
              >
                YASHWANTH
              </div>

              {/* Role */}
              <div
                className="text-[11px] sm:text-[13px] tracking-[0.4em] mt-1.5"
                style={{ color: ACCENT }}
              >
                JAVA DEVELOPER
              </div>
            </motion.div>

            {/* Progress section */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: 0.2 }}
              className="w-[clamp(200px,42vw,360px)] flex flex-col gap-2"
            >
              {/* Status line */}
              <div className="flex justify-between text-[9px] sm:text-[10px]" style={{ letterSpacing: '0.15em' }}>
                <span style={{ color: ACCENT }}>{logLine}</span>
                <span style={{ color: '#444' }}>{progress}%</span>
              </div>

              {/* Thin progress bar */}
              <div className="relative h-[2px] overflow-hidden" style={{ background: '#111' }}>
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '100%',
                    width: `${progress}%`,
                    background: ACCENT,
                    boxShadow: `0 0 8px ${ACCENT}`,
                    transition: 'width 0.06s linear',
                  }}
                />
                {/* Shimmer */}
                <motion.div
                  animate={{ x: ['-100%', '400%'] }}
                  transition={{ duration: 0.9, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute top-0 h-full"
                  style={{
                    width: '30%',
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                  }}
                />
              </div>

              {/* Block segments */}
              <div className="flex gap-[2px]">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      height: 3,
                      backgroundColor: i < Math.floor(progress / 5) ? ACCENT : '#1a1a1a',
                      transition: 'background-color 0.08s',
                    }}
                  />
                ))}
              </div>
            </motion.div>

            {/* Blinking cursor */}
            <motion.div
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.45, repeat: Infinity }}
              style={{ width: 2, height: 16, background: ACCENT }}
            />
          </div>

          {/* ── Bottom label ── */}
          <div
            className="absolute bottom-4 left-0 right-0 text-center text-[8px] sm:text-[9px] tracking-[0.25em]"
            style={{ color: '#1a1a1a' }}
          >
            SYS.VER 2.0 · YASHWANTH.PATAM · BUILD 2026
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
