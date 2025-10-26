import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function ChartCard({ title, data }) {
  const chartData = {
    labels: data.map((_, i) => `Day ${i+1}`),
    datasets: [{
      label: title,
      data,
      borderColor: 'rgba(52,152,219,1)',
      backgroundColor: 'rgba(52,152,219,0.2)',
      tension: 0.3,
    }],
  };
  const options = { responsive: true, plugins: { legend: { display: false } } };

  return (
    <div className="chart-card">
      <h3>{title}</h3>
      <Line data={chartData} options={options} />
    </div>
  );
}

export default ChartCard;
