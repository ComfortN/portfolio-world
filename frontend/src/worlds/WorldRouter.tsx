import { useNavigationStore } from "../utils/navigationStore";
import { HubScene } from "./MainHub/HubScene";
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

        default:
            return <HubScene />;
    }
}
