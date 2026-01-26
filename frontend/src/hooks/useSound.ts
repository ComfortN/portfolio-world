import { useRef } from "react";

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
    const audioRefs = useRef<Record<string, HTMLAudioElement>>({});

    function play(name: SoundName, volume = 0.6) {
        if (!audioRefs.current[name]) {
            const audio = new Audio(SOUND_FILES[name]);
            audio.volume = volume;
            audioRefs.current[name] = audio;
        }

        const audio = audioRefs.current[name];
        audio.currentTime = 0;
        audio.play().catch(() => {});
    }

    return { play };
}
