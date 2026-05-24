import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * SectionDivider — An animated circuit-board-style divider
 * between sections. Glows and pulses when it scrolls into view.
 */
const SectionDivider = ({ className = '' }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    return (
        <div ref={ref} className={`relative w-full py-8 flex items-center justify-center overflow-hidden ${className}`}>
            {/* Main horizontal line */}
            <motion.div
                className="relative w-full max-w-4xl flex items-center"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8 }}
            >
                {/* Left line */}
                <motion.div
                    className="flex-1 h-[1px] origin-left"
                    style={{ backgroundColor: 'var(--color-border-strong)' }}
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                />

                {/* Center node */}
                <div className="relative mx-4 flex items-center justify-center">
                    {/* Outer pulse ring */}
                    <motion.div
                        className="absolute w-8 h-8 border border-red/30"
                        animate={isInView ? {
                            scale: [1, 1.8, 1],
                            opacity: [0.4, 0, 0.4],
                        } : {}}
                        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                        style={{ borderRadius: '0px' }}
                    />
                    {/* Inner diamond */}
                    <motion.div
                        className="w-3 h-3 border-2"
                        style={{
                            borderColor: 'var(--color-red)',
                            transform: 'rotate(45deg)',
                        }}
                        animate={isInView ? {
                            boxShadow: ['0 0 0px var(--color-red)', '0 0 12px var(--color-red)', '0 0 0px var(--color-red)'],
                        } : {}}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    />
                </div>

                {/* Right line */}
                <motion.div
                    className="flex-1 h-[1px] origin-right"
                    style={{ backgroundColor: 'var(--color-border-strong)' }}
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                />
            </motion.div>

            {/* Traveling light pulse */}
            <motion.div
                className="absolute h-[1px] w-16"
                style={{
                    background: 'linear-gradient(90deg, transparent, var(--color-red), transparent)',
                    top: '50%',
                }}
                animate={isInView ? {
                    x: ['-50vw', '50vw'],
                    opacity: [0, 1, 0],
                } : {}}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                    repeatDelay: 2,
                }}
            />
        </div>
    );
};

export default SectionDivider;
