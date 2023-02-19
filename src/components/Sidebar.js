import React from "react";
import "../assets/styles/sidebar.css";
import {sideBarData} from '../Data/sideBarData';
import headphones from '../assets/images/headphones.png'

function Sidebar({ isOpen }) {
  return (
    <div className={`${isOpen ? "sidebar-wrapper" : "sidebar-none"}`}>
      <h3 className="logo">LOGO</h3>
      <div>
      <ul className="side-bar-list">
        {sideBarData?.map((item) => {
          return(
            <>
            <li><img src={item.img}/>{item.title}</li>
            </>
          )
        })}
      </ul>
      </div>
      <div className="sidebar-footer">
        <ul >
          <li className="footer-element"><img className="headphones" src={headphones}/>27/4 Support</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;




