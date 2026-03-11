import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedBackground = () => {
    const bgRef = useRef(null);
    const [ripples, setRipples] = useState([]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            if (!bgRef.current) return;
            const x = e.clientX;
            const y = e.clientY;
            bgRef.current.style.setProperty('--mouse-x', `${x}px`);
            bgRef.current.style.setProperty('--mouse-y', `${y}px`);
        };

        const handleClick = (e) => {
            const newRipple = { id: Date.now(), x: e.clientX, y: e.clientY };
            setRipples((prev) => [...prev, newRipple]);

            // Cleanup ripple after animation
            setTimeout(() => {
                setRipples((prev) => prev.filter(r => r.id !== newRipple.id));
            }, 600);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('click', handleClick);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <div ref={bgRef} className="fixed inset-0 -z-20 overflow-hidden pointer-events-none bg-primary">
            {/* Subtle Grain overlay */}
            <div className="absolute inset-0 opacity-[0.04] grain-bg mix-blend-overlay"></div>

            {/* Static Very Faint Background Grid — uses CSS variable via border color */}
            <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, var(--color-accent) 1px, transparent 1px),
                        linear-gradient(to bottom, var(--color-accent) 1px, transparent 1px)
                    `,
                    backgroundSize: '80px 80px',
                }}
            />

            {/* Interactive Glowing Grid layer that follows the mouse */}
            <div
                className="absolute inset-0 opacity-[0.35]"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, var(--color-accent) 1px, transparent 1px),
                        linear-gradient(to bottom, var(--color-accent) 1px, transparent 1px)
                    `,
                    backgroundSize: '80px 80px',
                    // The mask creates a 250px visible circle around the cursor
                    maskImage: 'radial-gradient(250px circle at var(--mouse-x, 50vw) var(--mouse-y, 50vh), black 0%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(250px circle at var(--mouse-x, 50vw) var(--mouse-y, 50vh), black 0%, transparent 100%)'
                }}
            />

            {/* Faint crosshairs at intersections within the glow */}
            <div
                className="absolute inset-0 opacity-[0.8]"
                style={{
                    backgroundImage: `
                        radial-gradient(circle at center, #ff3333 2px, transparent 2px)
                    `,
                    backgroundSize: '80px 80px',
                    // A tighter red glow right at the cursor center
                    maskImage: 'radial-gradient(100px circle at var(--mouse-x, 50vw) var(--mouse-y, 50vh), black 0%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(100px circle at var(--mouse-x, 50vw) var(--mouse-y, 50vh), black 0%, transparent 100%)'
                }}
            />

            {/* Click Ripples */}
            <AnimatePresence>
                {ripples.map((ripple) => (
                    <motion.div
                        key={ripple.id}
                        initial={{ opacity: 0.5, scale: 0 }}
                        animate={{ opacity: 0, scale: 2 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="absolute rounded-full border border-accent/20"
                        style={{
                            left: ripple.x - 250,
                            top: ripple.y - 250,
                            width: 500,
                            height: 500,
                            backgroundImage: `
                                radial-gradient(circle at center, transparent 40%, var(--color-border-subtle) 45%, transparent 50%)
                            `,
                        }}
                    />
                ))}
            </AnimatePresence>
        </div>
    );
};

export default AnimatedBackground;
