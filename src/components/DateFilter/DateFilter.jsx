// import { useState,useEffect } from "react";
// import "./DateFilter.css";
// import { FaChevronDown } from "react-icons/fa6";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const DateFilter = ({ options, onSelectionChange,setSelectStartDate,setSelectEndDate }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [fromDate, setFromDate] = useState(null);
//   const [toDate, setToDate] = useState(null);

//   useEffect(() => {
//     if (selectedOption === "Custom Date") {
//       if (!fromDate && !toDate) {
//         onSelectionChange && onSelectionChange(""); // Empty selection when both dates are null
//       } else if (fromDate && !toDate) {
//         onSelectionChange && onSelectionChange("Custom Date", fromDate); // Only fromDate is set
//       } else if (fromDate && toDate) {
//         onSelectionChange && onSelectionChange("Custom Date", fromDate, toDate); // Both dates are set
//       }
//     }
//   }, [fromDate, toDate, selectedOption]);

//   const handleOptionChange = (option) => {  
//     setSelectedOption(option);
//     onSelectionChange && onSelectionChange(option);
//     setIsOpen(false); // Close the dropdown after selection    
//   };

//   return (
//     <div>
//       {/* Dropdown Button */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="dropdown-btn"
//         style={{ color: "#64748B" }}
//       >
//         {selectedOption ? selectedOption : "All"}
//         <span className="ml-2">
//           <FaChevronDown className="down-arrow" />
//         </span>
//       </button>

//       {/* Dropdown Menu */}
//       {isOpen && (
//         <div className="style-list">
//           <ul className="date-filter-show">
//             {options.map((option, index) => (
//               <li
//                 key={index}
//                 className="each-option"
//                 onClick={() => handleOptionChange(option)}
//               >
//                 <span className="ml-2 text-gray-700 font-medium">{option}</span>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}

//       {selectedOption === "Custom Date" && (
//         <div className="custom-date-container">
//           <div className="date-picker">
//             <label>From Date:</label>
//             <DatePicker
//               selected={fromDate}
//               onChange={(date) => setFromDate(date)}
//               placeholderText="Select From Date"
//               className="custom-date-input"
//             />
//           </div>
//           <div className="date-picker">
//             <label>To Date:</label>
//             <DatePicker
//               selected={toDate}
//               onChange={(date) => {setToDate(date)}}
//               placeholderText="Select To Date"
//               className="custom-date-input"
//             />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DateFilter;


// import { useState, useEffect } from "react";
// import "./DateFilter.css";
// import { FaChevronDown } from "react-icons/fa6";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const DateFilter = ({ options, onSelectionChange }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [dateRange, setDateRange] = useState([null, null]); // [startDate, endDate]
//   const [startDate, endDate] = dateRange;

//   useEffect(() => {
//     if (selectedOption === "Custom Date" && startDate && endDate) {
//       onSelectionChange && onSelectionChange("Custom Date", startDate, endDate);
//     } else if (selectedOption) {
//       onSelectionChange && onSelectionChange(selectedOption);
//     }
//   }, [startDate, endDate, selectedOption, onSelectionChange]);

//   const handleOptionChange = (option) => {
//     setSelectedOption(option);
//     if (option !== "Custom Date") {
//       setIsOpen(false); // Close dropdown for non-custom options
//     }
//   };

//   return (
//     <div className="dropdown-container">
//       {/* Dropdown Button */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="dropdown-btn"
//         style={{ color: "#64748B" }}
//       >
//         {selectedOption
//           ? selectedOption === "Custom Date" && startDate && endDate
//             ? `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`
//             : selectedOption
//           : "All"}
//         <span className="ml-2">
//           <FaChevronDown className="down-arrow" />
//         </span>
//       </button>

//       {/* Dropdown Content */}
//       {isOpen && (
//         <div className="style-list">
//           <ul className="date-filter-show">
//             {options.map((option, index) => (
//               <li
//                 key={index}
//                 className="each-option"
//                 onClick={() => handleOptionChange(option)}
//               >
//                 {option === "Custom Date" ? (
//                   // Render DatePicker inline for "Custom Date"
//                   <DatePicker
//                     selectsRange
//                     startDate={startDate}
//                     endDate={endDate}
//                     onChange={(update) => setDateRange(update)}
//                     placeholderText="Select Date Range"
//                     className="custom-date-input"
//                     inline
//                   />
//                 ) : (
//                   option
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DateFilter;

// import { useState, useEffect } from "react";
// import "./DateFilter.css";
// import { FaChevronDown } from "react-icons/fa6";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// const DateFilter = ({ options, onSelectionChange }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [dateRange, setDateRange] = useState([null, null]); // [startDate, endDate]
//   const [startDate, endDate] = dateRange;

//   useEffect(() => {
//     if (selectedOption === "Custom Date" && startDate && endDate) {
//       onSelectionChange && onSelectionChange("Custom Date", startDate, endDate);
//     } else if (selectedOption && selectedOption !== "Custom Date") {
//       onSelectionChange && onSelectionChange(selectedOption);
//     }
//   }, [startDate, endDate, selectedOption, onSelectionChange]);

//   const handleOptionChange = (option) => {
//     setSelectedOption(option);
//     if (option === "Custom Date") {
//       // Keep the dropdown open and show DatePicker
//       setIsOpen(true);
//     } else {
//       // Close the dropdown for non-custom options
//       setIsOpen(false);
//     }
//   };

//   return (
//     <div className="dropdown-container">
//       {/* Dropdown Button */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="dropdown-btn"
//         style={{ color: "#64748B" }}
//       >
//         {selectedOption
//           ? selectedOption === "Custom Date" && startDate && endDate
//             ? `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`
//             : selectedOption
//           : "All"}
//         <span className="ml-2">
//           <FaChevronDown className="down-arrow" />
//         </span>
//       </button>

//       {/* Dropdown Content */}
//       {isOpen && (
//         <div className="style-list">
//           {selectedOption === "Custom Date" ? (
//             // Show only the DatePicker for "Custom Date"
//             <div className="custom-date-picker">
//               <DatePicker
//                 selectsRange
//                 startDate={startDate}
//                 endDate={endDate}
//                 onChange={(update) => setDateRange(update)}
//                 placeholderText="Select Date Range"
//                 className="custom-date-input"
//                 inline
//               />
//               <button
//                 className="apply-btn"
//                 onClick={() => setIsOpen(false)} // Close dropdown after selecting dates
//               >
//                 Apply
//               </button>
//             </div>
//           ) : (
//             // Show standard options
//             <ul className="date-filter-show">
//               {options.map((option, index) => (
//                 <li
//                   key={index}
//                   className="each-option"
//                   onClick={() => handleOptionChange(option)}
//                 >
//                   {option}
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default DateFilter;


import { useState, useEffect } from "react";
import "./DateFilter.css";
import { FaChevronDown } from "react-icons/fa6";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateFilter = ({ options, onSelectionChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [dateRange, setDateRange] = useState([null, null]); // [startDate, endDate]
  const [startDate, endDate] = dateRange;

  useEffect(() => {
    // If Custom Date is selected and both dates are set, apply the filtering
    if (selectedOption === "Custom Date" && startDate && endDate) {
      onSelectionChange && onSelectionChange("Custom Date", startDate, endDate);
    } else if (selectedOption && selectedOption !== "Custom Date") {
      onSelectionChange && onSelectionChange(selectedOption);
    }
  }, [startDate, endDate, selectedOption, onSelectionChange]);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    if (option === "Custom Date") {
      // Keep the dropdown open and show DatePicker
      setIsOpen(true);
    } else {
      // Close the dropdown for non-custom options
      setIsOpen(false);
    }
  };

  const handleDateChange = (update) => {
    setDateRange(update);
    // Trigger filtering as soon as the date range is updated
    if (update[0] && update[1]) {
      onSelectionChange && onSelectionChange("Custom Date", update[0], update[1]);
    }
  };

  return (
    <div className="dropdown-container">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn"
        style={{ color: "#64748B" }}
      >
        {selectedOption
          ? selectedOption === "Custom Date" && startDate && endDate
            ? `${startDate.toLocaleDateString()} - ${endDate.toLocaleDateString()}`
            : selectedOption
          : "All"}
        <span className="ml-2">
          <FaChevronDown className="down-arrow" />
        </span>
      </button>

      {/* Dropdown Content */}
      {isOpen && (
        <div className="style-list">
          {selectedOption === "Custom Date" ? (
            // Show only the DatePicker for "Custom Date"
            <div className="custom-date-picker">
              <DatePicker
                selectsRange
                startDate={startDate}
                endDate={endDate}
                onChange={handleDateChange} // Trigger filtering on date change
                placeholderText="Select Date Range"
                className="custom-date-input"
                inline
              />
            </div>
          ) : (
            // Show standard options
            <ul className="date-filter-show">
              {options.map((option, index) => (
                <li
                  key={index}
                  className="each-option"
                  onClick={() => handleOptionChange(option)}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default DateFilter;


