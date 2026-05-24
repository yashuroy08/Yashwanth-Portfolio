import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * MagneticWrapper — Wraps any element and makes it gently "pull"
 * towards the cursor when the mouse hovers near it.
 * 
 * Props:
 *  - strength: how far the element moves towards cursor (default 0.35)
 *  - className: additional class names
 *  - children: the wrapped element
 */
const MagneticWrapper = ({ children, strength = 0.35, className = '' }) => {
    const ref = useRef(null);
    const [pos, setPos] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        if (!ref.current) return;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        const distX = (e.clientX - centerX) * strength;
        const distY = (e.clientY - centerY) * strength;
        setPos({ x: distX, y: distY });
    };

    const handleMouseLeave = () => {
        setPos({ x: 0, y: 0 });
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: pos.x, y: pos.y }}
            transition={{ type: 'spring', stiffness: 350, damping: 15, mass: 0.5 }}
            className={`inline-block ${className}`}
        >
            {children}
        </motion.div>
    );
};

export default MagneticWrapper;
