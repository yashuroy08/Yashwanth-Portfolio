import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

/**
 * CursorBubble — A smooth, elastic bubble that follows the mouse cursor.
 * It grows when hovering over interactive elements and shows a subtle trail.
 */
const CursorBubble = () => {
    const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);
    const [isVisible, setIsVisible] = useState(false);


    useEffect(() => {
        // Don't show on touch devices
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        if (isTouchDevice) return;

        setIsVisible(true);

        const isInteractive = (el) => {
            if (!el) return false;
            // Walk up the DOM tree to check if any ancestor is interactive
            let node = el;
            while (node && node !== document.body) {
                const tag = node.tagName;
                if (tag === 'A' || tag === 'BUTTON' || tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return true;
                if (node.getAttribute('role') === 'button') return true;
                if (node.classList && (
                    node.classList.contains('glitch-hover') ||
                    node.classList.contains('nothing-btn') ||
                    node.classList.contains('magnetic-btn') ||
                    node.classList.contains('cursor-pointer') ||
                    node.classList.contains('social-icon')
                )) return true;
                node = node.parentElement;
            }
            return false;
        };

        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
            setIsHovering(isInteractive(e.target));
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);
        const handleMouseLeave = () => {
            setMousePos({ x: -100, y: -100 });
            setIsHovering(false);
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);
        document.documentElement.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    if (!isVisible) return null;

    const bubbleSize = isClicking ? 12 : isHovering ? 48 : 20;

    return (
        <>
            {/* Main bubble */}
            <motion.div
                className="fixed top-0 left-0 z-[99999] pointer-events-none mix-blend-difference"
                animate={{
                    x: mousePos.x - bubbleSize / 2,
                    y: mousePos.y - bubbleSize / 2,
                    width: bubbleSize,
                    height: bubbleSize,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 500,
                    damping: 28,
                    mass: 0.5,
                }}
                style={{
                    borderRadius: '50%',
                    backgroundColor: isHovering ? 'rgba(245,245,245,0.15)' : 'rgba(245,245,245,0.8)',
                    border: isHovering ? '1px solid rgba(245,245,245,0.6)' : 'none',
                }}
            />

            {/* Outer ring (trails behind) */}
            <motion.div
                className="fixed top-0 left-0 z-[99998] pointer-events-none"
                animate={{
                    x: mousePos.x - 20,
                    y: mousePos.y - 20,
                    scale: isHovering ? 1.5 : 1,
                    opacity: isHovering ? 0.4 : 0.15,
                }}
                transition={{
                    type: 'spring',
                    stiffness: 150,
                    damping: 15,
                    mass: 0.8,
                }}
                style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    border: '1px solid var(--color-accent)',
                }}
            />
        </>
    );
};

export default CursorBubble;
