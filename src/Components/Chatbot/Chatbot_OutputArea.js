import React from 'react';
import PropTypes from 'prop-types';
import './Chatbot_OutputArea.css';

const ChatBubble = ({ text, type }) => (
  <div style={{ textAlign: type === 'user' ? 'right' : 'left', margin: '5px' }}>
    <div className={`chat-bubble ${type === 'user' ? 'user-bubble' : 'other-bubble'}`}>
      {text}
    </div>
  </div>
);

ChatBubble.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

const ChatArea = ({ messages }) => (
  <div className="chat-area">
    {messages.map((message, index) => (
      <ChatBubble key={index} text={message.text} type={message.type}/>
    ))}
  </div>
);

ChatArea.propTypes = {
  messages: PropTypes.array.isRequired,
};

export default ChatArea;
