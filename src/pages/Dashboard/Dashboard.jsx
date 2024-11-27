import React,{useState} from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Header from "../../components/Header/Header";
import LeadsTable from "../../components/LeadsTable/LeadsTable";
import "./Dashboard.css";
import { FaToggleOff } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import YourProfile from "../../components/YourProfile/YourProfile";


function Dashboard() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isProfileOpen,setProfileOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="dashboard-container">
      <ProfileHeader isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} setProfileOpen={setProfileOpen} />
      <div className="app">
        <div className="side-bar-component">
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </div>
        
        <div className="main-content">
          {!isProfileOpen? 
          <div>
            <Header />
            <LeadsTable />
          </div>  : <YourProfile />
          
          }
          
        </div>
      </div>
    </div>
  );
}

export default Dashboard;