import React, { useEffect, useState } from "react";
import "./GetLocation.css";
import useFetchData from "../../hooks/useFetchData";
import ClipLoader from 'react-spinners/ClipLoader';

// const stateDistrictData = {
//   "Andaman and Nicobar Islands": ["Port Blair"],
//   "Andhra Pradesh": [
//     "Adoni",
//     "Amaravati",
//     "Anantapur",
//     "Chandragiri",
//     "Chittoor",
//     "Dowlaiswaram",
//     "Eluru",
//     "Guntur",
//     "Kadapa",
//     "Kakinada",
//     "Kurnool",
//     "Machilipatnam",
//     "Nagarjunakoṇḍa",
//     "Rajahmundry",
//     "Srikakulam",
//     "Tirupati",
//     "Vijayawada",
//     "Visakhapatnam",
//     "Vizianagaram",
//     "Yemmiganur",
//   ],
//   Assam: [
//     "Dhuburi",
//     "Dibrugarh",
//     "Dispur",
//     "Guwahati",
//     "Jorhat",
//     "Nagaon",
//     "Sivasagar",
//     "Silchar",
//     "Tezpur",
//     "Tinsukia",
//   ],
// };

function GetLocation({setLocation,errors}) {

  
  const [selectedState, setSelectedState] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [districts, setDistricts] = useState([]);
  
  const endpoint = "api/user/read/get-state-data?country=IN";
  const { data, loading, error } = useFetchData(endpoint);

  useEffect(() => {
    // Only update location when selectedState or selectedDistrict changes
    setLocation({ selectedState, selectedDistrict });
  }, [selectedState, selectedDistrict, setLocation]);

  if (loading) return <ClipLoader color="#36d7b7" loading={true} size={30} />;
  // if (error) return <p>Error: {error.message}</p>;
  const stateDistrictData = data || {};

  

  const handleStateChange = (event) => {
    const state = event.target.value;
    setSelectedState(state);
    setDistricts(stateDistrictData[state] || []);
    
  };

  const handleDistrictChange = (event) => {
    const district = event.target.value;
    console.log("selected district in handle change",district);
    setSelectedDistrict(district);
  }

  return (
    <div className="get-location">
      <div  className="location-container">
      <select id="state" value={selectedState} onChange={handleStateChange} className="form-input"  style={{ width: "312px" }} >
          <option value="" disabled selected>
            Select State
          </option>
          {Object.keys(stateDistrictData).map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
        </select>
        {errors.selectedState && (
            <p className="location-error" style={{color:"red"}}>*{errors.selectedState}</p>
          )}</div>

   
      
      <div  className="location-container">
      <select id="district" value={selectedDistrict} onChange={handleDistrictChange} className="form-input"  style={{ width: "312px" }} >
          <option value="" disabled selected>
            Select District
          </option>
          
            {districts.map((district) => (
          <option key={district} value={district}>
            {district}
          </option>
        ))}
         
        </select>
        {errors.selectedDistrict && (
            <p className="location-error" style={{color:"red"}}>*{errors.selectedDistrict}</p>
          )}</div>
    </div>
  );
}

export default GetLocation;
