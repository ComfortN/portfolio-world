import { motion } from "framer-motion";
import type { SkillNode } from "./skillsMap";
import '../../styles/skills.css';

interface Props {
    skill: SkillNode;
    onClose: () => void;
}

export function SkillDetailPanel({ skill, onClose }: Props) {
    return (
        <motion.aside
            className="skill-detail-panel"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 220, damping: 25 }}
            role="dialog"
            aria-modal="true"
        >
            <button
                className="close-button"
                onClick={onClose}
                aria-label="Close skill details"
            >
                ✕
            </button>

            <header className="skill-detail-header">
                <h2>{skill.label}</h2>
                <span className="skill-category">{skill.category}</span>
            </header>

            <p className="skill-description">{skill.description}</p>

            {skill.stack && (
                <ul className="skill-stack">
                    {skill.stack.map(item => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            )}
        </motion.aside>
    );
}
