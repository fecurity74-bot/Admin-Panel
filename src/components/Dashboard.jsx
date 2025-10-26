import React from "react";
import ChartCard from "./ChartCard";

function Dashboard() {
  const stats = [
    { title: "Active Users", value: 320 },
    { title: "Servers Online", value: 15 },
    { title: "Skins Sold", value: 120 },
    { title: "Transactions", value: "$4,200" },
  ];

  return (
    <div className="dashboard">
      {stats.map((item, idx) => (
        <div key={idx} className="card">
          <h3>{item.title}</h3>
          <p>{item.value}</p>
        </div>
      ))}
      <ChartCard title="User Growth" data={[50,80,120,180,250,320]} />
      <ChartCard title="Sales Trend" data={[300,450,380,600,500,700]} />
    </div>
  );
}

export default Dashboard;
