import React, { useState } from "react";
import { Download } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
const DropdownButton = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (format) => {
    setIsOpen(false);
    if (onSelect) onSelect(format);
  };

  return (
    <div className="w-full flex items-center justify-center mb-5">
      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-7 right-14 bg-white shadow-md border rounded-md mb-2 z-10 w-30">
          {["png", "svg", "pdf"].map((format) => (
            <button
              key={format}
              className="block px-4 py-2 hover:bg-gray-200 w-full text-left text-sm text-gray-700 font-medium"
              onClick={() => handleSelect(format)}
            >
              {format.toUpperCase()}
            </button>
          ))}
        </div>
      )}

      {/* Button to toggle the dropdown */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          background: 'linear-gradient(109.01deg, #E446EF 15.4%, #2D84D3 99.81%)'
        }}
        className=" w-[218px] h-[44px] flex items-center justify-center  mt-[24px] rounded-[8px]"
      >
        <Download className="mr-2 text-[#FFFFFF] " />
       <div className=" text-[#FFFFFF] text-[18px] font-[roboto] font-bold">Download</div> 
       <ChevronDown  style={{
        color:"#FFFFFF",
        width:"24px",
        height:"24px", // Custom border style
        marginLeft:"10px",
        marginTop:"3px"
      }}/>
      </button>
    </div>
  );
};

export default DropdownButton;