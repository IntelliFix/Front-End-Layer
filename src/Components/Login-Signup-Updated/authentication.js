// Authentication.js
import React, { useState } from 'react';
import './authentication.css';
import Login from './Login';
import Signup from './Signup';

const Authentication = () => {
  const [isBehind, setIsBehind] = useState(false);
  const [isLoginFlipped, setIsLoginFlipped] = useState(false);
  const [begin, setBegin] = useState(true);

  const flipSignUp = () => {
    setBegin(false);
    setIsBehind(!isBehind);
  };

  return (
    <div className="authentication-container">
      <div className="card-container">
        {/* Login Card */}
        <div className={`card login-card ${isLoginFlipped ? 'is-flipped' : ''}`}>
          <Login flipSignUp={flipSignUp} />
          {/* Add your back to login button here */}
        </div>

        {/* Signup Card */}
        <div className={`card signup-card ${begin ? '' : isBehind ? 'is-behind' : 'is-front'}`}>
          <Signup flipSignUp={flipSignUp} />
          {/* Add your back to signup button here */}
        </div>
      </div>
    </div>
  );
};

export default Authentication;
