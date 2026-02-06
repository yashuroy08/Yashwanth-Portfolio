import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const AnimatedBackground = () => {
    const canvasRef = useRef(null);
    const { theme } = useTheme();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId;
        const dots = [];
        const numberOfDots = 100;

        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const createDots = () => {
            dots.length = 0;
            for (let i = 0; i < numberOfDots; i++) {
                dots.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    speed: 0.5 + Math.random() * 1.5,
                    size: 0.8 + Math.random() * 0.5,
                    opacity: 0.1 + Math.random() * 0.3,
                });
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Set dot color based on theme
            const color = getComputedStyle(document.documentElement).getPropertyValue('--color-accent').trim();
            ctx.fillStyle = color;

            dots.forEach((dot) => {
                ctx.globalAlpha = dot.opacity;
                ctx.beginPath();
                ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
                ctx.fill();

                dot.y += dot.speed;
                if (dot.y > canvas.height) {
                    dot.y = -5;
                    dot.x = Math.random() * canvas.width;
                }
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        setCanvasSize();
        createDots();
        animate();

        window.addEventListener('resize', () => {
            setCanvasSize();
            createDots();
        });

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', setCanvasSize);
        };
    }, [theme]); // Re-run when theme changes to update colors

    return (
        <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none bg-primary">
            {/* Subtle Grain overlay */}
            <div className="absolute inset-0 opacity-[0.03] grain-bg"></div>

            {/* Canvas for high-performance rainfall */}
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full opacity-60"
            />

            {/* Large subtle ambient glows */}
            <motion.div
                className="absolute left-[-10%] top-[-10%] w-[60vw] h-[60vw] rounded-full bg-light opacity-[0.03] blur-[120px]"
                animate={{
                    x: [0, 50, 0],
                    y: [0, 30, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
                className="absolute right-[-5%] bottom-[-5%] w-[40vw] h-[40vw] rounded-full bg-light opacity-[0.02] blur-[100px]"
                animate={{
                    x: [0, -40, 0],
                    y: [0, -60, 0],
                    scale: [1, 1.2, 1],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            />
        </div>
    );
};

export default AnimatedBackground;
