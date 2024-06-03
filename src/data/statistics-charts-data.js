import { chartsConfig } from "@/configs";

const TemperatureViewsChart = {
  type: "bar",
  height: 220,
  series: [
    {
      name: "Temp",
      data: [24, 23, 25, 22, 20, 20, 27],
    },
  ],
  options: {
    ...chartsConfig,
    colors: "#388e3c",
    plotOptions: {
      bar: {
        columnWidth: "16%",
        borderRadius: 5,
      },
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: ["M", "T", "W", "T", "F", "S", "S"],
    },
  },
};

const HumidityViewsChart = {
  type: "line",
  height: 220,
  series: [
    {
      name: "Humi",
      data: [50, 55, 48, 50, 48, 50, 52],
    },
  ],
  options: {
    ...chartsConfig,
    colors: ["#0288d1"],
    stroke: {
      lineCap: "round",
    },
    markers: {
      size: 5,
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: ["M", "T", "W", "T", "F", "S", "S"],
    },
  },
};

const SoilMoistureViewsChart = {
  type: "line",
  height: 220,
  series: [
    {
      name: "Mois",
      data: [50, 40, 45, 56, 37, 67, 58],
    },
  ],
  options: {
    ...chartsConfig,
    colors: ["#388e3c"],
    stroke: {
      lineCap: "round",
    },
    markers: {
      size: 5,
    },
    xaxis: {
      ...chartsConfig.xaxis,
      categories: ["1hr", "2hr", "3hr", "4hr", "5hr", "6hr", "7hr"],
    },
  },
};

export const statisticsChartsData = [
  {
    color: "white",
    title: "Temperature Changes",
    description: "Daily temperature changes dataflow chart.",
    footer: "campaign sent 2 days ago",
    chart: TemperatureViewsChart,
  },
  {
    color: "white",
    title: "Humidity Changes",
    description: "Daily humidity changes dataflow chart.",
    footer: "updated 4 min ago",
    chart: HumidityViewsChart,
  },
  {
    color: "white",
    title: "Moisture Changes",
    description: "Hourly moisture changes.",
    footer: "just updated",
    chart: SoilMoistureViewsChart,
  },
];

export default statisticsChartsData;
