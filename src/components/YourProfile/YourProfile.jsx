import React from "react";
import dateFormat, { masks } from "dateformat";
import DropdownButton from "../DropdownButton/DropdownButton";
import ProfilePage from "../ProfilePage/ProfilePage";
import BackPage from "../BackPage/BackPage";
// const EmployePage = ({ userData, frontRef, downloadHandler, backRef }) => {
//   const formatDate = (date) => {
//     return date ? dateFormat(new Date(date), "mm/dd/yyyy") : "";
//   };
//   return (
//     <div
//       className=" relative m-4 h-[750px] pb-5  gap-0 rounded-[10px]  bg-[#FFFFFF] border border-[#FCFCFCCC]"
//       style={{
//         boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)", // Bottom shadow
//       }}
//     >
//       <div className="flex">
     
//           <div className=" relative  ml-[29px] mt-[12px]">
//             <img
//               className="w-[122px] h-[117px] rounded-full"
//               src="./Group.png"
//               alt="profile pic"
//             />
//             <div className=" flex items-center justify-center rounded-full w-[35px] h-[36px] bg-[#FBE8FF] absolute top-20 right-0 opacity-50"></div>
//             <img
//               className=" w-[16.52px] h-[18.42px] absolute top-[88px] right-2 z-50"
//               src="./Icon.png"
//               alt="icon"
//             />
//           </div>
    

//         <div className="flex flex-col ml-[22px] mt-[47px]">
//           <p className=" w-[182px] h-[23px] font-medium font-roboto capitalize">
//             {userData?.name || "sumit kumar"}
//           </p>
//           <span className="w-[309px] h-[19px] font-roboto opacity-50 font-normal text-[16px] capitalize">
//             {userData?.designation || "manager"}
//           </span>
//         </div>
//       </div>

//       {/* //form */}
//       <div className="flex  mt-[82px] ml-[29px] space-x-[308px] ">
//         <div className=" flex flex-col space-y-[40px]">
//           <div>
//             <p className="font-roboto text-[16px] font-[400px] text-[ #000000] opacity-80">
//               Full Name
//             </p>
//             <div className="w-[322px]  mt-[16px] h-[52px] bg-[#F9F9F9] text-[16px] pl-[14px] py-[14px] font-normal text-[ #000000] rounded-[8px] font-poppins">
//               <div className="opacity-40 font-poppins">{userData?.name || "sumit kumar"}</div>
//             </div>
//           </div>
//           <div>
//             <p className="font-roboto text-[16px] font-[400px] text-[ #000000] opacity-80">
//               Official mail
//             </p>
//             <div className="w-[322px] mt-[16px] h-[52px] bg-[#F9F9F9] text-[16px] pl-[14px] py-[14px] font-[400px] text-[ #000000] rounded-[8px] font-poppins">
//               <div className="opacity-40 font-poppins">{userData?.email || "sumit kumar@gmail"}</div>
//             </div>
//           </div>
//           <div>
//             <p className="font-robototext-[16px] font-[400px] text-[ #000000] opacity-80">
//               DOB
//             </p>
//             <div className="w-[322px] mt-[16px] h-[52px] bg-[#F9F9F9] text-[16px] pl-[14px] py-[14px] font-[400px] text-[ #000000] rounded-[8px] font-poppins">
//               <div className="opacity-40 font-poppins">
//                 {formatDate(userData?.dateOfBirth) || "11/11/2004"}
//               </div>
//             </div>
//           </div>
//           <div>
//             <p className="font-robototext-[16px] font-[400px] text-[ #000000] opacity-80">
//               Reporting Manager
//             </p>
//             <div className="w-[322px] mt-[16px] h-[52px] bg-[#F9F9F9] text-[16px] pl-[14px] py-[14px] font-[400px] text-[ #000000] rounded-[8px] font-poppins">
//               <div className="opacity-40 font-poppins">
//                 {userData?.reportingManager || "santosh kumar"}
//               </div>
//             </div>
//           </div>
//         </div>
//         <div>
//           <div className="flex flex-col space-y-[40px]">
//             <div>
//               <p className="font-robototext-[16px] font-[400px] text-[ #000000] opacity-80">
//                 Employee Id
//               </p>
//               <div className="w-[322px] mt-[16px] h-[52px] bg-[#F9F9F9] text-[16px] pl-[14px] py-[14px] font-[400px] text-[ #000000] rounded-[8px] font-poppins">
//                 <div className="opacity-40 font-poppins">
//                   {userData?.idNumber || "IPL12345654127"}
//                 </div>
//               </div>
//             </div>
//             <div>
//               <p className="font-robototext-[16px] font-[400px] text-[ #000000] opacity-80">
//                 Mobile Number
//               </p>
//               <div className="w-[322px] mt-[16px] h-[52px] bg-[#F9F9F9] text-[16px] pl-[14px] py-[14px] font-[400px] text-[ #000000] rounded-[8px] font-poppins">
//                 <div className="opacity-40 font-poppins">{userData?.phone || "1234567890"}</div>
//               </div>
//             </div>
//             <div>
//               <p className="font-robototext-[16px] font-[400px] text-[ #000000] opacity-80">
//                 DOJ
//               </p>
//               <div className="w-[322px] mt-[16px] h-[52px] bg-[#F9F9F9] text-[16px] pl-[14px] py-[14px] font-[400px] text-[ #000000] rounded-[8px] font-poppins">
//                 <div className="opacity-40 font-poppins">
//                   {formatDate(userData?.dateOfJoining) || "11/11/2009"}
//                 </div>
//               </div>
//             </div>
//             <div>
//               <p className="font-robototext-[16px] font-[400px] text-[ #000000] opacity-80">
//                 HRBP
//               </p>
//               <div className="w-[322px] mt-[16px] h-[52px] bg-[#F9F9F9] text-[16px] pl-[14px] py-[14px] font-[400px] text-[ #000000] rounded-[8px] font-poppins">
//                 <div className="opacity-40 font-poppins">{userData?.HRBP || "hardipsingh"}</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className=" absolute  sm:top-[34px] sm:right-[17px]">
//         <ProfilePage userData={userData} pageRef={frontRef} />
//         <DropdownButton onSelect={(format) => downloadHandler(format)} />
//       </div>

      
//     </div>
//   );
// };

// export default EmployePage;


const EmployePage = ({ userData, frontRef, downloadHandler }) => {
  const formatDate = (date) => {
    return date ? dateFormat(new Date(date), "mm/dd/yyyy") : "";
  };

  return (
    
    <div className="rounded-lg bg-[#FFFFFF] border border-[#FCFCFCCC] shadow-lg flex flex-col sm:flex-row  m-2 sm:m-5 w-90">
      <div className="flex-1 flex-col items-center sm:items-start p-4 m-2 sm:m-4">
        {/* Profile Picture and User Info */}
        <div className="flex flex-col sm:flex-row items-center justify-start mb-5 w-full">
          {/* Profile Picture */}
          <div className="relative">
            <img
              className="w-24 h-24 sm:w-32 sm:h-32 rounded-full"
              src="src/images/Group.png"
              alt="profile pic"
            />
            <div className="flex items-center justify-center rounded-full w-9 h-9 bg-[#FBE8FF] absolute top-14  sm:top-20 right-0 opacity-50"></div>
            <img
              className="w-4 h-4 absolute top-[66px] right-[7px] sm:top-[89px] sm:right-2 z-50"
              src="src/images/Icon.png"
              alt="icon"
            />
          </div>

          {/* User Info */}
          <div className="text-center  sm:text-left sm:ml-6">
            <p className="text-lg sm:text-xl font-medium capitalize">
              {userData?.name || "Sumit Kumar"}
            </p>
            <span className="text-sm sm:text-base opacity-50 capitalize">
              {userData?.designation || "Manager"}
            </span>
          </div>
        </div>

        {/* User Information Fields */}
        <div className=" grid grid-cols-1 sm:grid-cols-2 mt-[82px] gap-[38px] ">
          {[
            { label: "Full Name", value: userData?.name || "Sumit Kumar" },
            {
              label: "Employee ID",
              value: userData?.idNumber || "IPL12345654127",
            },
            {
              label: "Official Mail",
              value: userData?.email || "sumitkumar@gmail.com",
            },
            { label: "Mobile Number", value: userData?.phone || "1234567890" },
            {
              label: "DOB",
              value: formatDate(userData?.dateOfBirth) || "11/11/2004",
            },
            {
              label: "DOJ",
              value: formatDate(userData?.dateOfJoining) || "11/11/2009",
            },
            {
              label: "Reporting Manager",
              value: userData?.reportingManager || "Santosh Kumar",
            },
           
           
           
            { label: "HRBP", value: userData?.HRBP || "Hardip Singh" },
            { label: "Location", value: userData?.location || "New Delhi" },
          ].map((field, index) => (
            <div key={index}>
              <p className="text-sm sm:text-base font-roboto text-[16px] font-[400px] text-[#000000] opacity-80">
                {field.label}
              </p>
              <div className="w-full mt-[16px] p-4 bg-gray-100 text-[16px] text-[ #000000] rounded-[8px] opacity-40 font-poppins">
                {field.value}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:items-start sm:justify-end sm:ml-auto p-2 sm:p-5">
        <ProfilePage userData={userData} pageRef={frontRef} />
        <DropdownButton onSelect={(format) => downloadHandler(format)} />
      </div>
    </div>
  );
};

export default EmployePage;