import React, { useEffect } from "react";
import "./LeadStats.css"
import useFetchData from "../../hooks/useFetchData";


const LeadStats = ({totalLeads,tableRows}) => {

  const endpoint = "api/lead-app/lead/read/get-lead-kpis";
  const { data, loading, error } = useFetchData(endpoint);


  const qualified = data?.find(item => item._id === "Qualified")?.count;
  const prospect = data?.find(item => item._id === "prospect")?.count;
  const followUp = data?.find(item => item._id === "Follow-up")?.count;
  const enrolled = data?.find(item => item._id === "Enrolled")?.count;
  const trialBooked = data?.find(item => item._id === "Trial Booked")?.count;
  const notQualified = 1;

  console.log("qualified,followUp,enrol",data);

  const stats = [
    { title: "Total Leads", value: totalLeads, color: "#F2F7FD", textColor: "#212529" },
    { title: "Qualified", value: qualified, color: "#F0FDF4", textColor: "#15803D" },
    { title: "Follow up", value: followUp, color: "#FFFBEB", textColor: "#92400E" },
    { title: "Trial Booked", value: trialBooked, color: "#FEF2F2", textColor: "#B91C1C" },
    { title: "Enrolled", value: enrolled, color: "#FEF4FF", textColor: "#AB1CAF" },
    { title: "Not Qualified", value: notQualified, color: "#FEF2F2", textColor: "#B91C1C" },
    
  ];

  

  useEffect(()=>{
    console.log("i am working");    
  },[])

  return (
    <div className="lead-stats-container">
      {stats.map((stat, index) => (
        <div
          key={index}
          // className={`p-4 rounded-md shadow-md ${stat.color} text-center`}
          className="lead-stats"
          style={{ minWidth: "100px",backgroundColor: stat.color, color:stat.textColor }}
        >
          <h3 style={{fontSize:stat.title.length > 10? "21px":""}}>{stat.title}</h3>
          <p>{stat.value}</p>
        </div>
      ))}
    </div>
  );
};

export default LeadStats;
