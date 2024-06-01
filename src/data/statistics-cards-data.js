import {
  BanknotesIcon,
  UserPlusIcon,
  UsersIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";

import { useEffect, useState } from 'react';
const sensorData = {};

const SensorData = () => {
  const [sensorData, setSensorData] = useState({ humidity: 0, temperature: 0, moisture: 0 });

  useEffect(() => {
    const socket = new WebSocket('ws://your-server-ip:3000');

    socket.onopen = () => {
      console.log('WebSocket connection established');
    };

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      sensorData = data;
      setSensorData(data);
    };

    socket.onclose = () => {
      console.log('WebSocket connection closed');
    };

    return () => {
      socket.close();
    };
  }, []);
};

export default SensorData;

export const statisticsCardsData = [
  {
    color: "gray",
    icon: BanknotesIcon,
    title: "Current Temperature",
    value: sensorData.temperature,
    footer: {
      color: "text-green-500",
      value: "+55%",
      label: "than last week",
    },
  },
  {
    color: "gray",
    icon: UsersIcon,
    title: "Current Humidity",
    value: sensorData.humidity,
    footer: {
      color: "text-green-500",
      value: "3%",
      label: "than last month",
    },
  },
  {
    color: "gray",
    icon: UserPlusIcon,
    title: "Current Moisture Level",
    value: "62",
    footer: {
      color: "text-red-500",
      value: "2%",
      label: "than yesterday",
    },
  },
  {
    color: "gray",
    icon: ChartBarIcon,
    title: "Pump Status",
    value: "30",
    footer: {
      color: "text-green-500",
      value: "+5%",
      label: "than yesterday",
    },
  },
];

// export default statisticsCardsData;
