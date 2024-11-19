import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Pagination.css";

function Pagination({ currentPage,totalPages, onPageChange, rowsPerPage, onRowsPerPageChange }) {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
  const rowsOptions = [1, 2, 5, 10]; // Available rows per page options

  const renderRowsPerPage = () => {
    return (
      <div className="leads-info">
        <label htmlFor="rows-per-page">
          Leads per page:
          <select
            id="rows-per-page"
            value={rowsPerPage}
            onChange={(e) => onRowsPerPageChange(Number(e.target.value))}
          >
            {rowsOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <p>1-{Math.min(rowsPerPage, totalPages * rowsPerPage)} of {totalPages * rowsPerPage} Leads</p>
      </div>
    );
  };

  const renderSelectedPage = () => {
    return (
      <div className="pagination-controls">
        <label htmlFor="current-page">
          Page:
          <select
            id="current-page"
            value={currentPage}
            onChange={(e) => onPageChange(Number(e.target.value))}
          >
            {pages.map((page) => (
              <option key={page} value={page}>
                {page.toString().padStart(2, "0")}
              </option>
            ))}
          </select>
        </label>
        <p>of {totalPages} pages</p>
        {renderPageNavButtons()}
      </div>
    );
  };

  const renderPageNavButtons = () => {
    return (
      <>
        <FaChevronLeft
          className="icon-with-borders"
          onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        />
        <FaChevronRight
          onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
        />
      </>
    );
  };

  return (
    <div className="table-bottom">
      {renderRowsPerPage()}
      {renderSelectedPage()}
    </div>
  );
}

export default Pagination;

