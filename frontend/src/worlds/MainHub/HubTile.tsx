import clsx from "clsx";
import { type TileType } from "./HubLayout";


interface Props {
    type: TileType;
    active: boolean;
    label?: string;
}


export function HubTile({ type, active, label }: Props) {
    return (
        <div
            className={clsx(
                "hub-tile",
                type.toLowerCase(),
                active && "active"
            )}
        >
            {label && <span>{label}</span>}
        </div>
    );
}