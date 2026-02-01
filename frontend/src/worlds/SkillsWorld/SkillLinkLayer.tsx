import { motion } from "framer-motion";
import { skillsMap, skillLinks } from "./skillsMap";

interface Props {
    activeSkillId: string;
    tileSize?: number;
}

export function SkillLinksLayer({
    activeSkillId,
    tileSize = 100,
}: Props) {
    const skillById = Object.fromEntries(
        skillsMap.map(s => [s.id, s])
    );

    return (
        <svg
            className="skill-links-layer"
            width="100%"
            height="100%"
            viewBox={`0 0 ${tileSize * 9} ${tileSize * 9}`}
            preserveAspectRatio="none"
        >
            {skillLinks.map((link, index) => {
                const from = skillById[link.from];
                const to = skillById[link.to];
                if (!from || !to) return null;

                const x1 = from.x * tileSize;
                const y1 = from.y * tileSize;
                const x2 = to.x * tileSize;
                const y2 = to.y * tileSize;

                const isActive =
                    activeSkillId === from.id ||
                    activeSkillId === to.id;

                return (
                    <motion.line
                        key={index}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke={isActive ? "#7dd3fc" : "rgba(125,211,252,0.25)"}
                        strokeWidth={isActive ? 2 : 1}
                        strokeDasharray="4 6"
                        animate={{
                            strokeDashoffset: [0, 20],
                            opacity: isActive ? 1 : 0.5,
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                );
            })}
        </svg>
    );
}
