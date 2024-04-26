import React, { useState } from "react";
import "./Navbars.css";
import SwipeableTemporaryDrawer from "./Drawer";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const StrangerNavbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleNav = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`navbar ${isActive ? "active" : ""}`}>
      <div style={{ display: "flex" }}>
        <SwipeableTemporaryDrawer />
        <NavLink className="logo" to="/Home">
          IntelliFix.
        </NavLink>
      </div>
      <div className={`nav-links ${isActive ? "active" : ""}`}>
        <NavLink className="pages" to="/Authentication">
          Login/Signup
        </NavLink>
      </div>
    </div>
  );
};

export default StrangerNavbar;
