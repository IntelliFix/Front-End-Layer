import React from 'react';
import '../../App.css';
import Chatbot_Field from './Chatbot_TextField';
import Navbar from '../MainNavbar/MainNavbar.js';

function Chatbot() {
  return (
    <div className='main'> 
      <Navbar/>
      <div className='body'>
      <h1 className='title'>Welcome to InteliFix Chatbot</h1>
      <div className="chat-container">
      <Chatbot_Field />
      </div>
      </div>
    </div>
  );
}

export default Chatbot;
