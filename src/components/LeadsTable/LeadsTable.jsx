import React from "react";
import "./LeadsTable.css";
import { IoIosSearch } from "react-icons/io";
import { CiCalendarDate } from "react-icons/ci";
import { MdOutlineUpload } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { IoFilterOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";







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
    status: "Prospect",
    submittedBy: "Father",
    createdBy: "Offline",
    createdAt: "5 APR, 2023 10:10AM",
  },
  {
    studentName: "Aman Verma",
    class: "10th",
    phoneNumber: "+91 876758XXXX",
    status: "Qualified",
    submittedBy: "Mother",
    createdBy: "Online",
    createdAt: "6 APR, 2023 2:15PM",
  },
  {
    studentName: "Sanya Yadav",
    class: "8th",
    phoneNumber: "+91 876759XXXX",
    status: "Prospect",
    submittedBy: "Father",
    createdBy: "Offline",
    createdAt: "7 APR, 2023 5:00PM",
  },
  {
    studentName: "Vikram Singh",
    class: "12th",
    phoneNumber: "+91 876760XXXX",
    status: "Qualified",
    submittedBy: "Mother",
    createdBy: "Online",
    createdAt: "8 APR, 2023 9:45AM",
  },
  {
    studentName: "Ria Patel",
    class: "6th",
    phoneNumber: "+91 876761XXXX",
    status: "Prospect",
    submittedBy: "Father",
    createdBy: "Offline",
    createdAt: "9 APR, 2023 12:00PM",
  },
  {
    studentName: "Ishaan Kapoor",
    class: "11th",
    phoneNumber: "+91 876762XXXX",
    status: "Qualified",
    submittedBy: "Mother",
    createdBy: "Online",
    createdAt: "10 APR, 2023 1:20PM",
  },
  {
    studentName: "Neha Agarwal",
    class: "10th",
    phoneNumber: "+91 876763XXXX",
    status: "Prospect",
    submittedBy: "Father",
    createdBy: "Offline",
    createdAt: "11 APR, 2023 3:40PM",
  },
  {
    studentName: "Tarun Mehta",
    class: "8th",
    phoneNumber: "+91 876764XXXX",
    status: "Qualified",
    submittedBy: "Mother",
    createdBy: "Online",
    createdAt: "12 APR, 2023 11:30AM",
  },
];


function LeadsTable() {
  return (
    <>
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
          <div className="search-box">
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
            {leadsData.map((lead, index) => (
              <tr key={index}>
                <td>{lead.studentName}</td>
                <td>{lead.class}</td>
                <td>{lead.phoneNumber}</td>
                <td className={`status ${lead.status.toLowerCase().replace(" ", "-")}`}>
                  {lead.status}
                </td>
                <td>{lead.submittedBy}</td>
                <td>{lead.createdBy}</td>
                <td>
                  <button className="eye-button"><IoEyeOutline size={25} /></button>
                </td>
                <td className="last">{lead.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="table-bottom">
          <div>
            hello
          </div>
          <div>
            bolo
          </div>
        </div>
    </div>
    </>
   
  );
}

export default LeadsTable;
