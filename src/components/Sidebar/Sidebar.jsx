import React from "react";
import "./Sidebar.css";
import { RiSettings2Line } from "react-icons/ri";


function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <div className="list-item">
            <RiSettings2Line size={30}  className="icon-spacing"/>
            Home
          </div>
        </li>
        <li>
          <div className="list-item">
            <RiSettings2Line size={30}  className="icon-spacing"/>
            Leads Management
          </div>
        </li>
        <li>
          <div className="list-item">
            <RiSettings2Line size={30}  className="icon-spacing"/>
            Attendance
          </div>
        </li>
        <li>
          <div className="list-item">
            <RiSettings2Line size={30}  className="icon-spacing"/>
            Stores
          </div>
        </li>
        <li>
          <div className="list-item">
            <RiSettings2Line size={30}  className="icon-spacing"/>
            Providers
          </div>
        </li>
        <li>
          <div className="list-item">
            <RiSettings2Line size={30}  className="icon-spacing"/>
            Developers
          </div>
        </li>
        
        <li>
          <div className="list-item">
            <RiSettings2Line size={30}  className="icon-spacing"/>
            Workflows
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
