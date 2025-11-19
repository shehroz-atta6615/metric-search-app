import React from 'react';
import './Navbar.css';
import image1 from "../../images/metric-logo.png";
import { FaLinkedin } from "react-icons/fa";
import { CgMenuGridR } from "react-icons/cg";

export default function Navbar() {
  return (
      <div className='container1'>
      <div className='navbar'>
        <div className="metric-logo">
          <img src={image1} alt="Metric Logo"  />
        </div>
          <div className='button-container'>
            <button className="btn linkedin">
                <FaLinkedin className="icon linkedin-icon" />
              </button>
              <button className="btn menu">
              <span className='menu-text'>MENU</span>
                <CgMenuGridR className="icon menu-icon" />
            </button>
          </div>
       </div>
    </div>

  )
}

