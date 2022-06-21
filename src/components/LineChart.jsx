import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { useEffect, useState } from "react";
import axios from "axios";
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const LineChart = () => {
  const generateRandomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };
  const [activities, setActivity] = useState([]);
  const [activityTypes, setActivityType] = useState([]);
  const colors = [
    generateRandomColor(),
    generateRandomColor(),
    generateRandomColor(),
    generateRandomColor(),
    generateRandomColor(),
  ];
  const [chartData, setChartData] = useState({
    datasets: [],
    labels: [],
  });

  const getActivity = () => {
    axios.get("http://localhost:7070/activity/get").then((response) => {
      setActivity(response.data);
    });
  };
  const getActivityTypes = () => {
    axios
      .get("http://localhost:7070/activityType/get-by-row-status")
      .then((response) => {
        setActivityType(response.data);
      });
  };
  const chartHandler = () => {
    let tempArrForTypes = [];
    let tempArrForTypeCount = [];
    activityTypes.forEach((type) => {
      tempArrForTypes.push(type.name);
      let currentActivityTypes = activities.filter(
        (x) => x.activityType == type.name
      );
      if (currentActivityTypes && currentActivityTypes.length > 0) {
        let activityCount = currentActivityTypes.length;
        tempArrForTypeCount.push(activityCount);
      } else tempArrForTypeCount.push(0);
    });
    setChartData({
      datasets: [
        {
          data: tempArrForTypeCount,
          backgroundColor: colors,
        },
      ],
      labels: tempArrForTypes,
    });
  };
  useEffect(() => {
    getActivity();
    getActivityTypes();
  }, []);

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
    <div style={{ width: "500px", height: "500px" }}>
      <Line data={chartData} options={options} />
      <button
        className="btn btn-outline-primary"
        onClick={() => chartHandler()}
      >
        Click
      </button>
    </div>
  );
};

export default LineChart;
