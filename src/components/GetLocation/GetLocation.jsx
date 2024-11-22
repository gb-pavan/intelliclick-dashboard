import React, { useState } from "react";
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

function GetLocation() {

  
  const [selectedState, setSelectedState] = useState("");
  const [districts, setDistricts] = useState([]);
  
  const endpoint = "api/user/read/get-state-data?country=IN";
  const { data, loading, error } = useFetchData(endpoint);

  if (loading) return <ClipLoader color="#36d7b7" loading={true} size={30} />;
  if (error) return <p>Error: {error.message}</p>;
  const stateDistrictData = data || {};

  const handleStateChange = (event) => {
    const state = event.target.value;
    setSelectedState(state);
    setDistricts(stateDistrictData[state] || []);
  };

  return (
    <div className="get-location">
      <select id="state" value={selectedState} onChange={handleStateChange} className="form-input"  style={{ width: "312px" }} required>
          <option value="" disabled selected>
            Select State
          </option>
          {Object.keys(stateDistrictData).map((state) => (
          <option key={state} value={state}>
            {state}
          </option>
        ))}
        </select>

   
      

      <select id="district" className="form-input"  style={{ width: "312px" }} required>
          <option value="" disabled selected>
            Select District
          </option>
          
            {districts.map((district) => (
          <option key={district} value={district}>
            {district}
          </option>
        ))}
         
        </select>
    </div>
  );
}

export default GetLocation;
