import React from "react";

function Sidebar({ setPage }) {
  return (
    <div className="sidebar">
      <h1>Minecraft Admin</h1>
      <button onClick={() => setPage("dashboard")}>Dashboard</button>
      <button onClick={() => setPage("users")}>Users</button>
      <button onClick={() => setPage("sales")}>Sales</button>
      <button onClick={() => setPage("orders")}>Orders</button>
      <button onClick={() => alert("Profile page!")}>Profile</button>
      <button className="logout" onClick={() => alert("Logging out!")}>Logout</button>
    </div>
  );
}

export default Sidebar;
