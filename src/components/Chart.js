import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as chartjs,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
} from "chart.js";

chartjs.register(LineElement, CategoryScale, LinearScale, PointElement, Legend);

const Chart = ({ data }) => {
  const chartData = {
    labels: data.map((point) => point.timeStamp),
    datasets: [
      {
        label: "Price Analysis",
        data: data.map((point) => point.price),
        backgroundColor: "rgba(255, 26, 33, 0.6)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  useEffect(() => {}, [data]);
  return (
    <div className="line_chart">
      <Line data={chartData} options={{ responsive: true }} />
    </div>
  );
};
export default Chart;
