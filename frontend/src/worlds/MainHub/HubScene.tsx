import { motion } from "framer-motion";
import { hubLayout, HUB_WIDTH, HUB_HEIGHT, TILE_SIZE } from "./HubLayout";
import { HubTile } from "./HubTile";
import { RippleOverlay } from "../../components/RippleOverlay";
import { PlayerCursor } from "../../components/PlayerCursor";
import { useSound } from "../../hooks/useSound";
import { useNavigationStore } from "../../utils/navigationStore";
import { useEffect } from "react";


export function HubScene() {
    const { position, isTransitioning, finishTransition } = useNavigationStore();
    const { play } = useSound();

    const tiles = Array.from({ length: HUB_WIDTH * HUB_HEIGHT });
    useEffect(() => {
        if (isTransitioning) {
            play("ripple", 0.6);
        }
    }, [isTransitioning, play]);

    return (
        <div className="hub-container">
            <PlayerCursor x={position.x} y={position.y} />
            
            {isTransitioning && (
                <RippleOverlay
                    x={position.x * TILE_SIZE}
                    y={position.y * TILE_SIZE}
                    onComplete={() => {
                        finishTransition();
                        play("ripple", 0.5);
                    }}
                />
            )}
            
            <motion.div
                className="hub-grid"
                animate={{ opacity: isTransitioning ? 0 : 1 }}
                transition={{ duration: 0.3 }}
                style={{
                    gridTemplateColumns: `repeat(${HUB_WIDTH}, ${TILE_SIZE}px)`,
                    gridTemplateRows: `repeat(${HUB_HEIGHT}, ${TILE_SIZE}px)`
                }}
            >
                {tiles.map((_, index) => {
                    const x = index % HUB_WIDTH;
                    const y = Math.floor(index / HUB_WIDTH);

                    const tile = hubLayout.find(t => t.x === x && t.y === y);
                    const isActive = position.x === x && position.y === y;

                    return (
                        <HubTile
                            key={index}
                            type={tile?.type || "EMPTY"}
                            label={tile?.label}
                            active={isActive}
                        />
                    );
                })}
            </motion.div>
        </div>
    );
}