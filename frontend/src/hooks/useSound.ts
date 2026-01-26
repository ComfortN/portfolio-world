import { useRef, useCallback } from "react";
import { useNavigationStore } from "../utils/navigationStore";


type SoundName =
    | "move"
    | "enter"
    | "ripple"
    | "world";

const SOUND_FILES: Record<SoundName, string> = {
    move: "/sounds/move.mp3",
    enter: "/sounds/enter.mp3",
    ripple: "/sounds/ripple.mp3",
    world: "/sounds/world.mp3"
};

export function useSound() {
    const audioRefs = useRef<Record<SoundName, HTMLAudioElement>>({});
    const muted = useNavigationStore((s) => s.muted);

    const play = useCallback(
        (name: SoundName, volume = 0.6) => {
            if (muted) return;

            if (!audioRefs.current[name]) {
                const audio = new Audio(SOUND_FILES[name]);
                audio.volume = volume;
                audio.preload = "auto";
                audioRefs.current[name] = audio;
            }

            const audio = audioRefs.current[name];
            audio.currentTime = 0;
            audio.play().catch(() => {});
        },
        [muted]
    );

    return { play };
}
