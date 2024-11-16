import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import LeadsTable from "./components/LeadsTable/LeadsTable";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header />
        <LeadsTable />
      </div>
    </div>
  );
}

export default App;

