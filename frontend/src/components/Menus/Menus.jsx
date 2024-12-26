import React from "react";
import "./Menus.css";
import {FcHome,FcAbout, FcPortraitMode, FcBiotech, FcReadingEbook, FcVideoProjector, FcBusinessContact} from 'react-icons/fc'

const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
        <div className="navbar-profile-pic">
          <img
            src="data:image/jpeg;base64,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"
            alt="profile pic"
          />
        </div>
        <div className="nav-items">
          <div className="nav-item">
            <div className="nav-link">
            <FcHome/>
            Home
            </div>
            <div className="nav-link">
            <FcAbout/>
            About
            </div>
            <div className="nav-link">
            <FcReadingEbook/>
            Education
            </div>
            
            <div className="nav-link">
            <FcBiotech/>
            Tech Stack
            </div>
            
            <div className="nav-link">
            <FcVideoProjector/>
            Projects
            </div>
            <div className="nav-link">
            <FcPortraitMode/>
            Work Experience
            </div>
            
            <div className="nav-link">
            <FcBusinessContact/>
            Contact
            </div>
            
          </div>
        </div>
        </>
      ) : (
        <>
        <div className="nav-items">
          <div className="nav-item">
            <div className="nav-link">
            <FcHome title="Home"/>
            
            </div>
            <div className="nav-link">
            <FcAbout title="About"/>
            
            </div>
            <div className="nav-link">
            <FcReadingEbook title="Education"/>
            
            </div>
            
            <div className="nav-link">
            <FcBiotech title="Tech Stack"/>
            
            </div>
            
            <div className="nav-link">
            <FcVideoProjector title="Projects"/>
           
            </div>
            
            <div className="nav-link">
            <FcPortraitMode title="Experience"/>
            
            </div>
            <div className="nav-link">
            <FcBusinessContact title="Contact"/>
            
            </div>
            
          </div>
        </div>
        </>
      )}
      
    </>
  );
};

export default Menus;
