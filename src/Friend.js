import React from 'react';
import './App.css';
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

