import { create } from "zustand";
import { type TileType } from "../worlds/MainHub/HubLayout";


interface Position {
    x: number;
    y: number;
}


interface NavigationState {
    // Grid position
    position: Position;
    setPosition: (pos: Position) => void;


    // World state
    currentWorld: TileType | null;
    isTransitioning: boolean;
    enterWorld: (world: TileType) => void;
    finishTransition: () => void;
    exitWorld: () => void;


    // Terminal
    terminalOpen: boolean;
    toggleTerminal: () => void;


    // Audio
    muted: boolean;
    toggleMute: () => void;
}


export const useNavigationStore = create<NavigationState>((set) => ({
    // Start at CORE (4,4)
    position: { x: 4, y: 4 },


    setPosition: (pos) => set({ position: pos }),

    // World
    currentWorld: null,
    isTransitioning: false,

    enterWorld: (world) =>
        set({ currentWorld: world,
            isTransitioning: true }),

    finishTransition: () =>
        set({ isTransitioning: false }),

    exitWorld: () =>
        set({ currentWorld: null,
            isTransitioning: true
        }),
    
    // Audio
    muted: localStorage.getItem("muted") === "true",

    toggleMute: () =>
        set((state) => {
            const next = !state.muted;
            localStorage.setItem("muted", String(next));
            return { muted: next };
        }),

    terminalOpen: false,

    toggleTerminal: () =>
        set((state) => ({ terminalOpen: !state.terminalOpen }))
}));