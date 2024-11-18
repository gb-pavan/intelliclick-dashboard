// import React,{useState} from "react";
// import Sidebar from "./components/Sidebar/Sidebar";
// import Header from "./components/Header/Header";
// import LeadsTable from "./components/LeadsTable/LeadsTable";
// import "./App.css";
// import { FaToggleOff } from "react-icons/fa6";
// import { IoMenu } from "react-icons/io5";
// import useFetchData from './hooks/useFetchData';


// function App() {

//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const { data, loading, error } = useFetchData('/api/lead-app/lead/read/get-all');

//   console.log("data",data);

//   // if (loading) return ;
//   // if (error) return <div>Error: {error}</div>;

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div>
//       <div className="app">
//         <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
//         <div className="main-content">
//           <div className="incentive-box">
//             <div className="logo-content">
//               <div className="mobile-view">
//                 <div className="mobile-icons">
//                   <img src="./icon2.svg" alt="logo" />
//                   <IoMenu size={30} onClick={toggleSidebar} style={{ cursor: 'pointer' }} />
//                 </div>
//               </div>
//               <p>Incentive</p>
//               <FaToggleOff color='blue' size={25}/>
//             </div>
//             <div>
//               <img src='./Ellipse.svg' alt="profile-image" className="profile-img" />
//             </div>
//           </div>
//           <Header />
//           {/* <LeadsTable tableData={data} /> */}
//           <LeadsTable tableData={data} loading={loading} error={error} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import Dashboard from './pages/Dashboard/Dashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;


