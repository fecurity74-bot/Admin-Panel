import React from "react";

function Header() {
  return (
    <div className="header">
      <h2>Admin Panel</h2>
      <button className="profile-btn" onClick={() => alert("Profile clicked!")}>Profile</button>
    </div>
  );
}

export default Header;
