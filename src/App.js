import React from 'react';
import './App.css';
import Chatbot from './Components/Chatbot/Chatbot.js';
import Codefixer from './Components/Codefixer/CodeFixer.js';

function App() {
  return (
    <div className='main'> 
      <Chatbot/>
      {/* <Codefixer/> */}
    </div>
  );
}

export default App;
