import React, { useState } from "react";
import "./StudentForm.css";
import PhoneInputComponent from "../PhoneInputComponent/PhoneInputComponent";
import { faL } from "@fortawesome/free-solid-svg-icons";
import GetLocation from "../GetLocation/GetLocation";

const StudentForm = () => {

  const [isOtpSent, setOtpSent] = useState(false);
  const [country, setCountry] = useState("India");

  const handlePhoneChange = (phone) => {
    // setFormData((prevData) => ({ ...prevData, phone }));
    console.log("hello");
  };


  return (
    <div className="form-container">
      <h2>Book a Live Class Today, for <span className="highlight">FREE</span></h2>
      <p>Start Learning Today</p>
      <form className="live-class-form">
        <input
          type="text"
          placeholder="Student Name*"
          className="form-input"
          required
        />
        <input
          type="email"
          placeholder="Email(Optional)"
          className="form-input"
          required
        />
        <div className="phone-number-container">
            <PhoneInputComponent onPhoneChange={handlePhoneChange} setOtpSent={setOtpSent} setCountry={setCountry} />            
        </div>
        {isOtpSent && <input
          type="email"
          placeholder="Enter OTP"
          className="form-input"
          required
        />}
        {country==="India"?<GetLocation />:null}
        <select className="form-input"  style={{ width: "312px" }} required>
          <option value="" disabled selected>
            Select Class
          </option>
          {Array.from({ length: 8 }, (_, i) => (
            <option key={i + 3} value={`class-${i + 3}`}>
              {/* {`${i + 3}th class`} */}
              {`${i + 3}${i === 0 ? "rd" : "th"} class`}
            </option>
          ))}
        </select>
        <select className="form-input custom-dropdown"  style={{ width: "312px" }} required>
          <option value="" disabled selected>
            Select Board
          </option>
          <option value="state-1">CBSC</option>
          <option value="state-2">ICSC</option>
          <option value="state-3">State</option>
        </select>
        <select className="form-input"  style={{ width: "312px" }} required>
          <option value="" disabled selected>
            Interacted With
          </option>
          <option value="state-1">Father</option>
          <option value="state-2">Mother</option>
          <option value="state-3">Student</option>
          <option value="state-3">Guardian</option>
        </select>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default StudentForm;
