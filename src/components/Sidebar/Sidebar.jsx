import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>IntelliClick</h2>
      <ul>
        <li>Home</li>
        <li>Leads Management</li>
        <li>Attendance</li>
        <li>Stores</li>
        <li>Providers</li>
        <li>Developers</li>
        <li>Workflows</li>
      </ul>
    </div>
  );
}

export default Sidebar;
