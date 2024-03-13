import React, { useState, useEffect } from 'react';
import './authentication.css'; // Import CSS file for styling

const Authentication = () => {
  const [isBehind, setisBehind] = useState(false);
  const [isLoginFlipped, setIsLoginFlipped] = useState(false);
  const [begin, setBegin] = useState(true);
  console.log("flipped", isBehind);
    console.log("begin", begin);

  const flipSignUp = () => {
    setBegin(false);
    setisBehind(!isBehind);
    // console.log("flipped", isBehind);
    // console.log("begin", begin);

  };

  // const handleLoginClick = () => {
  //   setIsLoginFlipped(!isLoginFlipped);
  // };

  return (
    <div className="authentication-container">
      <div className="card-container">
        {/* Login Card */}
        <div className={`card login-card ${isLoginFlipped ? 'is-flipped' : ''}`}>
          <div className="card-front">
            <div className="left-half">
              <h2>Welcome Back!</h2>
              <p>Please login to access your account.</p>
            </div>
            <div className="right-half">
              <form>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button type="button" >Login</button>
                <button type="button" onClick={flipSignUp}>New Account?</button>


              </form>
            </div>
          </div>

          <div className="card-back">
            <h2>Forgot Password?</h2>
            <p>No worries, we got you covered</p>
            <button type="button" >Back to Login</button>

          </div>
        </div>

        {/* Signup Card */}
        <div className={`card signup-card ${
          begin ? '' :
          isBehind ? 'is-behind' : 'is-front'
        }`}>
            
          <div className="card-front">
         
            <div className="right-half">
              <form>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button type="button" >Sign Up</button>
                <button type="button" onClick={flipSignUp}>Already Have Account?</button>
              </form>
            </div>
          </div>

          <div className="card-back">
            <h2>Thank you for signing up!</h2>
            <p>Back to Login</p>
            <button type="button" onClick={flipSignUp}>Back to Signup</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Authentication;

