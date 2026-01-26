import { HubScene } from "../worlds/MainHub/HubScene";
import { WorldRouter } from "../worlds/WorldRouter";
import { KeyboardController } from "./KeyboardController";


export default function App() {
    return (
        <>
            <KeyboardController />
            <WorldRouter />
            {/* <HubScene /> */}
        </>
    );
}