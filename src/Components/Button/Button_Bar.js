import React, { useState, useEffect } from 'react';
import './Button_Bar.css'; // Import CSS file for styling


const ButtonBar = ({ handleModeChange }) => {
    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (buttonName) => {
        handleModeChange(buttonName);
        setSelectedButton(buttonName);
    };

    // Use useEffect to call handleButtonClick on component mount
    useEffect(() => {
        handleButtonClick('Side-by-Side');
    }, []); // Empty dependency array ensures this runs only once when the component mounts

    return (
        <div className='button-container' >
            <div className="button-bar" >
                <button
                    className={selectedButton === 'Buggy' ? 'selected' : ''}
                    onClick={() => handleButtonClick('Buggy')}
                >
                    Buggy
                </button>
                <button
                    className={selectedButton === 'Side-by-Side' ? 'selected' : ''}
                    onClick={() => handleButtonClick('Side-by-Side')}
                >
                    Side-by-Side
                </button>
                <button
                    className={selectedButton === 'Corrected' ? 'selected' : ''}
                    onClick={() => handleButtonClick('Corrected')}
                >
                    Corrected
                </button>

            </div>
        </div>
    );
};

export default ButtonBar;