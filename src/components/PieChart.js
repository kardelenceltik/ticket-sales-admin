import { useEffect, useState } from "react";
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";

function PieChart() {
  const generateRandomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };
  ChartJs.register(Tooltip, Title, ArcElement, Legend);

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
  return (
    <div style={{ width: "30%", height: "30%" }}>
      <Doughnut data={chartData} className="App " />
      <button
        className="btn btn-outline-primary"
        onClick={() => chartHandler()}
      >
        Click
      </button>
    </div>
  );
}

export default PieChart;
