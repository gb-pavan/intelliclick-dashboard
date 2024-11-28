import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-content">
        <h1>Welcome, Shubham Kumar</h1>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua."
        </p>
      </div>
      {/* <div className="header-actions">
        <p>Home</p>
        <div className="headers-info">
          <div>
            <p>1.2k</p>
            <p>Leads</p>
          </div>
          <div>
            <p>200</p>
            <p>Action Required</p>
          </div>
          <div>
            <p>678</p>
            <p>Active</p>
          </div>
        </div>
        
      </div> */}
    </div>
  );
}

export default Header;
