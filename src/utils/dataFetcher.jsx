// utils/dataFetcher.js

export async function fetchSensorData() {
    try {
      const response = await fetch('/api/sensor-data');
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data; // This should be an array of objects with time, temperature, humidity, and moisture
    } catch (error) {
      console.error("Failed to fetch sensor data:", error);
      return null; // Handle the error appropriately in your application
    }
  }
  
fetchSensorData.displayName = "src/utils/dataFetcher.jsx";

export default fetchSensorData;