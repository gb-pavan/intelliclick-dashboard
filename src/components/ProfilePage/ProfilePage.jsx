import React, { useRef } from "react";

import CombinedLayerSvg from "../../assets/PinkLayer.jsx";

import CombinedIcon from "../../assets/CombinedIcon.jsx";
const ProfilePage = ({ userData, pageRef }) => {
  return (
    <div
      ref={pageRef}
      className="relative  w-[186.83px]  h-[380.38px]  rounded-none pb-9 mt-5 overflow-hidden  bg-[url('/src/assets/background.svg')] bg-cover bg-no-repeat  -translate-x-px -translate-y-px"
      style={{
        boxShadow: "0px 4px 5px rgba(0, 0, 0, 0.2), 4px 0px 6px rgba(0, 0, 0, 0), -4px 0px 6px rgba(0, 0, 0, 0)",
      }}
    >
      {/* Background Image */}
      <div className="absolute w-full  h-full inset-0 bg-[url('/src/assets/background.svg')] bg-cover bg-no-repeat  -translate-x-px -translate-y-px "></div>

      {/* Top Half Overlay */}
      <div className="absolute w-full inset-x-0 top-0 h-1/2 bg-[#FCFCFC]"></div>

      {/* Bottom Half Overlay with Opacity */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-[#FCFCFC] opacity-55"></div>

      {/* Content Container */}
      <div className="relative z-10 space-y-4 w-full">
        <CombinedIcon />
       
              
        {/* changed mx-auto */}

        <div className="relative  flex items-center justify-center ">                     
          <CombinedLayerSvg />
          <div className="rounded-full">
            {userData?.photo && (
              <img
                src={`http://localhost:5000/${userData?.photo}`}
                alt="User Profile Photo"
                className="mt-2 absolute left-1/2 top-[45%] rounded-full transform -translate-x-1/2 -translate-y-1/2 w-[92.86px] h-[92.86px] object-cover z-10"
              />
            )}
          </div>
        </div>

        {/* User Name */}

        <p className="text-center text-sm font-roboto  font-bold uppercase text-[#D029D8]">
          {userData?.name} 
        </p>

        {/* Alpha Icon */}
        <div
           className="font-extrabold"
          style={{
            width: "99.85px",
            height: "19.56px",
            lineHeight: "19.56px", // Ensure vertical centering
            textAlign: "center",
            backgroundColor: "#2985D6",
            borderRadius: "20px",
            margin: "11.11px auto", // Center horizontally with margin
             fontSize: "11px",
            color: "#FFFFFF",
            textTransform: "uppercase",
            letterSpacing: "0.9px",
            
          }}
        >
          {userData?.designation} Manager
        </div>

        {/* User Details */}
        <div className="flex flex-col space-y-0.5 ml-[31.85px] mr-[51.81px] font-roboto">
          <div
            className="flex font-normal space-x-2 "
            style={{ fontSize: "9px" }}
          >
            <div className="  text-[#000000] text-nowrap">ID No:</div>
            <div className=" text-[#000000] mt-[0.01rem]">{userData?.idNumber}</div>
          </div>
          <div className=" flex space-x-[6px] " style={{ fontSize: "9px" }}>
            <div className=" text-nowrap text-[#000000]">E-mail:</div>
            <div className=" text-wrap text-[#000000] break-words max-w-[122px]  mt-[0.01rem] ">
              {userData?.email}
            </div>
          </div>
          <div className="flex  space-x-[5px] mt-1 " style={{ fontSize: "9px" }}>
            <div className=" text-[#000000]">Phone:</div>
            <div className=" text-[#000000] mt-[0.02rem]">{userData?.phone}</div>
          </div>
          <div className="flex  space-x-2 mt-2 " style={{ fontSize: "9px" }}>
            <div className=" text-[#000000]">Blood:</div>
            <div className=" text-[#000000] mt-[0.02rem] ">
              {userData?.bloodGroup}
            </div>
          </div>
        </div>
        {/* QR Code */}
        <div className=" flex justify-center mb-10 ">
          <img
            src={userData?.qrCode}
            alt="User QR Code"
            className="w-[36.58px] h-[36.58px]"
          />
        </div>

        {/* Footer */}
        <div className="relative font-roboto">
          <div
            style={{ fontSize: "9px" }}
            className="absolute bottom-[0.1px] left-14   font-bold text-[#000000]"
          >
            <p>www.intelliclick.in</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;