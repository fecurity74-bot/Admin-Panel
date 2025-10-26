import React from "react";
import ChartCard from "./ChartCard";

function Sales() {
  const sales = [
    { id: 1, product: "Test", amount: "$15", buyer: "Test" },
    { id: 2, product: "Test", amount: "$50", buyer: "Test" },
  ];

  return (
    <div className="sales-page">
      <h3>Sales</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th><th>Product</th><th>Amount</th><th>Buyer</th>
          </tr>
        </thead>
        <tbody>
          {sales.map(s => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.product}</td>
              <td>{s.amount}</td>
              <td>{s.buyer}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <ChartCard title="Sales Trend" data={[200,400,350,500,450,600]} />
    </div>
  );
}

export default Sales;
