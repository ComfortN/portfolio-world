import { motion, useReducedMotion } from "framer-motion";

interface Props {
  x: number;
  y: number;
  onComplete: () => void;
}

export function RippleOverlay({ x, y, onComplete }: Props) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="ripple-overlay"
      initial={{
        scale: 0,
        opacity: 1,
        left: x,
        top: y
      }}
      animate={{
        scale: reduceMotion ? 1 : 30,
        opacity: reduceMotion ? 0 : 1
      }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      onAnimationComplete={onComplete}
    />
  );
}
