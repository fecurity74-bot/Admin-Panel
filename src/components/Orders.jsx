import React from "react";

function Orders() {
  const orders = [
    { id: 1, user: "Steve", product: "Skin Pack", status: "Completed" },
    { id: 2, user: "Alex", product: "Server Slot", status: "Pending" },
  ];

  return (
    <div className="orders-page">
      <h3>Orders</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th><th>User</th><th>Product</th><th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(o => (
            <tr key={o.id}>
              <td>{o.id}</td>
              <td>{o.user}</td>
              <td>{o.product}</td>
              <td>{o.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Orders;
