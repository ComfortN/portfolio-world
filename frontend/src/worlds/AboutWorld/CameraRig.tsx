import { motion, useMotionValue, useSpring } from "framer-motion";
import { ReactNode, useEffect } from "react";

interface CameraRigProps {
    children: ReactNode;
}

export function CameraRig({ children }: CameraRigProps) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth camera motion
    const springX = useSpring(x, { stiffness: 40, damping: 20 });
    const springY = useSpring(y, { stiffness: 40, damping: 20 });

    useEffect(() => {
        function handleMouseMove(e: MouseEvent) {
            const { innerWidth, innerHeight } = window;

            const offsetX = (e.clientX / innerWidth - 0.5) * 20;
            const offsetY = (e.clientY / innerHeight - 0.5) * 20;

            x.set(offsetX);
            y.set(offsetY);
        }

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [x, y]);

    return (
        <motion.div
            className="camera-rig"
            style={{
                x: springX,
                y: springY
            }}
        >
            {children}
        </motion.div>
    );
}
