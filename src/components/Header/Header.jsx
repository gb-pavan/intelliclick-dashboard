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
      <div className="header-actions">
        <div>
          <p>1.2k Leads</p>
          <p>200 Action Required</p>
          <p>678 Active</p>
        </div>
        <button>+ Create Lead</button>
      </div>
    </div>
  );
}

export default Header;
