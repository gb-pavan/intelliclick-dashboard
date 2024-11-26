import React, { useState,useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./PhoneInputComponent.css";

const PhoneInputComponent = ({ onPhoneChange,setOtpSent,setCountry }) => {
  const [phone, setPhone] = useState("");
  const [resendOtp,setResendOtp] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let interval;
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      setResendOtp(false); // Reset to "Resend OTP" when the timer ends
      setOtpSent(false);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handlePhoneChange = (value,countryData) => {
    setCountry(countryData.name);
    setPhone(value); // Update local state
    onPhoneChange(value); // Pass the value to the parent
  };

  const handleSendOtp = () => {
    if(true) setResendOtp(true);
    setTimer(60);
    setOtpSent(true);
  };

  return (
    <div>
      <div style={{ display: "flex",alignItems: "center", position: "relative", width: "360px" }}>
        <PhoneInput
          country={"in"}
          value={phone}
          onChange={handlePhoneChange}
          className="custom-phone-input" // Custom class for PhoneInput
          buttonClass="custom-phone-dropdown" // Custom class for dropdown button
          searchClass="custom-phone-search" // Custom class for dropdown search box
          inputProps={{
            required: true,
          }}
          dropdownStyle={{
            textAlign: "left",
            color: "black",
          }}
          containerStyle={{
            width: "360px",
            // margin:"0px 22px"
          }}
          inputStyle={{
            width: "calc(100% - 60px)", // Adjust width to accommodate button          
            height: "40px",
            padding: "10px",
            fontSize: "16px",
            borderRadius: "5px",
            borderTopLeftRadius:"0px",
            borderBottomLeftRadius:"0px",
            border:"none",
            color:"black"
          }}
        />
        {resendOtp ?<button className="send-otp-button" style={{
          position: "absolute",
          right: "25px", // Position the button at the right end of the container
          zIndex: 1000,  // Ensure it's in front
        }}>Resend in {timer}s</button>:
        <button
          onClick={handleSendOtp}
          className="send-otp-button" // Custom class for Send OTP button
          style={{
          position: "absolute",
          right: "25px", // Position the button at the right end of the container
          zIndex: 1000,  // Ensure it's in front
        }}
        >
          Send OTP
        </button>}
      </div>
    </div>
  );
};

export default PhoneInputComponent;
