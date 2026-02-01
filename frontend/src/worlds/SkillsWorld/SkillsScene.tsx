import { useEffect, useState } from "react";
import { SkillNode } from "./SkillNode";
import { skillsMap, type SkillNode as Skill } from "./skillsMap";
import { useNavigationStore } from "../../utils/navigationStore";
import { SkillDetailPanel } from "./SkillDetailPanel";
import { SkillLinksLayer } from "./SkillLinkLayer";

type Direction = "up" | "down" | "left" | "right";

export function SkillsScene() {
    const exitWorld = useNavigationStore(s => s.exitWorld);

    // Start focused on first skill
    const [activeId, setActiveId] = useState(skillsMap[0].id);

    const activeSkill = skillsMap.find(s => s.id === activeId)!;

    const [openSkill, setOpenSkill] = useState<Skill | null>(null);

    function move(direction: Direction) {
        const candidates = skillsMap.filter(skill => {
            switch (direction) {
                case "up":
                    return skill.y < activeSkill.y;
                case "down":
                    return skill.y > activeSkill.y;
                case "left":
                    return skill.x < activeSkill.x;
                case "right":
                    return skill.x > activeSkill.x;
            }
        });

        if (candidates.length === 0) return;

        // Sort by distance (Manhattan distance)
        candidates.sort((a, b) => {
            const da =
                Math.abs(a.x - activeSkill.x) +
                Math.abs(a.y - activeSkill.y);
            const db =
                Math.abs(b.x - activeSkill.x) +
                Math.abs(b.y - activeSkill.y);
            return da - db;
        });

        setActiveId(candidates[0].id);
    }

    useEffect(() => {
        function onKeyDown(e: KeyboardEvent) {
            switch (e.key) {
                case "ArrowUp":
                case "w":
                    move("up");
                    break;
                case "ArrowDown":
                case "s":
                    move("down");
                    break;
                case "ArrowLeft":
                case "a":
                    move("left");
                    break;
                case "ArrowRight":
                case "d":
                    move("right");
                    break;
                case "Enter":
                    setOpenSkill(activeSkill);
                    break;
                case "Escape":
                    if (openSkill) {
                        setOpenSkill(null);
                    } else {
                        exitWorld();
                    }
                    break;
            }
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [activeSkill]);

    return (
        <div className="skills-scene">
            <button className="back-button" onClick={exitWorld}>
                ⬅ Back
            </button>

            <div className="skills-layer">
                <SkillLinksLayer activeSkillId={activeId} />
                {skillsMap.map(skill => (
                    <div
                        key={skill.id}
                        style={{
                            gridColumn: skill.x,
                            gridRow: skill.y
                        }}
                    >
                        <SkillNode
                            label={skill.label}
                            category={skill.category}
                            active={skill.id === activeId}
                        />
                    </div>
                ))}
                {openSkill && (
                    <SkillDetailPanel
                        skill={openSkill}
                        onClose={() => setOpenSkill(null)}
                    />
)}

            </div>
        </div>
    );
}
