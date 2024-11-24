import React,{useEffect, useState} from "react";
import "./LeadsTable.css";
import { IoIosSearch } from "react-icons/io";
import { CiCalendarDate } from "react-icons/ci";
import { MdOutlineUpload } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { IoFilterOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import ClipLoader from 'react-spinners/ClipLoader';
import Modal from "../Modal/Modal";
import {formatToLocalTime} from "../../utils/dateUtils"
import Pagination from "../Pagination/Pagination";
import useFetchData from '../../hooks/useFetchData';
import StudentForm from "../StudentForm/StudentForm"
import StatusFilter from "../StatusFilter/StatusFilter";
import DateFilter from "../DateFilter/DateFilter";


function LeadsTable() {

  const statuses = [
    { label: "Prospect", color: "blue" },
    { label: "Qualified", color: "orange" },
    { label: "Not Qualified", color: "green" },
    { label: "Follow-up", color: "red" },
    { label: "Trial Booked", color: "blue" },
    { label: "Trial Completed", color: "orange" },
    { label: "Payment Created", color: "green" },
    { label: "Enrolled", color: "red" },
    { label: "Trial Follow-up", color: "blue" },
    { label: "Not Enrolled", color: "orange" },
  ];

  const timeRanges = [
    "All",
    "Today",
    "This Week",
    "This Month",
    "Last Week",
    "Last Month",
  ];


  const [tableData,setTableData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedLead, setSelectedLead] = useState(null);
  const [isLoading,setIsLoading] = useState(false);
  const [isCreateLead,setCreateLead] = useState(false);
  const [filteredRows, setFilteredRows] = useState([]);

  const endpoint = `api/lead-app/lead/read/get-all?pageNum=${currentPage}&pageSize=${rowsPerPage}`;
  const { data, loading, error } = useFetchData(endpoint);

  useEffect(() => {
    if (error) {
      console.error("Error fetching data:", error);
    } else {
      setTimeout(()=>{
        setIsLoading(false);
      },3000);
      setTableData(data);
      setFilteredRows(data?.data);
    }
  }, [data, error,currentPage,rowsPerPage]); 

  const tableRows = tableData?.data;
  const totalLeads = tableData?.totalCount;
  const totalPages = Math.ceil(totalLeads / rowsPerPage);

  const handleCreateLead = () => {
    setModalOpen(true);
    setCreateLead(true);
  }

  const openModal = (lead) => {
    setSelectedLead(lead); // Store the selected lead
    setModalOpen(true);
  };
  
  const closeModal = () => {
    setSelectedLead(null); 
    setModalOpen(false);
    setCreateLead(false);
  };

  const handleRowsPerPageChange = (newRowsPerPage) => {
    setIsLoading(true);
    setTableData({});
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(1); // Reset to the first page
  };

  const handlePageChange = (page) => {
    setIsLoading(true);
    setTableData({});
    setCurrentPage(page);
  };

  const handleStatusChange = (selected) => {
      const filtered = tableRows?.filter((row) => selected.some((status) => status.toLowerCase() === row.status.toLowerCase()));

      if (filtered.length === 0){
        setFilteredRows(tableRows)
      }
      else{
        setFilteredRows(filtered);
      }
    
  };

  const handleTimeRangeChange = (selectedOption) => {
    const today = new Date();
    let filteredData = [];

    switch (selectedOption) {
      case "Today":
        filteredData = tableRows.filter(
          (row) =>
            new Date(row.createdAt).toDateString() === today.toDateString()
        );
        break;
      case "This Week":
        const startOfWeek = new Date(today);
        startOfWeek.setDate(today.getDate() - today.getDay()); // Start of the week (Sunday)
        filteredData = tableRows.filter(
          (row) =>
            new Date(row.createdAt) >= startOfWeek && new Date(row.createdAt) <= today
        );
        break;
      case "This Month":
        const startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
        filteredData = tableRows.filter(
          (row) =>
            new Date(row.createdAt) >= startOfMonth && new Date(row.createdAt) <= today
        );
        break;
      case "Last Week":
        const endOfLastWeek = new Date(today);
        endOfLastWeek.setDate(today.getDate() - today.getDay() - 1); // Last Saturday
        const startOfLastWeek = new Date(endOfLastWeek);
        startOfLastWeek.setDate(endOfLastWeek.getDate() - 6); // Last Sunday
        filteredData = tableRows.filter(
          (row) =>
            new Date(row.createdAt) >= startOfLastWeek &&
            new Date(row.createdAt) <= endOfLastWeek
        );
        break;
      case "Last Month":
        const startOfLastMonth = new Date(
          today.getFullYear(),
          today.getMonth() - 1,
          1
        );
        const endOfLastMonth = new Date(
          today.getFullYear(),
          today.getMonth(),
          0
        );
        filteredData = tableRows.filter(
          (row) =>
            new Date(row.createdAt) >= startOfLastMonth &&
            new Date(row.createdAt) <= endOfLastMonth
        );
        break;
      default:
        filteredData = tableRows;
    }

    setFilteredRows(filteredData);
  };

  const renderTableRows = () => {
    if (loading || isLoading) {
      return (
        <tr>
          <td colSpan="8" style={{ textAlign: 'center' }}>
            <ClipLoader color="#36d7b7" loading={true} size={30} />
          </td>
        </tr>
      );
    }

    
    return filteredRows?.map((lead, index) => (
      <tr key={index}>
        <td>{lead.studentName || ''}</td>
        <td>{lead?.class[0]?.name.split(" ")[1] || ''}</td>
        <td>{lead.mobile || ''}</td>
        <td className={`status ${lead.status.toLowerCase().replace(" ", "-")}`}>
          <span>{lead.status || ''}</span>
        </td>
        <td>{lead.interactedWith || ''}</td>
        <td>{lead.createdBy || ''}</td>
        <td>
          {/* <button className="eye-button" onClick={() => openModal(lead)}>
            <IoEyeOutline size={25} />
          </button> */}
          <div
            className="eye-button"
            role="button"
            tabIndex={0}
            onClick={() => openModal(lead)}
          >
            <IoEyeOutline size={25} />
          </div>          
          {isModalOpen && (
            <Modal isOpen={isModalOpen} closeModal={closeModal}>
              {isCreateLead ? (
                <StudentForm />
              ) : (
                <>
                  <h1>Lead Details</h1>
                  <p>Student Name: {selectedLead?.studentName || ''}</p>
                  <p>Class: {selectedLead?.class[0]?.name.split(" ")[1] || ''}</p>
                  <p>Phone Number: {selectedLead?.mobile || ''}</p>
                  <p>Status: {selectedLead?.status || ''}</p>
                  <p>Interacted With: {selectedLead?.interactedWith || ''}</p>
                  <p>Created By: {selectedLead?.createdBy || ''}</p>
                  <p>Created At: {(selectedLead?.createdAt && formatToLocalTime(selectedLead.createdAt)) || ''}</p>
                </>
              )}
            </Modal>
          )}
        </td>
        <td className="last">
          {(lead.createdAt && formatToLocalTime(lead.createdAt)) || ''}
        </td>
      </tr>
    ));
  };

  const renderFilters = () => {
    return (
      <div className="filters">
        <div className="input-box">
          <IoIosSearch size={20} />
          <input type="text" placeholder="Search" />
        </div>
        <div>
          <DateFilter options={timeRanges} onSelectionChange={handleTimeRangeChange} />
        </div>        
        <div className="status-dropdown-container">
          <StatusFilter statuses={statuses} onSelectionChange={handleStatusChange}/>
        </div>
        <button className="search-box add-color" onClick={handleCreateLead}>
          <FaPlus size={14} />
          Create Lead
          {isModalOpen && isCreateLead && (
            <Modal isOpen={isModalOpen && isCreateLead} closeModal={closeModal}>
              <StudentForm />
            </Modal>
          )}
        </button>
      </div>
    );
  };

  const renderHeader = () => {
    return (
      <div className="table-header">
        <div>
          <p className="leads">Leads<span>(All)</span></p>
        </div>
        {renderFilters()}
      </div>
    );
  };

  const renderButtons = () => {
    return (
      <div className="btn-group">
        <button className="leads-btn today-leads">Today Leads <span>13</span></button>
        <button className="leads-btn yes-leads">Yesterday Leads <span>15</span></button>
      </div>
    );
  };

  return (
    <>
      {renderButtons()}
      {renderHeader()}
      <div className="leads-table">
        <table>
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Class</th>
              <th>Phone Number</th>
              <th>Status</th>
              <th>Interacted With</th>
              <th>Created By</th>
              <th>Details</th>
              <th>Created At</th>
            </tr>
          </thead>
          <tbody>
            {renderTableRows()}
          </tbody>
        </table>
        <Pagination 
          currentPage={currentPage}
          totalPages={totalPages} 
          onPageChange={handlePageChange} 
          rowsPerPage={rowsPerPage} 
          onRowsPerPageChange={handleRowsPerPageChange} 
        />
      </div>
    </>
  );
}

export default LeadsTable;
