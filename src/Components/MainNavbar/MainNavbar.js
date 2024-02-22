import React, { useState } from 'react';
import './MainNavbar.css';
import SwipeableTemporaryDrawer from './Drawer';
import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleNav = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`navbar ${isActive ? 'active' : ''}`}>
      <SwipeableTemporaryDrawer />
      <NavLink className="logo" to="">IntellFix</NavLink>
        <div className={`nav-links ${isActive ? 'active' : ''}`}>
          <NavLink className="pages" to="/Chatbot">Chatbot</NavLink>
          <NavLink className="pages" to="/Codefixer">Code Fixer</NavLink>
        </div>
    </div>
  );
};

export default Navbar;
