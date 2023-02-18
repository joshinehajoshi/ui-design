import React from "react";
import "../assets/styles/sidebar.css";

function Sidebar({ isOpen }) {
  return (
    <div className={`${isOpen ? "sidebar-wrapper" : "sidebar-none"}`}>
      <h3 className="logo">LOGO</h3>
      <div>
      <ul className="side-bar-list">
        <li>111111111</li>
        <li>111111111</li>
        <li>111111111</li>
        <li>111111111</li>
        <li>111111111</li>
      </ul>
      </div>
      <div className="sidebar-footer">
        <h4>Hello</h4>
      </div>
    </div>
  );
}

export default Sidebar;




