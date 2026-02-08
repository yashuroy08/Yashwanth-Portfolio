import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SoundEffects = () => {
    const audioContextRef = useRef(null);

    const [isMuted, setIsMuted] = useState(() => {
        const saved = localStorage.getItem('soundMuted');
        return saved === 'true';
    });

    useEffect(() => {
        localStorage.setItem('soundMuted', isMuted);
    }, [isMuted]);

    useEffect(() => {
        const initAudio = () => {
            if (!audioContextRef.current) {
                audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
            }
            if (audioContextRef.current.state === 'suspended') {
                audioContextRef.current.resume();
            }
        };

        const playClickSound = () => {
            if (isMuted) return;

            initAudio();

            if (!audioContextRef.current) return;

            const ctx = audioContextRef.current;
            const t = ctx.currentTime;

            // Modern UI "Select" Click (Crisp & Short)
            const osc = ctx.createOscillator();
            const gainNode = ctx.createGain();

            osc.type = 'triangle'; // Cleaner than square, sharper than sine

            // Pitch: Consistent high pitch, very slight drop
            osc.frequency.setValueAtTime(800, t);
            osc.frequency.exponentialRampToValueAtTime(600, t + 0.05);

            // Envelope: Very short, snappy release
            gainNode.gain.setValueAtTime(0, t);
            gainNode.gain.linearRampToValueAtTime(0.08, t + 0.005); // Attack
            gainNode.gain.exponentialRampToValueAtTime(0.001, t + 0.05); // Short decay

            osc.connect(gainNode);
            gainNode.connect(ctx.destination);

            osc.start(t);
            osc.stop(t + 0.06);
        };

        window.addEventListener('click', playClickSound);
        window.addEventListener('mousedown', initAudio);

        return () => {
            window.removeEventListener('click', playClickSound);
            window.removeEventListener('mousedown', initAudio);
        };
    }, [isMuted]);

    return (
        <motion.button
            onClick={() => setIsMuted(!isMuted)}
            className="fixed bottom-24 right-8 z-[100] w-12 h-12 bg-secondary/80 backdrop-blur-md rounded-full flex items-center justify-center border border-muted/30 shadow-lg hover:border-accent/50 text-light transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            aria-label={isMuted ? "Unmute sounds" : "Mute sounds"}
        >
            <AnimatePresence mode="wait">
                {isMuted ? (
                    <motion.svg
                        key="muted"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    >
                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                        <line x1="23" y1="9" x2="17" y2="15"></line>
                        <line x1="17" y1="9" x2="23" y2="15"></line>
                    </motion.svg>
                ) : (
                    <motion.svg
                        key="unmuted"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"
                    >
                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                    </motion.svg>
                )}
            </AnimatePresence>
        </motion.button>
    );
};

export default SoundEffects;
