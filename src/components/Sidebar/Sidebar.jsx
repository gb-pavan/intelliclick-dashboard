import React from "react";
import "./Sidebar.css";
import { RiSettings2Line } from "react-icons/ri";
import { TbBriefcase } from "react-icons/tb";
import { BsHeadset } from "react-icons/bs";
import { RxShuffle } from "react-icons/rx";
import { RxDashboard } from "react-icons/rx";
import { TbClipboardText } from "react-icons/tb";
import { BiPieChartAlt2 } from "react-icons/bi";
import { FaChevronDown } from "react-icons/fa";


function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <div className="list-item list-item-color">
            <RxDashboard size={30}  className="icon-spacing"/>
            Home
          </div>
        </li>
        <li>
          <div className="list-item">
            {/* <img src='./Clipboard-alt.svg' /> */}
            <TbClipboardText size={30}  className="icon-spacing"/>
            Leads Management
          </div>
        </li>
        <li>
          <div className="list-item">
            <BiPieChartAlt2 size={30}  className="icon-spacing"/>
            Attendance
          </div>
        </li>
        <li>
          <div className="list-item">
            <TbBriefcase size={30}  className="icon-spacing"/>
            Stores
          </div>
        </li>
        <li>
          <div className="list-item">
            <BsHeadset size={30}  className="icon-spacing"/>
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
            <RxShuffle size={30}  className="icon-spacing"/>
            Workflows
            <FaChevronDown className="icon-left-spacing"/>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
