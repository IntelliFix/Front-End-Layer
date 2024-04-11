import React, { useState } from "react";
import "./MainNavbar.css";
import SwipeableTemporaryDrawer from "./Drawer";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navbar = () => {
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
        <NavLink className="pages" to="/Chatbot">
          Chatbot v1
        </NavLink>
        <NavLink className="pages" to="/Test-Chatbot">
          Chatbot v2
        </NavLink>
        <NavLink className="pages" to="/Codefixer">
          Code Fixer
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
