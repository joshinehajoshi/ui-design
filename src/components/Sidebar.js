import React from "react";
import "../styles/sidebar.css";

function Sidebar({ isOpen }) {
  return (
    <div className={`${isOpen ? "sidebar-wrapper" : "sidebar-none"}`}>
      <h3 className="logo">LOGO</h3>
    </div>
  );
}

export default Sidebar;
