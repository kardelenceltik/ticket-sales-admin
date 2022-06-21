import React from "react";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = ({ chartData }) => {
  return (
    <div>
      <Doughnut data={chartData} />
    </div>
  );
};
export default DoughnutChart;
