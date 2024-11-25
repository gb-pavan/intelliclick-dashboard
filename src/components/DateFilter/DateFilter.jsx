import { useState,useEffect } from "react";
import "./DateFilter.css";
import { FaChevronDown } from "react-icons/fa6";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateFilter = ({ options, onSelectionChange,setSelectStartDate,setSelectEndDate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);

  useEffect(() => {
    if (selectedOption === "Custom Date") {
      if (!fromDate && !toDate) {
        onSelectionChange && onSelectionChange(""); // Empty selection when both dates are null
      } else if (fromDate && !toDate) {
        onSelectionChange && onSelectionChange("Custom Date", fromDate); // Only fromDate is set
      } else if (fromDate && toDate) {
        onSelectionChange && onSelectionChange("Custom Date", fromDate, toDate); // Both dates are set
      }
    }
  }, [fromDate, toDate, selectedOption]);

  const handleOptionChange = (option) => {  
    setSelectedOption(option);
    onSelectionChange && onSelectionChange(option);
    setIsOpen(false); // Close the dropdown after selection    
  };

  return (
    <div>
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="dropdown-btn"
        style={{ color: "#64748B" }}
      >
        {selectedOption ? selectedOption : "All"}
        <span className="ml-2">
          <FaChevronDown className="down-arrow" />
        </span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="style-list">
          <ul className="date-filter-show">
            {options.map((option, index) => (
              <li
                key={index}
                className="each-option"
                onClick={() => handleOptionChange(option)}
              >
                <span className="ml-2 text-gray-700 font-medium">{option}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {selectedOption === "Custom Date" && (
        <div className="custom-date-container">
          <div className="date-picker">
            <label>From Date:</label>
            <DatePicker
              selected={fromDate}
              onChange={(date) => setFromDate(date)}
              placeholderText="Select From Date"
              className="custom-date-input"
            />
          </div>
          <div className="date-picker">
            <label>To Date:</label>
            <DatePicker
              selected={toDate}
              onChange={(date) => {setToDate(date)}}
              placeholderText="Select To Date"
              className="custom-date-input"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default DateFilter;
