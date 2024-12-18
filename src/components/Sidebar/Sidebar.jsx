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
import { IoClose } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai"; // Profile Icon
import { FiLogOut } from "react-icons/fi";     // Sign Out Icon


function Sidebar({ isOpen, toggleSidebar,setProfileOpen }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <div
      className={`sidebar ${isHovered ? "expanded" : "compressed"} ${isOpen ? "open" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* <div className="logo-sidebar">
        {isOpen && <IoClose size={30} onClick={toggleSidebar}/>}
      </div> */}
      {isOpen &&   <div className="open-close-c-logo">        
        <img src="./logo.svg" alt="logo" />
        <IoClose size={30} onClick={toggleSidebar} className="close-icon" />               
      </div>}  
      
      <ul>
        <li>
          <div className="list-item list-item-color">
            <RxDashboard size={30} className="icon-spacing" />
            {(isHovered || isOpen) && <span>Home</span>}
          </div>
        </li>
        <li>
          <div className="list-item">
            <TbClipboardText size={30} className="icon-spacing" />
            {(isHovered || isOpen) && <span>Leads Management</span>}
          </div>
        </li>
        <li>
          <div className="list-item">
            <BiPieChartAlt2 size={30} className="icon-spacing" />
            {(isHovered || isOpen) && <span>Attendance</span>}
          </div>
        </li>
        <li>
          <div className="list-item">
            <TbBriefcase size={30} className="icon-spacing" />
            {(isHovered || isOpen) && <span>Stores</span>}
          </div>
        </li>
        <li>
          <div className="list-item">
            <BsHeadset size={30} className="icon-spacing" />
            {(isHovered || isOpen) && <span>Providers</span>}
          </div>
        </li>
        <li>
          <div className="list-item">
            <RiSettings2Line size={30} className="icon-spacing" />
            {(isHovered || isOpen) && <span>Developers</span>}
          </div>
        </li>
        <li>
          <div className="list-item">
            <RxShuffle size={30} className="icon-spacing" />
            {(isHovered || isOpen) && <span>Workflows</span>}
            <FaChevronDown className="icon-left-spacing" />
          </div>
        </li>
      </ul>

      <ul>
        <li>
          <div className="list-item list-item-color" onClick={() => setProfileOpen((prev) => !prev)}>
            <AiOutlineUser size={30} className="icon-spacing" />
            {(isHovered || isOpen) && <span>Profile</span>}
          </div>
        </li>
        <li>
          <div className="list-item">
            <FiLogOut size={30} className="icon-spacing" />
            {(isHovered || isOpen) && <span>Sign Out</span>}
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

