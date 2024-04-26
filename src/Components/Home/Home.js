import React from 'react';
import '../../App.css';
import './home.css'
import TitleComponent from '../Spline/title.js';
import Navbar from '../Navbars/MainNavbar.js';
import StrangerNavbar from '../Navbars/StrangerNavbar.js';

function Home() {
    return (
        <div className='home'>
            <StrangerNavbar />
            <TitleComponent />
        </div>
    );
}

export default Home;