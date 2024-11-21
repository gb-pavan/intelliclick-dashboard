import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PhoneInputComponent = ({ onPhoneChange }) => {
  const [phone, setPhone] = useState("");

  const handlePhoneChange = (value) => {
    setPhone(value); // Update local state
    onPhoneChange(value); // Pass the value to the parent
  };

  return (
    <div>
      <PhoneInput      
        country={"in"}
        value={phone}
        onChange={handlePhoneChange}
        inputProps={{
          required: true,
        }}
        dropdownStyle={{
          textAlign: 'left',
          color: 'black',
        }}
        containerStyle={{
          width: '360px',  // Increase width of the container
          position:'relative',
        }}
        inputStyle={{
          // width: 'calc(100% - 60px)', // Make input fill the container but leave space for flag
          width:'360px',
          height: '40px', // Increase height of input
          padding: '10px 45px', // Add padding for better appearance
          fontSize: '16px', // Optional: increase font size
          borderRadius: '5px', // Optional: rounded corners for the input
        }}       
      />
    </div>
  );
};

export default PhoneInputComponent;
