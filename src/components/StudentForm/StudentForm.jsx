import React, { useState, useEffect, useCallback } from "react";
import "./StudentForm.css";
import PhoneInputComponent from "../PhoneInputComponent/PhoneInputComponent";
import GetLocation from "../GetLocation/GetLocation";
import { fetchData } from "../../api/fetchData";
import ClipLoader from 'react-spinners/ClipLoader';
import useFetchData from "../../hooks/useFetchData";


const StudentForm = ({onSubmit}) => {
  const [isOtpSent, setOtpSent] = useState(false);
  const [verifyOtp, setVerifyOtp] = useState("");
  const [country, setCountry] = useState("India");
  const [location, setLocation] = useState({ selectedState: "", selectedDistrict: "" });
  const [otpVerifyMessage,setOtpVerifyMessage]= useState("");
  
  const [formData, setFormData] = useState({
    studentName: "",
    email: "",
    phone: "",
    otp: "",
    selectedClass: "",
    selectedBoard: "",
    interactedWith: ""
  });

  const [errors, setErrors] = useState({
    studentName: "",
    phone: "",
    selectedClass: "",
    selectedBoard: "",
    interactedWith: "",
    selectedState: "",
    selectedDistrict: ""
  });

  const [classOptions, setClassOptions] = useState([]);
  const [classDetails,setClassDetails] = useState([]);
  const [isClassLoading, setClassLoading] = useState(true);
  const endpoint = "api/standard/read/get-all";
const { data, loading, error } = useFetchData(endpoint);

useEffect(() => {
    if (error) {
      console.error("Error fetching data:", error);
    } else {
      setClassDetails(data);
    }
  }, [data, error]); 


  const classList = classDetails?.map(eachClass => eachClass.name);
  // Fetch class options from API
  // useEffect(() => {
  //   const fetchClassOptions = async () => {
  //     try {
  //       setClassLoading(true);
        
  //       setClassDetails(response);
  //       const classList = response?.map(each=>each.name);
  //       setClassOptions(classList); // Assuming API returns a `classes` array
  //     } catch (error) {
  //       console.error("Error fetching class options:", error);
  //       setClassOptions([]); // Fallback to empty array in case of error
  //     } finally {
  //       setClassLoading(false);
  //     }
  //   };

  //   fetchClassOptions();
  // }, []);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;    
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }, []);

  const handlePhoneChange = (phone) => {
    setFormData((prevData) => ({ ...prevData, phone }));
  };

  const handleVerifyOtp = async () => {
    const endpoint = "api/authentication/verify";
    const payload = JSON.stringify({phone:formData.phone ,code:verifyOtp})
    const otpVerifyResponse = await fetchData(endpoint,payload);
    if(otpVerifyResponse.message){
      setVerifyOtp("");
      setOtpSent(false);
    }
    if(otpVerifyResponse.message==="OTP verified successfully!"){
      setOtpVerifyMessage(otpVerifyResponse.message);
    }   
  }

  const handleSubmit = async (e) => {
    e.preventDefault();


    let formIsValid = true;
    let newErrors = {
      studentName: "",
      phone: "",
      selectedClass: "",
      selectedBoard: "",
      interactedWith: "",
      selectedState: "",
      selectedDistrict: ""
    };

    if (!formData.studentName.trim()) {
      newErrors.studentName = "Student Name is required";
      formIsValid = false;
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      formIsValid = false;
    }
    if (!formData.selectedClass.trim()) {
      newErrors.selectedClass = "Class selection is required";
      formIsValid = false;
    }
    if (!formData.selectedBoard.trim()) {
      newErrors.selectedBoard = "Board selection is required";
      formIsValid = false;
    }
    if (!formData.interactedWith.trim()) {
      newErrors.interactedWith = "Interaction field is required";
      formIsValid = false;
    }
    // if (!location.selectedState.trim()) {
    //   newErrors.selectedState = "State field is required";
    //   formIsValid = false;
    // }
    // if (!location.selectedDistrict.trim()) {
    //   newErrors.selectedDistrict = "District field is required";
    //   formIsValid = false;
    // }

    setErrors(newErrors);

    const selectedId = classDetails?.filter(eachClass => eachClass.name === formData.selectedClass)[0]._id;

    if (!formIsValid) return;

    const payload = {
      studentName: formData.studentName,
      mobile: formData.phone,
      standard: selectedId,
      createdBy: "offline",
      board: formData.selectedBoard,
      // state: location?.selectedState,
      // city: location?.selectedDistrict,
      interactedWith: formData.interactedWith,
      // status: "prospect"
    };

    try {
      const endpoint = "api/lead-app/lead/write/create-or-update";
      const data = await fetchData(endpoint, payload);
      onSubmit();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="form-container">
      <h2>Book a Live Class Today, for <span className="highlight">FREE</span></h2>
      <p>Start Learning Today</p>
      <form className="live-class-form" onSubmit={handleSubmit} >
        <div className="name-container">
          <input
            type="text"
            name="studentName"
            placeholder="Student Name*"
            className="form-input"
            value={formData.studentName}
            onChange={handleInputChange}
          />
          {errors.studentName && <p className="name-error" style={{ color: "red" }}>*{errors.studentName}</p>}
        </div>
        <div className="name-container">
        <input
          type="email"
          name="email"
          placeholder="Email (Optional)"
          className="form-input"
          value={formData.email}
          onChange={handleInputChange}
        /></div>
        <div className="name-container">
          <PhoneInputComponent onPhoneChange={handlePhoneChange} setOtpSent={setOtpSent} setCountry={setCountry} />
          {isOtpSent && (
            <div className="verify-otp-container">
              <input
                type="text"
                name="otp"
                placeholder="Enter OTP"
                className="form-input"
                // value={formData.otp}
                value={verifyOtp}
                onChange={(e)=>setVerifyOtp(e.target.value)}
                required
              />
              <button style={{backgroundColor:"green",color:"white"}} type="button" onClick={handleVerifyOtp}>Verify</button>
            </div>
          )}
          {otpVerifyMessage && <p className="otp-verify-message" style={{color:"green"}}>{otpVerifyMessage}</p>}
          {errors.phone && <p className="name-error" style={{ color: "red" }}>*{errors.phone}</p>}
        </div>

        

        <div className="name-container">
          <select
            name="selectedBoard"
            className="form-input custom-dropdown"
            // style={{ width: "312px" }}
            value={formData.selectedBoard}
            onChange={handleInputChange}
          >
            <option value="" disabled>Select Board</option>
            <option value="CBSC">CBSC</option>
            <option value="ICSC">ICSC</option>
            <option value="State">State</option>
          </select>
          {errors.selectedBoard && <p className="name-error" style={{ color: "red" }}>*{errors.selectedBoard}</p>}
        </div>

        <div className="group-fields">
          <div style={{width:"45%", marginLeft:"0px"}}>
              {loading ? (
                <ClipLoader color="#36d7b7" loading={true} size={30} />
                ) : (
              <select
                name="selectedClass"
                className="form-input"
                style={{ width: "100%" }}
                value={formData.selectedClass}
                onChange={handleInputChange}
                >
                <option value="" disabled>Select Class</option>
                {classList?.map((cls,index) => (
                <option key={index} value={cls}>{cls}</option>
                ))}
              </select>
            )}
            {errors.selectedClass && <p className="name-error" style={{ color: "red" }}>*{errors.selectedClass}</p>}
          </div>

          <div style={{width:"45%"}}>
            <select
              name="interactedWith"
              className="form-input"
              style={{ width: "100%" }}
              value={formData.interactedWith}
              onChange={handleInputChange}
            >
              <option value="" disabled>Interacted With</option>
              <option value="Father">Father</option>
              <option value="Mother">Mother</option>
              <option value="Student">Student</option>
              <option value="Guardian">Guardian</option>
            </select>
            {errors.interactedWith && <p className="name-error" style={{ color: "red" }}>*{errors.interactedWith}</p>}
          </div>
        </div>

        

        {/* {country === "India" && <GetLocation setLocation={setLocation} errors={errors} />} */}
        <div className="submit-btn-container">
          <button type="submit" className="submit-button">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default StudentForm;



