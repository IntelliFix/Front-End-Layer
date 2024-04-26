import React from 'react';
import './App.css';

import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home.js';
import Authentication from './Components/Login-Signup-Updated/authentication.js';
import Chatbot from './Components/Chatbot/Chatbot.js';
import Chat from './Components/Chatbot/ChatPage.jsx';
import Codefixer from './Components/Codefixer/CodeFixer.js';

import StrangerNavbar from './Components/Navbars/StrangerNavbar.js';
import Navbar from './Components/Navbars/MainNavbar.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Homepage() {
  console.log('token: ', localStorage.getItem('token'));

  return (
    <div className='main'>
      <Navbar />
    </div>
  );
}

export default Homepage;

