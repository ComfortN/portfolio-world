import { motion, useReducedMotion } from "framer-motion";
import { TILE_SIZE } from "../worlds/MainHub/HubLayout";

interface Props {
  x: number;
  y: number;
}

export function PlayerCursor({ x, y }: Props) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="player-cursor"
      animate={{
        left: x * TILE_SIZE + 5,
        top: y * TILE_SIZE + 5,
      }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : { type: "spring", stiffness: 300, damping: 28 }
      }
    />
  );
}
