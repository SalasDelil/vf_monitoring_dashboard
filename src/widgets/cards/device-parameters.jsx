import { useState, useEffect } from "react";

export function useDeviceParameters(deviceId) {
  const [deviceParameters, setDeviceParameters] = useState({
    connected: false,
    pumpState: false,
    temperature: 0,
    humidity: 0,
    moisture: 0,
  });

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:3001");

    socket.onopen = () => {
      console.log("WebSocket connection established for device parameters");
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.unit_id === deviceId) {
        setDeviceParameters((prevState) => ({
          ...prevState,
          connected: true,
          pumpState: data.pumpState ?? prevState.pumpState,
          temperature: data.temperature ?? prevState.temperature,
          humidity: data.humidity ?? prevState.humidity,
          moisture: data.moisture ?? prevState.moisture,
        }));
      }
    };

    socket.onclose = () => {
      console.log("WebSocket connection closed for device parameters");
      setDeviceParameters((prevState) => ({
        ...prevState,
        connected: false,
      }));
    };

    return () => {
      socket.close();
    };
  }, [deviceId]);

  return deviceParameters;
}

export default useDeviceParameters;
