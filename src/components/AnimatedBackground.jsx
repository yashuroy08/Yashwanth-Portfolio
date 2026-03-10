import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
    return (
        <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none bg-primary">
            {/* Subtle Grain overlay */}
            <div className="absolute inset-0 opacity-[0.04] grain-bg mix-blend-overlay"></div>

            {/* Architectural Grid Background */}
            <div
                className="absolute inset-0 opacity-[0.07]"
                style={{
                    backgroundImage: `
                        linear-gradient(to right, var(--color-accent) 1px, transparent 1px),
                        linear-gradient(to bottom, var(--color-accent) 1px, transparent 1px)
                    `,
                    backgroundSize: '80px 80px',
                    maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
                    WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
                }}
            />
            {/* Very faint crosshairs at intersections */}
            <div
                className="absolute inset-0 opacity-[0.15]"
                style={{
                    backgroundImage: `
                        radial-gradient(circle at center, var(--color-accent) 1px, transparent 1px)
                    `,
                    backgroundSize: '80px 80px',
                    maskImage: 'radial-gradient(ellipse at center, black 50%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(ellipse at center, black 50%, transparent 100%)'
                }}
            />
        </div>
    );
};

export default AnimatedBackground;
