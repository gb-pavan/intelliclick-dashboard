import React from "react";
import "./LeadStats.css"

const LeadStats = ({totalLeads,tableRows}) => {

  const qualified = tableRows?.filter(row => row.status.toLowerCase()==="qualified").length;
  const followUp = tableRows?.filter(row => row.status.toLowerCase().replace(" ","-")==="follow-up").length;
  const enrolled = tableRows?.filter(row => row.status.toLowerCase()==="enrolled").length;
  const notQualified = tableRows?.filter(row => row.status.toLowerCase().replace(" ","-")==="not-qualified").length;

  const stats = [
    { title: "Total Leads", value: totalLeads, color: "#F2F7FD", textColor: "#212529" },
    { title: "Qualified", value: qualified, color: "#F0FDF4", textColor: "#15803D" },
    { title: "Follow up", value: followUp, color: "#FFFBEB", textColor: "#92400E" },
    { title: "Enrolled", value: enrolled, color: "#FEF4FF", textColor: "#AB1CAF" },
    { title: "Not Qualified", value: notQualified, color: "#FEF2F2", textColor: "#B91C1C" },
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
