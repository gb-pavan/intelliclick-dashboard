import React, { useState } from "react";
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
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      className={`sidebar ${isHovered ? "expanded" : "compressed"}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="logo-sidebar">
        <img src={`${isHovered ? "./logo.svg" : "./icon.svg"}`} alt="logo" />
      </div>
      <ul>
        <li>
          <div className="list-item list-item-color">
            <RxDashboard size={30} className="icon-spacing" />
            {isHovered && <span>Home</span>}
          </div>
        </li>
        <li>
          <div className="list-item">
            <TbClipboardText size={30} className="icon-spacing" />
            {isHovered && <span>Leads Management</span>}
          </div>
        </li>
        <li>
          <div className="list-item">
            <BiPieChartAlt2 size={30} className="icon-spacing" />
            {isHovered && <span>Attendance</span>}
          </div>
        </li>
        <li>
          <div className="list-item">
            <TbBriefcase size={30} className="icon-spacing" />
            {isHovered && <span>Stores</span>}
          </div>
        </li>
        <li>
          <div className="list-item">
            <BsHeadset size={30} className="icon-spacing" />
            {isHovered && <span>Providers</span>}
          </div>
        </li>
        <li>
          <div className="list-item">
            <RiSettings2Line size={30} className="icon-spacing" />
            {isHovered && <span>Developers</span>}
          </div>
        </li>
        <li>
          <div className="list-item">
            <RxShuffle size={30} className="icon-spacing" />
            {isHovered && <span>Workflows</span>}
            <FaChevronDown className="icon-left-spacing" />
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

