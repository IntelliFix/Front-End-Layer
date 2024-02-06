import React, { useState } from 'react';
import './MainNavbar.css';
import SwipeableTemporaryDrawer from './Drawer';


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
          <a href="#chatbot">Chatbot</a>
          <a href="#chatfixer">Code Fixer</a>
        </div>
    </div>
  );
};

export default Navbar;
