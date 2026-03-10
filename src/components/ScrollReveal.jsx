import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * ScrollReveal — safe 3D-ish entrance using only opacity, y, and scale.
 * (rotateX removed — framer-motion's WAAPI AcceleratedAnimation crashes on
 * rotateX/rotateY during unmount when it tries to flush unresolved keyframes.)
 */
const ScrollReveal = ({
    children,
    delay = 0,
    className = '',
    once = true,
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, amount: 0.15 });

    return (
        <div ref={ref} className={className}>
            <motion.div
                initial={{ opacity: 0, y: 44, scale: 0.97 }}
                animate={
                    isInView
                        ? { opacity: 1, y: 0, scale: 1 }
                        : { opacity: 0, y: 44, scale: 0.97 }
                }
                transition={{
                    duration: 0.7,
                    delay,
                    ease: [0.22, 1, 0.36, 1],
                }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default ScrollReveal;
