import Chart from "./components/Chart";
import React, { useState } from "react";
import DataInput from "./components/DataInput";
import Filter from "./components/Filter";
import "./App.css";
import Header from "./components/Header";

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const addDataPoint = (newDataPoint) => {
    setData([...data, newDataPoint]);
    setFilteredData([...data, newDataPoint]);
  };
  const filterData = (minutes) => {
    const currentTime = Date.now();
    const filtered = data.filter(
      (point) => currentTime - point.timeStamp <= minutes * 60 * 1000
    );
    setFilteredData(filtered);
  };

  return (
    <div>
      <Header />
      <div className="app">
        <h1>Price Analysis</h1>
        <div className="app_box">
          <DataInput addDataPoint={addDataPoint} />
          <Filter filterData={filterData} />
        </div>
        <Chart data={filteredData} />
      </div>
    </div>
  );
}

export default App;
