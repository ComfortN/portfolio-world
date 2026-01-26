import { useNavigationStore } from "../utils/navigationStore";

export function MuteToggle() {
    const muted = useNavigationStore((s) => s.muted);
    const toggleMute = useNavigationStore((s) => s.toggleMute);

    return (
        <button
            onClick={toggleMute}
            aria-label={muted ? "Unmute sound" : "Mute sound"}
            aria-pressed={muted}
            className="mute-toggle"
        >
            {muted ? "🔇" : "🔊"}
        </button>
    );
}
