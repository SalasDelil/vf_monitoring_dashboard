import {
  BanknotesIcon,
  UserPlusIcon,
  UsersIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";

// import React, { useEffect, useState } from 'react';

// const SensorData = () => {
//   const [sensorData, setSensorData] = useState({ humidity: 0, temperature: 0, moisture: 0 });

//   useEffect(() => {
//     const socket = new WebSocket('ws://your-server-ip:3000');

//     socket.onopen = () => {
//       console.log('WebSocket connection established');
//     };

//     socket.onmessage = (event) => {
//       const data = JSON.parse(event.data);
//       setSensorData(data);
//     };

//     socket.onclose = () => {
//       console.log('WebSocket connection closed');
//     };

//     return () => {
//       socket.close();
//     };
//   }, []);

//   return (
//     <div>
//       <h1>Real-Time Sensor Data</h1>
//       <p>Humidity: {sensorData.humidity}%</p>
//       <p>Temperature: {sensorData.temperature}°C</p>
//       <p>Moisture: {sensorData.moisture}%</p>
//     </div>
//   );
// };

// export default SensorData;


export const statisticsCardsData = [
  {
    color: "gray",
    icon: BanknotesIcon,
    title: "Today's Money",
    value: "$53k",
    footer: {
      color: "text-green-500",
      value: "+55%",
      label: "than last week",
    },
  },
  {
    color: "gray",
    icon: UsersIcon,
    title: "Today's Users",
    value: "2,300",
    footer: {
      color: "text-green-500",
      value: "+3%",
      label: "than last month",
    },
  },
  {
    color: "gray",
    icon: UserPlusIcon,
    title: "New Clients",
    value: "3,462",
    footer: {
      color: "text-red-500",
      value: "-2%",
      label: "than yesterday",
    },
  },
  {
    color: "gray",
    icon: ChartBarIcon,
    title: "Sales",
    value: "$103,430",
    footer: {
      color: "text-green-500",
      value: "+5%",
      label: "than yesterday",
    },
  },
];

export default statisticsCardsData;
