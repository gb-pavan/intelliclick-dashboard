import { useState } from "react";
import "./StatusFilter.css";

const StatusFilter = ({ statuses, onSelectionChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStatuses, setSelectedStatuses] = useState([]);

  const handleCheckboxChange = (status) => {
    const isSelected = selectedStatuses.includes(status.label);
    const updatedStatuses = isSelected
      ? selectedStatuses.filter((s) => s !== status.label)
      : [...selectedStatuses, status.label];
    setSelectedStatuses(updatedStatuses);
    onSelectionChange && onSelectionChange(updatedStatuses);
  };

  return (
    <div className="relative inline-block text-left">
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-100 border border-gray-300 rounded-md px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-200"
      >
        {selectedStatuses.length > 0
          ? `Selected (${selectedStatuses.length})`
          : "Select Status"}
        <span className="ml-2">&#9662;</span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="style-list">
          <ul className="status-filter-show">
            {statuses.map((status, index) => (
              <li key={index} >
                <input
                  type="checkbox"
                  checked={selectedStatuses.includes(status.label)}
                  onChange={() => handleCheckboxChange(status)}
                  className="form-checkbox text-indigo-600 rounded"
                />
                <div
                  className="status-color-box"
                  style={{ backgroundColor: status.color }}
                ></div>
                <span className="ml-2 text-gray-700 font-medium">{status.label}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default StatusFilter;
