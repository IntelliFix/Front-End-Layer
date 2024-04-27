import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar/NavBar.js";
import { Landing } from './components/Landing/Landing.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter
import {Chat} from './components/Chatbot/ChatPage.jsx'
import { Authentication } from './components/Authentication/Authentication.js';

import React from 'react';
import Codefixer from './components/Codefixer/Codefixer';
function App() {
  return (
    <Router> {/* Wrap the entire component tree with Router */}
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Landing />} /> {/* Use element prop instead of component */}
          <Route path='/Chatbot' element={<Chat/>}/>
          <Route path='/Authentication' element={<Authentication/>}/>
          <Route path='/Codefixer' element={<Codefixer/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
