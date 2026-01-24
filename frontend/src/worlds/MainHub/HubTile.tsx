import clsx from "clsx";
import { motion, useReducedMotion } from "framer-motion";
import { type TileType } from "./HubLayout";

interface Props {
    type: TileType;
    active: boolean;
    label?: string;
}

export function HubTile({ type, active, label }: Props) {
    const reduceMotion = useReducedMotion();

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
                    ? { opacity: 1 }
                    : {
                        scale: active ? 1.08 : 1,
                        opacity: active ? 1 : 0.85
                    }
            }
            transition={{ duration: 0.2, ease: "easeOut" }}
        >
            {label && <span>{label}</span>}
        </motion.div>
    );
}
