import React,{useState} from "react";
import "./LeadsTable.css";
import { IoIosSearch } from "react-icons/io";
import { CiCalendarDate } from "react-icons/ci";
import { MdOutlineUpload } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { IoFilterOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import ClipLoader from 'react-spinners/ClipLoader';


import Pagination from "../Pagination/Pagination";



const leadsData = [
  {
    studentName: "Rahul Kumar",
    class: "5th",
    phoneNumber: "+91 876756XXXX",
    status: "Prospect",
    submittedBy: "Father",
    createdBy: "Offline",
    createdAt: "4 APR, 2023 4:35PM",
  },
  {
    studentName: "Ayush Gupta",
    class: "9th",
    phoneNumber: "+91 876756XXXX",
    status: "Qualified",
    submittedBy: "Mother",
    createdBy: "Online",
    createdAt: "4 APR, 2023 4:35PM",
  },
  {
    studentName: "Priya Sharma",
    class: "7th",
    phoneNumber: "+91 876757XXXX",
    status: "Not Qualified",
    submittedBy: "Father",
    createdBy: "Offline",
    createdAt: "5 APR, 2023 10:10AM",
  },
  {
    studentName: "Aman Verma",
    class: "10th",
    phoneNumber: "+91 876758XXXX",
    status: "Follow-up",
    submittedBy: "Mother",
    createdBy: "Online",
    createdAt: "6 APR, 2023 2:15PM",
  },
  {
    studentName: "Sanya Yadav",
    class: "8th",
    phoneNumber: "+91 876759XXXX",
    status: "Trial Booked",
    submittedBy: "Father",
    createdBy: "Offline",
    createdAt: "7 APR, 2023 5:00PM",
  },
  {
    studentName: "Vikram Singh",
    class: "12th",
    phoneNumber: "+91 876760XXXX",
    status: "Trial Completed",
    submittedBy: "Mother",
    createdBy: "Online",
    createdAt: "8 APR, 2023 9:45AM",
  },
  {
    studentName: "Ria Patel",
    class: "6th",
    phoneNumber: "+91 876761XXXX",
    status: "Payment Created",
    submittedBy: "Father",
    createdBy: "Offline",
    createdAt: "9 APR, 2023 12:00PM",
  },
  {
    studentName: "Ishaan Kapoor",
    class: "11th",
    phoneNumber: "+91 876762XXXX",
    status: "Enrolled",
    submittedBy: "Mother",
    createdBy: "Online",
    createdAt: "10 APR, 2023 1:20PM",
  },
  {
    studentName: "Neha Agarwal",
    class: "10th",
    phoneNumber: "+91 876763XXXX",
    status: "Trial Follow-up",
    submittedBy: "Father",
    createdBy: "Offline",
    createdAt: "11 APR, 2023 3:40PM",
  },
  {
    studentName: "Tarun Mehta",
    class: "8th",
    phoneNumber: "+91 876764XXXX",
    status: "Not Enrolled",
    submittedBy: "Mother",
    createdBy: "Online",
    createdAt: "12 APR, 2023 11:30AM",
  },
];


// function LeadsTable({tableData}) {
function LeadsTable({tableData,loading,error}) {

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  console.log("data in l",tableData);

  const rows = (tableData || []);

    
    const indexOfLastProduct = currentPage * rowsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - rowsPerPage;
    const currentRows =rows.slice(indexOfFirstProduct, indexOfLastProduct);
    
    const totalPages = Math.ceil(rows.length / rowsPerPage);

    const handleRowsPerPageChange = (newRowsPerPage) => {
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(1); // Reset to the first page
  };

    const handlePageChange = (page) => {
      setCurrentPage(page);
    };
  return (
    <>
      <div className="btn-group">
        <button className="leads-btn today-leads">Today Leads <span>13</span></button>
        <button className="leads-btn yes-leads">Yesterday Leads <span>15</span></button>
      </div>
      <div className="table-header">
        <div>
          <p className="leads">Leads<span>(All)</span></p>
        </div>
        <div className="filters">
          <div className="search-box">
            <IoIosSearch />
            <input type="text" placeholder="Search" />
          </div>
          <div className="search-box">
          <CiCalendarDate />
          <button>Date Range</button></div>
          <div className="search-box">
            <IoFilterOutline />

          <button>Filters</button></div>
          <div className="search-box upload-order">
            <MdOutlineUpload />
            <button>Upload Orders</button>
          </div>
          <div className="search-box add-color">
            <FaPlus />
            <button>Create Lead</button>
          </div>
          
        </div>
      </div> 
      <div className="leads-table">            
        <table>
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Class</th>
              <th>Phone Number</th>
              <th>Status</th>
              <th>Submitted By</th>
              <th>Created By</th>
              <th>Details</th>
              <th>Created</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
      <tr>
        <td colSpan="8" style={{ textAlign: 'center' }}>
          <ClipLoader color="#36d7b7" loading={true} size={30} />
        </td>
      </tr>
    ):currentRows.map((lead, index) => (
              <tr key={index}>
                <td>{(lead.studentName || '')}</td>
                <td>{(lead.standard || '')}</td>
                <td>{(lead.mobile  || '')}</td>
                <td className={`status ${lead.status.toLowerCase().replace(" ", "-")}`}>
                  <span>{(lead.status  || '')}</span>
                </td>
                <td>{(lead.submittedBy  || '')}</td>
                <td>{(lead.createdBy  || '')}</td>
                <td>
                  <button className="eye-button"><IoEyeOutline size={25} /></button>
                </td>
                <td className="last">{(lead.createdAt  || '')}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} rowsPerPage={rowsPerPage} onRowsPerPageChange={handleRowsPerPageChange}/>
    </div>
    </>
   
  );
}

export default LeadsTable;
