import React, { useState } from 'react';
import './Button_Bar.css'; // Import CSS file for styling

const ButtonBar = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonName) => {
    setSelectedButton(buttonName);
  };

  return (
    <div className='button-container'>
      {/* <div className='views'>
        <button>Buggy</button>
        <button>Side-by-Side</button>
        <button>Corrected</button>
      </div>  */}

      <div className="button-bar">
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
