import React from "react";
import dateFormat, { masks } from "dateformat";
// import icon from "../images/icon.png";
import DropdownButton from "../DropdownButton/DropdownButton";
import ProfilePage from "../ProfilePage/ProfilePage";
import BackPage from "../BackPage/BackPage";
const YourProfile = ({ userData, frontRef, downloadHandler, backRef }) => {
  const formatDate = (date) => {
    return date ? dateFormat(new Date(date), "mm/dd/yyyy") : "";
  };
  return (
    <div
      className="w-[1152px] h-[856px]  gap-0 rounded-[10px]  bg-[#FFFFFF] border border-[#FCFCFCCC]"
      style={{
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.15)", // Bottom shadow
      }}
    >
      <div className="flex">
        {userData?.photo && (
          <div className=" relative  ml-[29px] mt-[12px]">
            <img
              className="w-[122px] h-[117px] rounded-full"
              src={`http://localhost:5000/${userData?.photo}`}
              alt="profile pic"
            />
            <div className=" flex items-center justify-center rounded-full w-[35px] h-[36px] bg-[#FBE8FF] absolute top-20 right-0 opacity-50"></div>
            <img
              className=" w-[16.52px] h-[18.42px] absolute top-[88px] right-2 z-50"
              src="./icon.png"
              alt="icon"
            />
          </div>
        )}

        <div className="flex flex-col ml-[22px] mt-[47px]">
          <p className=" w-[182px] h-[23px] font-medium font-roboto capitalize">
            {userData?.name}
          </p>
          <span className="w-[309px] h-[19px] font-roboto opacity-50 font-normal text-[16px] capitalize">
            {userData?.designation}
          </span>
        </div>
      </div>

      {/* //form */}
      <div className="flex  mt-[82px] ml-[29px] space-x-[38px] ">
        <div className=" flex flex-col space-y-[40px]">
          <div>
            <p className="font-roboto text-[16px] font-[400px] text-[ #000000] opacity-80">
              Full Name
            </p>
            <div className="w-[322px]  mt-[16px] h-[52px] bg-[#F9F9F9] text-[16px] pl-[14px] py-[14px] font-normal text-[ #000000] rounded-[8px] font-poppins">
              <div className="opacity-40 font-poppins">{userData?.name}</div>
            </div>
          </div>
          <div>
            <p className="font-roboto text-[16px] font-[400px] text-[ #000000] opacity-80">
              Official mail
            </p>
            <div className="w-[322px] mt-[16px] h-[52px] bg-[#F9F9F9] text-[16px] pl-[14px] py-[14px] font-[400px] text-[ #000000] rounded-[8px] font-poppins">
              <div className="opacity-40 font-poppins">{userData?.email}</div>
            </div>
          </div>
          <div>
            <p className="font-robototext-[16px] font-[400px] text-[ #000000] opacity-80">
              DOB
            </p>
            <div className="w-[322px] mt-[16px] h-[52px] bg-[#F9F9F9] text-[16px] pl-[14px] py-[14px] font-[400px] text-[ #000000] rounded-[8px] font-poppins">
              <div className="opacity-40 font-poppins">
                {formatDate(userData?.dateOfBirth)}
              </div>
            </div>
          </div>
          <div>
            <p className="font-robototext-[16px] font-[400px] text-[ #000000] opacity-80">
              Reporting Manager
            </p>
            <div className="w-[322px] mt-[16px] h-[52px] bg-[#F9F9F9] text-[16px] pl-[14px] py-[14px] font-[400px] text-[ #000000] rounded-[8px] font-poppins">
              <div className="opacity-40 font-poppins">
                {userData?.reportingManager}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col space-y-[40px]">
            <div>
              <p className="font-robototext-[16px] font-[400px] text-[ #000000] opacity-80">
                Employee Id
              </p>
              <div className="w-[322px] mt-[16px] h-[52px] bg-[#F9F9F9] text-[16px] pl-[14px] py-[14px] font-[400px] text-[ #000000] rounded-[8px] font-poppins">
                <div className="opacity-40 font-poppins">
                  {userData?.idNumber}
                </div>
              </div>
            </div>
            <div>
              <p className="font-robototext-[16px] font-[400px] text-[ #000000] opacity-80">
                Mobile Number
              </p>
              <div className="w-[322px] mt-[16px] h-[52px] bg-[#F9F9F9] text-[16px] pl-[14px] py-[14px] font-[400px] text-[ #000000] rounded-[8px] font-poppins">
                <div className="opacity-40 font-poppins">
                  {userData?.phone}
                </div>
              </div>
            </div>
            <div>
              <p className="font-robototext-[16px] font-[400px] text-[ #000000] opacity-80">
                DOJ
              </p>
              <div className="w-[322px] mt-[16px] h-[52px] bg-[#F9F9F9] text-[16px] pl-[14px] py-[14px] font-[400px] text-[ #000000] rounded-[8px] font-poppins">
                <div className="opacity-40 font-poppins">
                  {formatDate(userData?.dateOfJoining)}
                </div>
              </div>
            </div>
            <div>
              <p className="font-robototext-[16px] font-[400px] text-[ #000000] opacity-80">
                HRBP
              </p>
              <div className="w-[322px] mt-[16px] h-[52px] bg-[#F9F9F9] text-[16px] pl-[14px] py-[14px] font-[400px] text-[ #000000] rounded-[8px] font-poppins">
                <div className="opacity-40 font-poppins">
                  {userData?.HRBP}
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <ProfilePage userData={userData} pageRef={frontRef} />
        {/* <div >
          <BackPage pageRef={backRef} />
        </div> */}
      </div>
      <DropdownButton onSelect={(format) => downloadHandler(format)} />
    </div>
  );
};

export default YourProfile;