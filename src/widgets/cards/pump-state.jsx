import { Card, CardBody, Typography, Switch, Tooltip } from "@material-tailwind/react";
import useDeviceParameters from "./device-parameters";
import { useState, useEffect, useRef } from "react";

export function PumpStateSwitch({ deviceId }) {
    const { connected, pumpState, temperature, humidity, moisture } = useDeviceParameters(deviceId);
    const [currentPumpState, setCurrentPumpState] = useState(pumpState);
    const socketRef = useRef(null);

    useEffect(() => {
        setCurrentPumpState(pumpState);
    }, [pumpState]);

    useEffect(() => {
        if (connected) {
            socketRef.current = new WebSocket("ws://localhost:3001");
            socketRef.current.onopen = () => {
                console.log("WebSocket connection established");
            };
            socketRef.current.onclose = () => {
                console.log("WebSocket connection closed");
            };
        }

        return () => {
            if (socketRef.current) {
                socketRef.current.close();
            }
        };
    }, [connected]);

    const handlePumpStateChange = (newState) => {
        setCurrentPumpState(newState);
        if (connected && socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
            const message = JSON.stringify({ unit_id: deviceId, pumpState: newState });
            socketRef.current.send(message);
        }
    };

    return (
        <Card className="w-60 p-4">
            <CardBody className="flex flex-col items-center">
                <Typography variant="h5" color="blue-gray">
                    Pump Status
                </Typography>
                <Tooltip content={currentPumpState ? "Turn Off" : "Turn On"}>
                    <Switch
                        id={`pump-switch-${deviceId}`}
                        checked={currentPumpState}
                        onChange={() => handlePumpStateChange(!currentPumpState)}
                        disabled={!connected}
                        ripple={false}
                        className="mt-4 h-full w-full checked:bg-[#2ec946]"
                        containerProps={{
                            className: "w-11 h-6",
                        }}
                        circleProps={{
                            className: "mt-4 before:hidden left-0.5 border-none",
                        }}
                    />
                </Tooltip>
                <div className="mt-4 flex items-center justify-center">
                    <div
                        className={`m-4 h-10 w-10 rounded-full ${
                            connected ? (currentPumpState ? "bg-green-500" : "bg-red-500") : "bg-gray-500"
                        }`}
                    ></div>
                </div>
            </CardBody>
        </Card>
    );
}

PumpStateSwitch.displayName = "/src/components/PumpStateSwitch.jsx";

export default PumpStateSwitch;
