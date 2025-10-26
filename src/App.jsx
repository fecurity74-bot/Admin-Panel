import React from "react";

function Sidebar({ setPage, activePage }) {
  const menu = [
    { key: "dashboard", label: "Dashboard" },
    { key: "users", label: "Users" },
    { key: "sales", label: "Sales" },
    { key: "orders", label: "Orders" }
  ];

  return (
    <div className="sidebar">
      <h1>Minecraft Admin</h1>
      {menu.map(item => (
        <button
          key={item.key}
          onClick={() => setPage(item.key)}
          className={activePage === item.key ? "active" : ""}
        >
          {item.label}
        </button>
      ))}
      <button className="logout" onClick={() => alert("Logging out!")}>Logout</button>
    </div>
  );
}

export default Sidebar;
