import React from 'react';
import '../../App.css';
import './home.css'
import TitleComponent from '../Spline/title.js';
import StrangerNavbar from '../Navbars/StrangerNavbar.js';

function Home() {
    return (
        <div className='main'>
            <StrangerNavbar />
            <TitleComponent />
        </div>
    );
}

export default Home;