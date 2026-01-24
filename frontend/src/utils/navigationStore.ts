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
    enterWorld: (world: TileType) => void;
    exitWorld: () => void;


    // Terminal
    terminalOpen: boolean;
    toggleTerminal: () => void;
}


export const useNavigationStore = create<NavigationState>((set) => ({
    // Start at CORE (4,4)
    position: { x: 4, y: 4 },


    setPosition: (pos) => set({ position: pos }),


    currentWorld: null,


    enterWorld: (world) =>
        set({ currentWorld: world }),


    exitWorld: () =>
        set({ currentWorld: null }),

    terminalOpen: false,


    toggleTerminal: () =>
        set((state) => ({ terminalOpen: !state.terminalOpen }))
}));