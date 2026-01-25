import clsx from "clsx";
import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { type TileType } from "./HubLayout";

interface Props {
  type: TileType;
  active: boolean;
  label?: string;
}

export function HubTile({ type, active, label }: Props) {
  const reduceMotion = useReducedMotion();
  const [landed, setLanded] = useState(false);

  useEffect(() => {
    if (active) {
      setLanded(true);
      const timeout = setTimeout(() => setLanded(false), 180);
      return () => clearTimeout(timeout);
    }
  }, [active]);

  return (
    <motion.div
      role="button"
      tabIndex={0}
      aria-label={label ?? type}
      className={clsx(
        "hub-tile",
        type.toLowerCase(),
        active && "active"
      )}
      animate={
        reduceMotion
          ? {}
          : {
              scale: landed ? 1.08 : active ? 1.03 : 1,
              boxShadow: landed
                ? "0 0 18px rgba(99,102,241,0.9)"
                : active
                ? "0 0 10px rgba(99,102,241,0.6)"
                : "0 0 0 rgba(0,0,0,0)"
            }
      }
      transition={{ duration: 0.18, ease: "easeOut" }}
    >
      {label && <span>{label}</span>}
    </motion.div>
  );
}
