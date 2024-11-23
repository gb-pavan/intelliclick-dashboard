// import React, { useState } from "react";
// import "./StudentForm.css";
// import PhoneInputComponent from "../PhoneInputComponent/PhoneInputComponent";
// import { faL } from "@fortawesome/free-solid-svg-icons";
// import GetLocation from "../GetLocation/GetLocation";

// const StudentForm = () => {

//   const [isOtpSent, setOtpSent] = useState(false);
//   const [country, setCountry] = useState("India");

//   const handlePhoneChange = (phone) => {
//     // setFormData((prevData) => ({ ...prevData, phone }));
//     console.log("hello");
//   };


//   return (
//     <div className="form-container">
//       <h2>Book a Live Class Today, for <span className="highlight">FREE</span></h2>
//       <p>Start Learning Today</p>
//       <form className="live-class-form">
//         <input
//           type="text"
//           placeholder="Student Name*"
//           className="form-input"
//           required
//         />
//         <input
//           type="email"
//           placeholder="Email(Optional)"
//           className="form-input"
//           required
//         />
//         <div className="phone-number-container">
//             <PhoneInputComponent onPhoneChange={handlePhoneChange} setOtpSent={setOtpSent} setCountry={setCountry} />            
//         </div>
//         {isOtpSent && <input
//           type="email"
//           placeholder="Enter OTP"
//           className="form-input"
//           required
//         />}
//         {country==="India"?<GetLocation />:null}
//         <select className="form-input"  style={{ width: "312px" }} required>
//           <option value="" disabled selected>
//             Select Class
//           </option>
//           {Array.from({ length: 8 }, (_, i) => (
//             <option key={i + 3} value={`class-${i + 3}`}>
//               {/* {`${i + 3}th class`} */}
//               {`${i + 3}${i === 0 ? "rd" : "th"} class`}
//             </option>
//           ))}
//         </select>
//         <select className="form-input custom-dropdown"  style={{ width: "312px" }} required>
//           <option value="" disabled selected>
//             Select Board
//           </option>
//           <option value="state-1">CBSC</option>
//           <option value="state-2">ICSC</option>
//           <option value="state-3">State</option>
//         </select>
//         <select className="form-input"  style={{ width: "312px" }} required>
//           <option value="" disabled selected>
//             Interacted With
//           </option>
//           <option value="state-1">Father</option>
//           <option value="state-2">Mother</option>
//           <option value="state-3">Student</option>
//           <option value="state-3">Guardian</option>
//         </select>
//         <button type="submit" className="submit-button">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default StudentForm;


// import React, { useState } from "react";
// import "./StudentForm.css";
// import PhoneInputComponent from "../PhoneInputComponent/PhoneInputComponent";
// import GetLocation from "../GetLocation/GetLocation";
// import useFetchData from "../../hooks/useFetchData";
// import { fetchData } from "../../api/fetchData";

// const StudentForm = () => {
//   const [isOtpSent, setOtpSent] = useState(false);
//   const [country, setCountry] = useState("India");
//   const [getLocation,setLocation]=useState({});
  
//   // Create state for form data
//   const [formData, setFormData] = useState({
//     studentName: "",
//     email: "",
//     phone: "",
//     otp: "",
//     selectedClass: "",
//     selectedBoard: "",
//     interactedWith: ""
//   });

//   const endpoint = "api/lead-app/lead/write/create-or-update";
//   const { data, loading, error } = useFetchData(endpoint);

//   console.log("form data result",data);

//   const handlePhoneChange = (phone) => {
//     setFormData((prevData) => ({ ...prevData, phone }));
//   };

//   // Handle form input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault(); // Prevent the default form submission
//   //   const endpoint = "api/lead-app/lead/write/create-or-update";
//   //   const { data, loading, error } = useFetchData(endpoint,formData);
//   //   console.log("form submit",data);

//   //   // try {
//   //   //   const response = await fetch("https://your-api-endpoint.com/submit", {
//   //   //     method: "POST",
//   //   //     headers: {
//   //   //       "Content-Type": "application/json",
//   //   //     },
//   //   //     body: JSON.stringify(formData), // Send form data as JSON
//   //   //   });

//   //   //   if (response.ok) {
//   //   //     // Handle successful form submission
//   //   //     console.log("Form submitted successfully");
//   //   //   } else {
//   //   //     // Handle server error
//   //   //     console.log("Error submitting form");
//   //   //   }
//   //   // } catch (error) {
//   //   //   console.log("Error:", error);
//   //   // }
//   // };

// console.log("get location",getLocation);
// const handleSubmit = async (e) => {
//   e.preventDefault(); // Prevent the default form submission

  
  
//   const payload = {
//     "studentName":formData.studentName,
//     "mobile":formData.phone,
//     "standard":formData.selectedClass,
//     "createdBy":formData.interactedWith,
//     "state":getLocation.selectedState,
//     "city":getLocation.selectedDistrict,
//     "interactedWith":"hello"
//   }
//   console.log("form-data",payload);

//   try {
//     const endpoint = "api/lead-app/lead/write/create-or-update"; // Your API endpoint
//     const data = await fetchData(endpoint, payload); // Call the fetchData function
//     console.log("Form submitted successfully:", data); // Handle successful form submission
//   } catch (error) {
//     console.error("Error submitting form:", error); // Handle errors
//   }
// };


//   return (
//     <div className="form-container">
//       <h2>Book a Live Class Today, for <span className="highlight">FREE</span></h2>
//       <p>Start Learning Today</p>
//       <form className="live-class-form" onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="studentName"
//           placeholder="Student Name*"
//           className="form-input"
//           value={formData.studentName}
//           onChange={handleInputChange}
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email(Optional)"
//           className="form-input"
//           value={formData.email}
//           onChange={handleInputChange}
//           required
//         />
//         <div className="phone-number-container">
//           <PhoneInputComponent onPhoneChange={handlePhoneChange} setOtpSent={setOtpSent} setCountry={setCountry} />
//         </div>
//         {isOtpSent && (
//           <input
//             type="text"
//             name="otp"
//             placeholder="Enter OTP"
//             className="form-input"
//             value={formData.otp}
//             onChange={handleInputChange}
//             required
//           />
//         )}
        
//         <select
//           name="selectedClass"
//           className="form-input"
//           style={{ width: "312px" }}
//           value={formData.selectedClass}
//           onChange={handleInputChange}
//           required
//         >
//           <option value="" disabled>
//             Select Class
//           </option>
//           {Array.from({ length: 8 }, (_, i) => (
//             <option key={i + 3} value={`class-${i + 3}`}>
//               {`${i + 3}${i === 0 ? "rd" : "th"} class`}
//             </option>
//           ))}
//         </select>
//         <select
//           name="selectedBoard"
//           className="form-input custom-dropdown"
//           style={{ width: "312px" }}
//           value={formData.selectedBoard}
//           onChange={handleInputChange}
//           required
//         >
//           <option value="" disabled>
//             Select Board
//           </option>
//           <option value="cbsc">CBSC</option>
//           <option value="icsc">ICSC</option>
//           <option value="state">State</option>
//         </select>
//         <select
//           name="interactedWith"
//           className="form-input"
//           style={{ width: "312px" }}
//           value={formData.interactedWith}
//           onChange={handleInputChange}
//           required
//         >
//           <option value="" disabled>
//             Interacted With
//           </option>
//           <option value="father">Father</option>
//           <option value="mother">Mother</option>
//           <option value="student">Student</option>
//           <option value="guardian">Guardian</option>
//         </select>
//         {country === "India" && <GetLocation setLocation={setLocation}/>}
//         <button type="submit" className="submit-button">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default StudentForm;

import React, { useState, useCallback } from "react";
import "./StudentForm.css";
import PhoneInputComponent from "../PhoneInputComponent/PhoneInputComponent";
import GetLocation from "../GetLocation/GetLocation";
import { fetchData } from "../../api/fetchData";

const StudentForm = () => {
  const [isOtpSent, setOtpSent] = useState(false);
  const [country, setCountry] = useState("India");
  const [location, setLocation] = useState({selectedState:"",selectedDistrict:""});
  
  // Create state for form data
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

  // Handle form input changes dynamically
  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  }, []);

  // Handle phone number change
  const handlePhoneChange = (phone) => {
    setFormData((prevData) => ({ ...prevData, phone }));
  };

  console.log("errors",errors);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    let formIsValid = true;
    let newErrors = {
      studentName: '',
      phone: '',
      selectedClass: '',
      selectedBoard: '',
      interactedWith: '',
      selectedState: '',
      selectedDistrict: ''
    }; // Reset errors
    console.log("form clicked");
    // Validate required fields
    if (!formData.studentName.trim()) {
      console.log("inside student name");
      newErrors.studentName = 'Student Name is required';
      formIsValid = false;
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
      formIsValid = false;
    }
    if (!formData.selectedClass.trim()) {
      newErrors.selectedClass = 'Class selection is required';
      formIsValid = false;
    }
    if (!formData.selectedBoard.trim()) {
      newErrors.selectedBoard = 'Board selection is required';
      formIsValid = false;
    }
    if (!formData.interactedWith.trim()) {
      newErrors.interactedWith = 'Interaction field is required';
      formIsValid = false;
    }

    if (!location.selectedState.trim()) {
      console.log("trimmed state");
      newErrors.selectedState = 'State field is required';
      formIsValid = false;
    }

    if (!location.selectedDistrict.trim()) {
      console.log("trimmed district");
      newErrors.selectedDistrict = 'District field is required';
      formIsValid = false;
    }

    // Update error state
    setErrors(newErrors);


    const payload = {
      studentName: formData.studentName,
      mobile: formData.phone,
      standard: formData.selectedClass,
      createdBy: formData.interactedWith,
      state: location?.selectedState,
      city: location?.selectedDistrict,
      interactedWith: "hello",
      status:"prospect"
    };

    try {
      const endpoint = "api/lead-app/lead/write/create-or-update";
      const data = await fetchData(endpoint, payload);
      console.log("Form submitted successfully:", data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="form-container">
      <h2>Book a Live Class Today, for <span className="highlight">FREE</span></h2>
      <p>Start Learning Today</p>
      <form className="live-class-form" onSubmit={handleSubmit}>
        <div className="name-container">
          <input
            type="text"
            name="studentName"
            placeholder="Student Name*"
            className="form-input name-style"
            value={formData.studentName}
            onChange={handleInputChange}
          />
          {errors.studentName && (
            <p className="name-error" style={{color:"red"}}>*{errors.studentName}</p>
          )}
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email (Optional)"
          className="form-input"
          value={formData.email}
          onChange={handleInputChange}
        />
        <div className="name-container">
        <div className="phone-number-container">
          <PhoneInputComponent onPhoneChange={handlePhoneChange} setOtpSent={setOtpSent} setCountry={setCountry} />
        </div>        
        {isOtpSent && (
          <input
            type="text"
            name="otp"
            placeholder="Enter OTP"
            className="form-input"
            value={formData.otp}
            onChange={handleInputChange}
            required
          />
        )}
        {errors.phone && (
            <p className="name-error" style={{color:"red"}}>*{errors.phone}</p>
          )}</div>

        <div className="name-container">
        <select
          name="selectedClass"
          className="form-input"
          style={{ width: "312px" }}
          value={formData.selectedClass}
          onChange={handleInputChange}
        >
          <option value="" disabled>Select Class</option>
          {Array.from({ length: 8 }, (_, i) => (
            <option key={i + 3} value={`class-${i + 3}`}>
              {`${i + 3}${i === 0 ? "rd" : "th"} class`}
            </option>
          ))}
        </select>
        {errors.selectedClass && (
            <p className="name-error" style={{color:"red"}}>*{errors.selectedClass}</p>
          )}</div>

        <div className="name-container">
        <select
          name="selectedBoard"
          className="form-input custom-dropdown"
          style={{ width: "312px" }}
          value={formData.selectedBoard}
          onChange={handleInputChange}
        >
          <option value="" disabled>Select Board</option>
          <option value="cbsc">CBSC</option>
          <option value="icsc">ICSC</option>
          <option value="state">State</option>
        </select>
        {errors.selectedBoard && (
            <p className="name-error" style={{color:"red"}}>*{errors.selectedBoard}</p>
          )}</div>

        <div className="name-container">
        <select
          name="interactedWith"
          className="form-input"
          style={{ width: "312px" }}
          value={formData.interactedWith}
          onChange={handleInputChange}
        >
          <option value="" disabled>Interacted With</option>
          <option value="father">Father</option>
          <option value="mother">Mother</option>
          <option value="student">Student</option>
          <option value="guardian">Guardian</option>
        </select>
        {errors.interactedWith && (
            <p className="name-error" style={{color:"red"}}>*{errors.interactedWith}</p>
          )}</div>

        {country === "India" && <GetLocation setLocation={setLocation} errors={errors} />}
        <div className="submit-btn-container">
          <button type="submit" className="submit-button">
          Submit
        </button>
        </div>
        
      </form>
    </div>
  );
};

export default StudentForm;


