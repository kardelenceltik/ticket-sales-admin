import "./App.css";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import React from "react";

import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container main mt-5">
        <div className="row">
          <PieChart />
          <LineChart />
        </div>

        <Table />
      </div>
    </div>
  );
}

export default App;
