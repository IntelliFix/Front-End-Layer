import React from 'react';
import '../../App.css';
import './home.css'
import Signup from '../Login-Signup/Signup.js';
import Login from '../Login-Signup/Login.js';

function Home() {
    return (
        <div className='home'>
            <Signup />
            <Login />
        </div>
    );
}

export default Home;