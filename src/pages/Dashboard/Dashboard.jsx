import React,{useState} from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import LeadsTable from "../../components/LeadsTable/LeadsTable";
import "./Dashboard.css";
import { FaToggleOff } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";


function Dashboard() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <ProfileHeader isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
      <div className="app">
        <div className="side-bar-component">
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </div>
        
        <div className="main-content">
          {/* <div className="incentive-box">
            <div className="logo-content">
              <div className="mobile-view">
                <div className="mobile-icons">
                  <img src="./icon2.svg" alt="logo" />
                  <IoMenu size={30} onClick={toggleSidebar} style={{ cursor: 'pointer' }} />
                </div>
              </div>
              <p>Incentive</p>
              <FaToggleOff color='blue' size={25}/>
            </div>
            <div>
              <img src='./Ellipse.svg' alt="profile-image" className="profile-img" />
            </div>
          </div> */}
          <Header />
          <LeadsTable />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;