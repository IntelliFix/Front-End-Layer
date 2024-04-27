import React from 'react';
import './App.css';

import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home.js';
import Homepage from './Friend.js';
import Authentication from './Components/Login-Signup-Updated/authentication.js';
import Chatbot from './Components/Chatbot/Chatbot.js';
import Chat from './Components/Chatbot/ChatPage.jsx';
import Codefixer from './Components/Codefixer/CodeFixer-page.js';

import StrangerNavbar from './Components/Navbars/StrangerNavbar.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className='main'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Authentication" element={<Authentication />} />
        <Route path="/Chatbot" element={<Chatbot />} />
        <Route path="/Test-Chatbot" element={<Chat />} />
        <Route path="/Codefixer" element={<Codefixer />} />
        <Route path="/Homepage" element={<Homepage />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;

