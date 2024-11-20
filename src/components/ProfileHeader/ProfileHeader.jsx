import React from 'react';
import { IoClose } from "react-icons/io5";
import { FaToggleOff } from "react-icons/fa6";
import { IoMenu } from "react-icons/io5";
import './ProfileHeader.css'

function ProfileHeader({ isOpen, toggleSidebar }){
    return (
        <div className='profile-header-container'>
            <div className="c-logo-container">
                <img src="./logo.svg" alt="logo" />                
            </div>
            <div className="profile-logo-container">
                <div className="menu-icon-container">              
                    <IoMenu size={30} onClick={toggleSidebar} style={{ cursor: 'pointer' }} />                
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