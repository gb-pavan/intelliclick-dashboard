import { useState } from "react";
import "./DateFilter.css";
import { FaChevronDown } from "react-icons/fa6";

const DateFilter = ({ options, onSelectionChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

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
    </div>
  );
};

export default DateFilter;
