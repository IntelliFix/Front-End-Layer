import React from 'react';
import './App.css';
import Chatbot from './Components/Chatbot/Chatbot.js';
import Codefixer from './Components/Codefixer/CodeFixer.js';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/MainNavbar/MainNavbar.js';

function App() {
  return (
    <div className='main'>
      <Navbar/>
      <Routes>
        <Route path="/Chatbot" element={<Chatbot/>} />
        <Route path="/Codefixer" element={<Codefixer/>} />
      </Routes>
    </div>
  );
}

export default App;

