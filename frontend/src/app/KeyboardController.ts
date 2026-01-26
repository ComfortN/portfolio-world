import { useEffect } from "react";
import { hubLayout, HUB_WIDTH, HUB_HEIGHT, type TileType } from "../worlds/MainHub/HubLayout";
import { useNavigationStore } from "../utils/navigationStore";
import { useSound } from "../hooks/useSound";


const keyMap: Record<string, { dx: number; dy: number }> = {
    ArrowUp: { dx: 0, dy: -1 },
    ArrowDown: { dx: 0, dy: 1 },
    ArrowLeft: { dx: -1, dy: 0 },
    ArrowRight: { dx: 1, dy: 0 },
    w: { dx: 0, dy: -1 },
    s: { dx: 0, dy: 1 },
    a: { dx: -1, dy: 0 },
    d: { dx: 1, dy: 0 }
};

export function KeyboardController() {
    const {
        position,
        setPosition,
        enterWorld,
        exitWorld,
        toggleTerminal
    } = useNavigationStore();
    const { play } = useSound();


useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
        if (["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","w","a","s","d"].includes(e.key)) {
            e.preventDefault();
        }

        const move = keyMap[e.key];

        if (move) {
            e.preventDefault();
            const nextX = position.x + move.dx;
            const nextY = position.y + move.dy;

            if (
                nextX >= 0 &&
                nextY >= 0 &&
                nextX < HUB_WIDTH &&
                nextY < HUB_HEIGHT
            ) {
                setPosition({ x: nextX, y: nextY });
                play("move", 0.5);
            }
            return;
        }

        


        if (e.key === "Enter") {
            const tile = hubLayout.find(
                t => t.x === position.x && t.y === position.y
            );

            if (tile && tile.type !== "EMPTY") {
                enterWorld(tile.type as TileType);
            }
        }

        if (e.key === "Escape") {
            exitWorld();
        }


        const toggleMute = useNavigationStore((s) => s.toggleMute);

        if (e.key.toLowerCase() === "m") {
            toggleMute();
        }
        

        if (e.key === "`" || e.key === "~") {
            toggleTerminal();
        }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
        window.removeEventListener("keydown", handleKeyDown);
    };
}, [position, setPosition, enterWorld, exitWorld, toggleTerminal]);

    return null;
}