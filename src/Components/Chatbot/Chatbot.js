import React from 'react';
import '../../App.css';
import Chatbot_Field from './Chatbot_TextField';
import Navbar from '../MainNavbar/MainNavbar.js';
import Strings from '../../MyStrings.json';

function Chatbot() {
  return (
    <div className='main'> 
      <Navbar/>
      <div className='body'>
      <h1 className='title'>{Strings.chat}</h1>
      <div className="chat-container">
      <Chatbot_Field />
      </div>
      </div>
    </div>
  );
}

export default Chatbot;
