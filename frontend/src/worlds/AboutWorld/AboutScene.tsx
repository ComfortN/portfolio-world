import { motion } from "framer-motion";
import { AboutData } from "./AboutData";
import { useNavigationStore } from "../../utils/navigationStore";

export function AboutScene() {
    const exitWorld = useNavigationStore((s) => s.exitWorld);

    return (
        <motion.div
            className="about-scene"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
        >
            <button
                className="back-button"
                onClick={exitWorld}
                aria-label="Return to hub"
            >
                ⬅ Back
            </button>

            <AboutData />
        </motion.div>
    );
}
