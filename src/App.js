import "./App.css";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import React, { useState, useEffect } from "react";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import axios from "axios";
import DoughnutChart from "./components/DoughnutChart";
import CustomCard from "./components/CustomCard";
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from "chart.js";

function App() {
  ChartJs.register(Tooltip, Title, ArcElement, Legend);
  const [activities, setActivity] = useState([]);
  const [activityTypes, setActivityType] = useState([]);
  const [chartData, setChartData] = useState({
    datasets: [],
    labels: [],
  });
  const generateRandomColor = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  };
  const getActivity = async () => {
    await axios.get("http://localhost:7070/activity/get").then((response) => {
      setActivity(response.data);
    });
  };
  const getActivityTypes = async () => {
    await axios
      .get("http://localhost:7070/activityType/get-by-row-status")
      .then((response) => {
        setActivityType(response.data);
      });
  };
  const chartHandler = async () => {
    try {
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
            label: "Line Chart",
            backgroundColor: colors,
          },
        ],
        labels: tempArrForTypes,
      });
    } catch (error) {}
  };
  useEffect(() => {
    getActivity();
    getActivityTypes();
    chartHandler();
  }, [activities.toString()]);
  const colors = [
    generateRandomColor(),
    generateRandomColor(),
    generateRandomColor(),
    generateRandomColor(),
    generateRandomColor(),
  ];

  return (
    <div>
      <Navbar />
      <div className="container main mt-5">
        <div className="row">
          <div className="col-8 mt-5">
            <CustomCard>
              <LineChart
                activities={activities}
                activityTypes={activityTypes}
                colors={colors}
                chartData={chartData}
              />
            </CustomCard>
            <CustomCard>
              <Table activities={activities} />
            </CustomCard>
          </div>
          <div className="col-4 mt-5">
            <CustomCard>
              <DoughnutChart
                activities={activities}
                activityTypes={activityTypes}
                colors={colors}
                chartData={chartData}
              />
            </CustomCard>
            <CustomCard>
              <PieChart
                activities={activities}
                activityTypes={activityTypes}
                colors={colors}
                chartData={chartData}
              />
            </CustomCard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
