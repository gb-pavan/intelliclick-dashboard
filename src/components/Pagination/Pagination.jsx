// import React from "react";
// import { FaChevronDown } from "react-icons/fa";
// import { FaChevronLeft } from "react-icons/fa";
// import { FaChevronRight } from "react-icons/fa";
// import "./Pagination.css";

// function Pagination({ currentPage, totalPages, onPageChange }) { 

//   const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

//   {pages.map((page)=>{
//     return (
    
//     <div className="table-bottom">
//       <div>
//         <p>Leads per page : 10</p>
//         <FaChevronDown />
//         <p>1-10 of 200 Leads</p>
//       </div>
//       <div>
//         <p>01</p>
//         <FaChevronDown /> 
//         <p>of 15 pages</p>
//         <FaChevronLeft className="icon-with-borders" />
//         <FaChevronRight />
//       </div>          
//     </div>  
//   )
//   })}

  

    
// }

// export default Pagination;


import React from "react";
import { FaChevronDown, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Pagination.css";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="table-bottom">
      {/* Top Section */}
      <div className="leads-info">
        <p>Leads per page: 10</p>
        <FaChevronDown />
        <p>1-10 of 200 Leads</p>
      </div>

      {/* Pagination Section */}
      <div className="pagination-controls">
        <p>{currentPage.toString().padStart(2, "0")}</p>
        <FaChevronDown />
        <p>of {totalPages} pages</p>
        <FaChevronLeft
          className="icon-with-borders"
          onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
        />
        <FaChevronRight
          className="icon-with-borders"
          onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
        />
      </div>
    </div>
  );
}

export default Pagination;

