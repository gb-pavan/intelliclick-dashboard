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


function LeadsTable() {


  const [tableData,setTableData] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedLead, setSelectedLead] = useState(null);
  const [isLoading,setIsLoading] = useState(false);

  const endpoint = `api/lead-app/lead/read/get-all?pageNum=${currentPage}&pageSize=${rowsPerPage}`;
  const { data, loading, error } = useFetchData(endpoint);

  // const indexOfLastProduct = currentPage * rowsPerPage;
  // const indexOfFirstProduct = indexOfLastProduct - rowsPerPage;
  // const totalPages = Math.ceil((tableRows || []).length / rowsPerPage);

  useEffect(() => {
    if (error) {
      console.error("Error fetching data:", error);
    } else {
      setTimeout(()=>{
        setIsLoading(false);
      },3000);
      console.log(" raw data ",data);
      
      setTableData(data);
    }
  }, [data, error,currentPage,rowsPerPage]); 

  const tableRows = tableData?.data;
  const totalLeads = tableData?.totalCount;
  const totalPages = Math.ceil(totalLeads / rowsPerPage);

  


  const openModal = (lead) => {
    setSelectedLead(lead); // Store the selected lead
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedLead(null); // Clear the selected lead
    setModalOpen(false);
  };    
    

  const handleRowsPerPageChange = (newRowsPerPage) => {
    setIsLoading(true);
    setTableData({});
    setRowsPerPage(newRowsPerPage);
    setCurrentPage(1); // Reset to the first page
  };

  const handlePageChange = (page) => {
    console.log("clicked");
    setIsLoading(true);
    setTableData({});
    setCurrentPage(page);
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
    
    return (tableRows || []).map((lead, index) => (
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
          <button className="eye-button" onClick={() => openModal(lead)}>
            <IoEyeOutline size={25} />
          </button>
          {isModalOpen && selectedLead && (
            <Modal isOpen={isModalOpen} closeModal={closeModal}>
              <h1>Lead Details</h1>
              <p>Student Name: {selectedLead.studentName || ''}</p>
              <p>Class: {selectedLead?.class[0]?.name.split(" ")[1] || ''}</p>
              <p>Phone Number: {selectedLead.mobile || ''}</p>
              <p>Status: {selectedLead.status || ''}</p>
              <p>Submitted By: {selectedLead.interactedWith || ''}</p>
              <p>Created By: {selectedLead.createdBy || ''}</p>
              <p>Created At: {(selectedLead.createdAt && formatToLocalTime(selectedLead.createdAt)) || ''}</p>
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
        <div className="search-box">
          <IoIosSearch />
          <input type="text" placeholder="Search" />
        </div>
        <div className="search-box">
          <CiCalendarDate />
          <button>Date Range</button>
        </div>
        <div className="search-box">
          <IoFilterOutline />
          <button>Filters</button>
        </div>
        <div className="search-box upload-order">
          <MdOutlineUpload />
          <button>Upload Orders</button>
        </div>
        <div className="search-box add-color">
          <FaPlus />
          <button>Create Lead</button>
        </div>
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
              <th>Submitted By</th>
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
