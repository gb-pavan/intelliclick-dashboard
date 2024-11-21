import React from "react";
import "./StudentForm.css";
import PhoneInputComponent from "../PhoneInputComponent/PhoneInputComponent";

const StudentForm = () => {

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
          placeholder="Email"
          className="form-input"
          required
        />
        {/* <div className="phone-input-container">
          <div className="country-code">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/75/India_flag_300.png"
              alt="India Flag"
              className="flag-icon"
            />
            <span>+91</span>
          </div>
          <button type="button" className="otp-button">Send OTP</button>
        </div> */}
        
          <div className="phone-number-container">
            <PhoneInputComponent onPhoneChange={handlePhoneChange} />
          </div>
          
        
        <select className="form-input" required>
          <option value="" disabled selected>
            Select Class
          </option>
          {Array.from({ length: 8 }, (_, i) => (
            <option key={i + 3} value={`class-${i + 3}`}>
              {`${i + 3}th class`}
            </option>
          ))}
        </select>
        <select className="form-input" required>
          <option value="" disabled selected>
            Select Board
          </option>
          <option value="state-1">CBSC</option>
          <option value="state-2">ICSC</option>
          <option value="state-3">State</option>
        </select>
        <select className="form-input" required>
          <option value="" disabled selected>
            Attracted
          </option>
          <option value="state-1">Father</option>
          <option value="state-2">Mother</option>
          <option value="state-3">Student</option>
          <option value="state-3">Guardian</option>
        </select>
        <button type="submit" className="submit-button">
          Continue Booking Live Class
        </button>
      </form>
    </div>
  );
};

export default StudentForm;
