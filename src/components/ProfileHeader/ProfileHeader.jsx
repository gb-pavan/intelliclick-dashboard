import React from 'react';
import { IoClose } from "react-icons/io5";
import { FaToggleOff } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import './ProfileHeader.css'

function ProfileHeader(){
    return (
        <div className='profile-header'>
           <div className="profile-logo">
                <img src="./logo.svg" alt="logo" />
                {/* <IoClose size={30} /> */}
           </div> 
            <div className="profile-box">
                <div className="menu-icon-side">
                    <IoMenu size={30} style={{ cursor: 'pointer' }} />                        
                    <p>Incentive</p>
                    <FaToggleOff color='blue' size={25}/>
                </div>
                <div>
                    <img src='./Ellipse.svg' alt="profile-image" className="profile-img" />
                </div>
          </div>
        </div>
    ) 
}

export default ProfileHeader;