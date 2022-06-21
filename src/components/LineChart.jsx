import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { useEffect } from "react";
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const LineChart = ({ chartData }) => {
  useEffect(() => {}, []);
  const options = {
    plugins: {
      legend: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        min: 0,
        max: 10,
        ticks: {
          stepSize: 1,
        },
        grid: {
          borderDash: [10],
        },
      },
    },
  };

  return (
    <div>
      <Line data={chartData} />
    </div>
  );
};

export default LineChart;
