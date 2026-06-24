import { motion } from "framer-motion";
import "./solar.css";
import { useEffect , useRef , useState } from "react";
import { createPortal } from "react-dom"

function Planet({
    stack,
    index,
    count,
    radius,
    duration,
    reverse
}) {
    const angle = (360 / count) * index;
    const Icon = stack.icon;
    
    const iconRef = useRef(null);
    const [showTooltip, setShowTooltip] = useState(false);
    const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        if (!showTooltip) return;

        const updatePosition = () => {
            if (!iconRef.current) return;

            const rect = iconRef.current.getBoundingClientRect();

            setTooltipPos({
                x: rect.left + rect.width / 2,
                y: rect.bottom + 12
            });
        };

        updatePosition();

        const interval = requestAnimationFrame(function animate() {
            updatePosition();
            requestAnimationFrame(animate);
        });

        return () => cancelAnimationFrame(interval);
    }, [showTooltip]);

    return (
        <div
            className="absolute inset-0"
            style={{
                transform: `rotate(${angle}deg)`
            }}
        >
            <div
                className="absolute top-1/2 left-1/2"
                style={{
                    transform: `translateX(${radius}px) translate(-50%,-50%)`
                }}
            >
                <motion.div
                    whileHover={{
                        scale: 1.2,
                        zIndex: 9999
                    }}
                    className="
                    group
                    relative
                    flex
                    items-center
                    justify-center
                    pointer-events-auto
                    "
                    ref={iconRef}
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                >
                    <div
                        className={reverse ? "counter-cw" : "counter-ccw"}
                        style={{
                            animationDuration: `${duration}s`
                        }}
                    >
                        <Icon 
                            size={30} 
                            className="
                                transition-all
                                duration-300
                                group-hover:scale-110
                            "
                            style={{
                                color: stack.color,
                                filter: `drop-shadow(0 0 12px ${stack.color}) drop-shadow(0 0 24px ${stack.color})`
                            }} 
                        />
                    </div>
                    {
                        showTooltip &&
                        createPortal(
                            <div
                                className="
                                    fixed
                                    px-4 py-2
                                    rounded-xl
                                    bg-slate-950/90
                                    backdrop-blur-md
                                    border border-slate-700
                                    text-sm text-white
                                    shadow-2xl
                                    pointer-events-none
                                    z-[99999]
                                    -translate-x-1/2
                                "
                                style={{
                                    left: tooltipPos.x,
                                    top: tooltipPos.y
                                }}
                            >
                                {stack.name}
                            </div>,
                            document.body
                        )
                        }
                </motion.div>
            </div>
        </div>
    );
}

export default Planet;