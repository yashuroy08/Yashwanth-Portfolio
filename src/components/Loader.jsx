import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// 7x7 grid = 49 dots
const GRID_SIZE = 7;
const TOTAL_DOTS = GRID_SIZE * GRID_SIZE;

// Build a clockwise spiral order of indices for a 7x7 grid
// Spiral from outside-in, lighting dots one by one in that order
function buildClockwiseSpiral(size) {
    const order = [];
    const visited = Array.from({ length: size }, () => Array(size).fill(false));
    const dirs = [[0, 1], [1, 0], [0, -1], [-1, 0]]; // right, down, left, up
    let r = 0, c = 0, dir = 0;
    for (let i = 0; i < size * size; i++) {
        order.push(r * size + c);
        visited[r][c] = true;
        const [dr, dc] = dirs[dir];
        const nr = r + dr, nc = c + dc;
        if (nr < 0 || nr >= size || nc < 0 || nc >= size || visited[nr][nc]) {
            dir = (dir + 1) % 4;
        }
        const [dr2, dc2] = dirs[dir];
        r += dr2;
        c += dc2;
    }
    return order;
}

const SPIRAL_ORDER = buildClockwiseSpiral(GRID_SIZE);

const systemLogs = [
    "MOUNTING_FS...",
    "CHECKING_INTEGRITY... [OK]",
    "INIT_CORE_ASSETS...",
    "LOADING_KERN_MODULES...",
    "ESTABLISHING_SECURE_LINK...",
    "DEPLOYING_UI_RESOURCES...",
    "HANDSHAKE_PROTOCOL_INITIALIZED",
    "SYSTEM_READY_FOR_EXECUTION"
];

const Loader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [logs, setLogs] = useState([]);
    const [isExiting, setIsExiting] = useState(false);
    const [activeDotIndex, setActiveDotIndex] = useState(0); // Which dot in spiral is the "head"
    const [trail, setTrail] = useState(new Set()); // Indices of dots currently lit

    const TRAIL_LENGTH = 5;

    // Dot-matrix snake animation — independent of progress
    useEffect(() => {
        let step = 0;
        const dotInterval = setInterval(() => {
            step = (step + 1) % TOTAL_DOTS;
            // Build the trail: current step and N previous steps in spiral order
            const newTrail = new Set();
            for (let i = 0; i < TRAIL_LENGTH; i++) {
                const idx = (step - i + TOTAL_DOTS) % TOTAL_DOTS;
                newTrail.add(SPIRAL_ORDER[idx]);
            }
            setActiveDotIndex(SPIRAL_ORDER[step]);
            setTrail(newTrail);
        }, 50); // 50ms per step = smooth snake motion
        return () => clearInterval(dotInterval);
    }, []);

    // Loading progress
    useEffect(() => {
        let currentProgress = 0;
        const progressInterval = setInterval(() => {
            currentProgress += Math.floor(Math.random() * 4) + 1;
            if (currentProgress >= 100) {
                currentProgress = 100;
                clearInterval(progressInterval);
                setTimeout(() => {
                    setIsExiting(true);
                    setTimeout(onComplete, 700);
                }, 500);
            }
            setProgress(currentProgress);
            const logIndex = Math.floor((currentProgress / 100) * systemLogs.length);
            setLogs(systemLogs.slice(0, logIndex + 1));
        }, 35);
        return () => clearInterval(progressInterval);
    }, [onComplete]);

    const renderProgressBar = () => {
        const totalBlocks = 20;
        const filled = Math.floor((progress / 100) * totalBlocks);
        const empty = totalBlocks - filled;
        return `[${'█'.repeat(filled)}${'░'.repeat(empty)}]`;
    };

    return (
        <AnimatePresence>
            {!isExiting && (
                <motion.div
                    className="fixed inset-0 z-[9999] flex flex-col justify-center items-center overflow-hidden"
                    style={{ backgroundColor: '#000000', fontFamily: 'monospace' }}
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.04 }}
                    transition={{ duration: 0.7, ease: 'easeInOut' }}
                >
                    {/* Subtle grid overlay */}
                    <div
                        className="absolute inset-0 opacity-[0.04] pointer-events-none"
                        style={{
                            backgroundImage: 'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
                            backgroundSize: '32px 32px'
                        }}
                    />

                    {/* ── CORNER LABELS ── */}
                    {/* Top-left */}
                    <div className="absolute top-6 left-6 text-[10px] tracking-[0.3em] text-[#ff3333] font-mono">
                        [SYS.LOAD]
                    </div>
                    {/* Top-right */}
                    <div className="absolute top-6 right-6 text-[10px] tracking-[0.3em] text-[#555555] font-mono text-right">
                        INIT.SEQUENCE
                    </div>
                    {/* Bottom-left: System logs */}
                    <div className="absolute bottom-20 left-6 flex flex-col gap-1 text-[9px] md:text-[10px] text-[#444444] max-w-xs">
                        {logs.map((log, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -8 }}
                                animate={{ opacity: 1, x: 0 }}
                                className={i === logs.length - 1 ? 'text-[#ff3333]' : ''}
                            >
                                {`> ${log}`}
                            </motion.div>
                        ))}
                    </div>
                    {/* Bottom-right: Coordinates */}
                    <div className="absolute bottom-20 right-6 text-right text-[9px] md:text-[10px] text-[#333333] font-mono leading-relaxed">
                        <div>X: {String(progress * 23 % 999).padStart(3, '0')}</div>
                        <div>Y: {String(progress * 17 % 999).padStart(3, '0')}</div>
                        <div className="text-[#ff3333] mt-1">STS: {progress < 100 ? 'INIT' : 'READY'}</div>
                    </div>

                    {/* Corner Crosshairs */}
                    <div className="absolute top-5 right-5 w-5 h-5 border-t-2 border-r-2 border-[#222222]" />
                    <div className="absolute bottom-5 left-5 w-5 h-5 border-b-2 border-l-2 border-[#222222]" />
                    <div className="absolute bottom-5 right-5 w-5 h-5 border-b-2 border-r-2 border-[#222222]" />

                    {/* ── MAIN CONTENT ── */}
                    <div className="flex flex-col items-center gap-8 z-10">

                        {/* Title */}
                        <div className="text-[10px] tracking-[0.5em] text-[#333333] uppercase">
                            PORTFOLIO_DEPLOYMENT
                        </div>

                        {/* DOT MATRIX 7×7 */}
                        <div
                            className="grid gap-3"
                            style={{ gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)` }}
                        >
                            {Array.from({ length: TOTAL_DOTS }, (_, dotIndex) => {
                                const isHead = dotIndex === activeDotIndex;
                                const isTrail = trail.has(dotIndex);
                                const trailPos = isTrail
                                    ? [...trail].indexOf(dotIndex)
                                    : -1;
                                // Head = full red, trail fades out, rest = dark
                                let bg = '#1a1a1a';
                                let shadow = 'none';
                                if (isHead) {
                                    bg = '#ff3333';
                                    shadow = '0 0 8px #ff3333';
                                } else if (isTrail) {
                                    const intensity = Math.floor(255 - (trailPos / TRAIL_LENGTH) * 220);
                                    const r = Math.min(255, Math.floor(intensity * 0.8));
                                    bg = `rgb(${r}, ${Math.floor(intensity * 0.05)}, ${Math.floor(intensity * 0.05)})`;
                                }
                                return (
                                    <div
                                        key={dotIndex}
                                        style={{
                                            width: 10,
                                            height: 10,
                                            borderRadius: '50%',
                                            backgroundColor: bg,
                                            boxShadow: shadow,
                                            transition: 'background-color 0.04s linear, box-shadow 0.04s linear',
                                        }}
                                    />
                                );
                            })}
                        </div>

                        {/* Progress % */}
                        <div className="text-5xl md:text-7xl font-black tracking-tighter text-white">
                            <span className="text-[#222222]">[</span>
                            <span className="mx-3">{progress.toString().padStart(2, '0')}%</span>
                            <span className="text-[#222222]">]</span>
                        </div>

                        {/* Block Progress Bar */}
                        <div className="text-[#ff3333] text-xs md:text-sm font-bold tracking-widest whitespace-pre">
                            {renderProgressBar()}
                        </div>

                        {/* Status blink */}
                        <div className="flex items-center gap-2 text-[10px] tracking-[0.3em] text-[#333333]">
                            <span>STATUS: {progress === 100 ? 'INITIALIZED' : 'INITIALIZING'}</span>
                            <motion.span
                                animate={{ opacity: [1, 0] }}
                                transition={{ repeat: Infinity, duration: 0.7 }}
                                style={{ width: 6, height: 14, backgroundColor: '#ff3333', display: 'inline-block' }}
                            />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Loader;
