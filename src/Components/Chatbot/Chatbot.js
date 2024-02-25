import React from 'react';
import '../../App.css';
import Chatbot_Field from './Chatbot_TextField';
import Strings from '../../MyStrings.json';

function Chatbot() {
  return (
    <div className='body'>
      <h1 className='title'>{Strings.chat}</h1>
      <div className="chat-container">
        <Chatbot_Field />
      </div>
    </div>
  );
}

export default Chatbot;
