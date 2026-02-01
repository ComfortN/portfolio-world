import { useNavigationStore } from "../utils/navigationStore";
import { HubScene } from "./MainHub/HubScene";
import { SkillsScene } from "./SkillsWorld/SkillsScene";
import { AboutScene } from "./AboutWorld/AboutScene";

export function WorldRouter() {
    const { currentWorld, isTransitioning } = useNavigationStore();

    // Always show hub until transition finishes
    if (!currentWorld || isTransitioning) {
        return <HubScene />;
    }

    switch (currentWorld) {
        case "ABOUT":
            return <AboutScene />;
        case "SKILLS":
            return <SkillsScene />;

        default:
            return <HubScene />;
    }
}
