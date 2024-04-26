import React from 'react';
import '../../App.css';
import Chatbot_Field from './Chatbot_TextField';
import Strings from '../../MyStrings.json';
import Navbar from '../Navbars/MainNavbar';

function Chatbot() {
  return (
    <div className='body'>
      <Navbar />
      <h1 className='title'>{Strings.chat}</h1>
      <div className="chat-container">
        <Chatbot_Field />
      </div>
    </div>
  );
}

export default Chatbot;
