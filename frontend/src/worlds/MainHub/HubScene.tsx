import { hubLayout, HUB_WIDTH, HUB_HEIGHT, TILE_SIZE } from "./HubLayout";
import { HubTile } from "./HubTile";
import { PlayerCursor } from "../../components/PlayerCursor";
import { useNavigationStore } from "../../utils/navigationStore";


export function HubScene() {
    const { position } = useNavigationStore();


    const tiles = Array.from({ length: HUB_WIDTH * HUB_HEIGHT });


    return (
        <div className="hub-container">
            <PlayerCursor x={position.x} y={position.y} />
            <div
                className="hub-grid"
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
            </div>
        </div>
    );
}