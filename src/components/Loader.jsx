import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const STATUS_MESSAGES = [
  'INITIALIZING...',
  'FETCHING ASSETS...',
  'COMPILING...',
  'SYSTEM READY',
];

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [statusIndex, setStatusIndex] = useState(0);
  const [rotation, setRotation] = useState(0);

  // Cycle status messages
  useEffect(() => {
    const msgInterval = setInterval(() => {
      setStatusIndex((prev) => {
        if (prev < STATUS_MESSAGES.length - 1) return prev + 1;
        return prev;
      });
    }, 600);
    return () => clearInterval(msgInterval);
  }, []);

  // Snap Rotation every 500ms
  useEffect(() => {
    const rotInterval = setInterval(() => {
      setRotation(prev => prev + 45);
    }, 500);
    return () => clearInterval(rotInterval);
  }, []);

  // Progression
  useEffect(() => {
    let cur = 0;
    const interval = setInterval(() => {
      // jump by chunks to simulate "filling up"
      cur += Math.random() * 8 + 2;
      if (cur >= 100) {
        cur = 100;
        setProgress(100);
        clearInterval(interval);
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 800);
        }, 500);
      } else {
        setProgress(cur);
      }
    }, 150);
    return () => clearInterval(interval);
  }, [onComplete]);

  // A perfect octagon path for a 100x100 viewBox
  // Points: (30,0) (70,0) (100,30) (100,70) (70,100) (30,100) (0,70) (0,30)
  const octagonPath = "M 30,0 L 70,0 L 100,30 L 100,70 L 70,100 L 30,100 L 0,70 L 0,30 Z";

  // CSS clip-path representing the same octagon (percentages)
  const clipPathStr = "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)";

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden font-mono bg-[#0a0a0a] selection:bg-[#ff3333] selection:text-white"
          exit={{
            y: '-100%',
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          {/* Subtle Grid Pattern for texture */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(rgba(255,255,255,0.2) 1px, transparent 1px)',
              backgroundSize: '30px 30px'
            }}
          />

          {/* Main Loader Container */}
          <div className="relative flex flex-col items-center w-full px-6">

            {/* The Rigid Octagon Graphic */}
            <div className="relative w-32 h-32 md:w-48 md:h-48 mb-12">
              {/* 1. The Fill Mask Container */}
              {/* This sits exactly behind the border, uses clip-path to perfectly mask the rising red block */}
              <motion.div
                className="absolute inset-0 w-full h-full bg-[#111]"
                style={{ clipPath: clipPathStr }}
                animate={{ rotate: rotation }}
                transition={{ duration: 0, ease: "linear" }} // 0 duration = immediate snap
              >
                {/* The rising red fill */}
                <div
                  className="absolute bottom-0 left-0 w-full bg-[#ff3333] transition-all duration-150 ease-linear"
                  style={{ height: `${progress}%` }}
                ></div>
              </motion.div>

              {/* 2. The Thick White Border (SVG overlay) */}
              {/* Sits on top of the mask so the red never bleeds out of the outline */}
              <motion.svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 100 100"
                fill="none"
                animate={{ rotate: rotation }}
                transition={{ duration: 0, ease: "linear" }}
                style={{ overflow: 'visible' }} // Allow harsh shadows if needed
              >
                <path
                  d={octagonPath}
                  stroke="#ffffff"
                  strokeWidth="6"
                  strokeLinejoin="miter"
                />
                {/* Crosshairs inside graphic */}
                <line x1="50" y1="20" x2="50" y2="80" stroke="#ffffff" strokeWidth="2" />
                <line x1="20" y1="50" x2="80" y2="50" stroke="#ffffff" strokeWidth="2" />
              </motion.svg>
            </div>

            {/* Typography Section */}
            <div className="flex flex-col items-center justify-center relative w-full max-w-sm">

              {/* Status message */}
              <div className="absolute -top-6 text-[#ff3333] font-bold text-xs tracking-widest uppercase">
                {STATUS_MESSAGES[statusIndex]}
              </div>

              {/* Progress Number Base Container */}
              <div
                className="w-full bg-[#111] border-4 border-white p-4 text-center relative"
                style={{ boxShadow: '8px 8px 0px 0px #ff3333' }}
              >
                <div className="text-4xl md:text-6xl font-black text-white tabular-nums tracking-tighter">
                  {Math.floor(progress).toString().padStart(3, '0')}%
                </div>
              </div>

              {/* Decorative barcode/blocks */}
              <div className="w-full flex justify-between mt-6 px-1">
                <div className="flex gap-1.5 h-4">
                  {[...Array(8)].map((_, i) => (
                    <div key={i} className="w-2 h-full bg-white/30" style={{ opacity: Math.random() }}></div>
                  ))}
                </div>
                <div className="text-white/50 text-[10px] font-bold tracking-[0.2em]">SYS.MEM.OK</div>
              </div>
            </div>

          </div>

          {/* Corner Decals */}
          <div className="absolute top-6 left-6 flex items-center gap-4">
            <div className="w-4 h-4 bg-[#ff3333]" style={{ border: '2px solid white' }} />
            <div className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-white">V_3.0</div>
          </div>

          <div className="absolute bottom-6 right-6 text-[10px] md:text-xs font-bold tracking-[0.2em] text-white text-right">
            <span className="text-[#ff3333] mr-2">■</span>
            ESTABLISHING
          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
