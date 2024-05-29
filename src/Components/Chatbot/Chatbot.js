import React from 'react';
import '../../App.css';
import Chatbot_Field from './Chatbot_TextField';
import Strings from '../../MyStrings.json';

export const Chatbot=() =>{
  return (
    <div className='body padded-bottom' >
      <h1 className='title' style={{paddingTop:'150px' }}>{Strings.chat}</h1>
      <div className="chat-container" >
        
        <Chatbot_Field />
      </div>
    </div>
  );
}

