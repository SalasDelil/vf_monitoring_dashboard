import React, { useEffect, useState } from 'react';

const SensorData = () => {
  const [sensorData, setSensorData] = useState({ humidity: 0, temperature: 0, moisture: 0 });

  console.log(sensorData);

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:3000');

    socket.onopen = () => {
      console.log('WebSocket connection established');
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setSensorData(data);
    };

    
    socket.onclose = () => {
      console.log('WebSocket connection closed');
    };

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div>
      <h1>Real-Time Sensor Data</h1>
      <p>Humidity: {sensorData.humidity}%</p>
      <p>Temperature: {sensorData.temperature}°C</p>
      <p>Moisture: {sensorData.moisture}%</p>
    </div>
  );
};

export default SensorData;
