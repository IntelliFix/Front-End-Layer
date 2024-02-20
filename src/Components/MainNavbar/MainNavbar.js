import React, { useState } from 'react';
import './MainNavbar.css';
import SwipeableTemporaryDrawer from './Drawer';
import { NavLink } from 'react-bootstrap';


const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleNav = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`navbar ${isActive ? 'active' : ''}`}>
        <SwipeableTemporaryDrawer/>
        <div className="logo">IntellFix</div>
        <div className={`nav-links ${isActive ? 'active' : ''}`}>
          <a href="..\Chatbot\Chatbot.js">Chatbot</a>
          <a href="..\Codefixer\Codefixer.js">Code Fixer</a>
        </div>
    </div>
  );
};

export default Navbar;
