import { HubScene } from "../worlds/MainHub/HubScene";
import { KeyboardController } from "./KeyboardController";


export default function App() {
    return (
        <>
            <KeyboardController />
            <HubScene />
        </>
    );
}