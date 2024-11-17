import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import LeadsTable from "./components/LeadsTable/LeadsTable";
import "./App.css";
import { FaToggleOff } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";


function App() {
  return (
    <div>
      {/* <div className="logo">
        <div className="logo-sidebar">
          <img src="./logo.svg" alt = 'logo' />
        </div>
        <div className="incentive-box">
          <div className="logo-content">
            <p>Incentive</p>
            <FaToggleOff color='blue' size={25}/>
          </div>
          <div>
            <img src='./Ellipse.svg' alt="profile-image" className="profile-img" />
          </div>
        </div>
        
      </div> */}
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <div className="incentive-box">
            <div className="logo-content">
              <div className="mobile-view">
                <div className="mobile-icons">
                  <img src="./icon2.svg" alt="logo" />
                  <IoMenu size={30} />
                </div>
              </div>
              <p>Incentive</p>
              <FaToggleOff color='blue' size={25}/>
            </div>
            <div>
              <img src='./Ellipse.svg' alt="profile-image" className="profile-img" />
            </div>
          </div>
          <Header />
          <LeadsTable />
        </div>
      </div>
    </div>
  );
}

export default App;

