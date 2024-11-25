import React from "react";
import "./LeadStats.css"

const LeadStats = () => {
  const stats = [
    { title: "Total Leads", value: 0, color: "#F2F7FD", textColor: "#212529" },
    { title: "Qualified", value: 69, color: "#F0FDF4", textColor: "#15803D" },
    { title: "Follow up", value: 55, color: "#FFFBEB", textColor: "#92400E" },
    { title: "Enrolled", value: 13, color: "#FEF4FF", textColor: "#AB1CAF" },
    { title: "Not Qualified", value: 3, color: "#FEF2F2", textColor: "#B91C1C" },
  ];

  return (
    <div className="lead-stats-container">
      {stats.map((stat, index) => (
        <div
          key={index}
          // className={`p-4 rounded-md shadow-md ${stat.color} text-center`}
          className="lead-stats"
          style={{ minWidth: "100px",backgroundColor: stat.color, color:stat.textColor }}
        >
          <h3>{stat.title}</h3>
          <p>{stat.value}</p>
        </div>
      ))}
    </div>
  );
};

export default LeadStats;
