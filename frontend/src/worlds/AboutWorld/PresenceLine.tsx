import { motion } from "framer-motion";

interface PresenceLineProps {
    text: string;
    delay: number;
}

export function PresenceLine({ text, delay }: PresenceLineProps) {
    return (
        <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.6,
                delay,
                ease: "easeOut"
            }}
        >
            {text}
        </motion.p>
    );
}
