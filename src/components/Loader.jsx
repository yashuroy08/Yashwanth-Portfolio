import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue } from 'framer-motion';

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState("Analyz..");
  const finalName = "YASHWANTH";
  const [displayName, setDisplayName] = useState("");

  // Character scrambling effect
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";

  useEffect(() => {
    // Progress counter
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          if (onComplete) onComplete();
          return 100;
        }
        // Randomly jump amounts to look like real loading
        const jump = Math.floor(Math.random() * 3) + 1; // Smaller increments for smoother/slower feel
        return Math.min(prev + jump, 100);
      });
    }, 120); // Much slower interval (was 40)

    return () => clearInterval(timer);
  }, []);

  const decryptionStarted = useRef(false);

  useEffect(() => {
    // Status text updates based on progress
    if (progress < 30) setText("Initializing...");
    else if (progress < 60) setText("Loading Assets...");
    else if (progress < 90) setText("Compiling Data...");
    else setText("System Ready");
  }, [progress]);

  useEffect(() => {
    // Name decryption effect logic - trigger once
    if (progress > 50 && !decryptionStarted.current) {
      decryptionStarted.current = true;
      let iteration = 0;
      const interval = setInterval(() => {
        setDisplayName(
          finalName
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return finalName[index];
              }
              return characters[Math.floor(Math.random() * characters.length)];
            })
            .join("")
        );

        if (iteration >= finalName.length) {
          clearInterval(interval);
        }

        iteration += 1 / 4;
      }, 50);

      // We do NOT return a cleanup function here because we want this interval 
      // to persist until it clears itself, regardless of further progress updates.
    }
  }, [progress]);

  // Cleanup on unmount only
  useEffect(() => {
    return () => {
      // ensure all intervals clear if component unmounts - simplistic approach
    }
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40; // Increased movement range to 40px
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-primary z-50 overflow-hidden">
      <div className="w-80 relative z-10">
        <div className="flex justify-between items-end mb-2">
          <motion.div
            className="text-muted text-xs font-mono tracking-widest uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {text}
          </motion.div>
          <motion.div
            className="text-2xl font-bold font-mono text-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {progress}%
          </motion.div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-[2px] bg-secondary/30 relative overflow-hidden mb-6">
          <motion.div
            className="absolute top-0 left-0 h-full bg-light"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear" }}
          />
        </div>

        {/* Decrypting Name */}
        <div className="h-8 flex justify-center">
          {progress > 20 && (
            <motion.h1
              className="font-mono text-xl tracking-[0.5em] text-accent font-bold text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {displayName || (progress > 50 ? "" : "Wait...")}
            </motion.h1>
          )}
        </div>
      </div>

      {/* Background visual noise/dots with Parallax */}
      <motion.div
        className="absolute inset-[-100px] pointer-events-none opacity-20"
        style={{
          x: mouseX,
          y: mouseY,
          backgroundImage: 'radial-gradient(circle, #333 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}
      />
    </div>
  );
};

export default Loader;