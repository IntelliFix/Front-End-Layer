import React from 'react';
import './App.css';
import MultilineTextFields from './MultilineTextFields'; 

function App() {
  return (
    <div className="body">
      <h1 className='title'>Welcome to InteliFix Chatbot</h1>
      <div className="chat-container">
      <MultilineTextFields />
      </div>
    </div>
  );
}

export default App;
