// Signup.js
import React, { useState } from 'react';
import ApiHandler from '../../ApiHandler/ApiHandler';
import { PasswordStrength } from './PasswordStrength'; // Corrected typo in component import

const Signup = ({ flipSignUp }) => {
  const [signUpName, setSignUpName] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [signUpPhoneNo, setSignUpPhoneNo] = useState('');
  const [signUpNameError, setSignUpNameError] = useState('');
  const [signUpEmailError, setSignUpEmailError] = useState('');
  const [signUpPasswordError, setSignUpPasswordError] = useState('');
  const [signUpPhoneNoError, setSignUpPhoneNoError] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    setSignUpNameError('');
    setSignUpEmailError('');
    setSignUpPasswordError('');
    setSignUpPhoneNoError('');
    console.log('signup');
    await ApiHandler.signup(signUpEmail, signUpPassword, signUpName, signUpPhoneNo, 
      setSignUpEmailError, setSignUpPasswordError, setSignUpNameError, setSignUpPhoneNoError);
  };

  return (
    <div className="card-front">
      <div className="right-half">
        <form>
          <input
            type="text"
            placeholder="Name"
            value={signUpName}
            onChange={(e) => setSignUpName(e.target.value)}
            required
          />
          <div className="name error">{signUpNameError}</div>
          <input
            type="text"
            placeholder="Phone Number"
            value={signUpPhoneNo}
            onChange={(e) => setSignUpPhoneNo(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={signUpEmail}
            onChange={(e) => setSignUpEmail(e.target.value)}
            required
          />
          <div className="email error">{signUpEmailError}</div>
          {/* <input
            type="password"
            placeholder="Password"
            value={signUpPassword}
            onChange={(e) => setSignUpPassword(e.target.value)}
            required
          />
          <div className="password error">{signUpPasswordError}</div> */}
          <PasswordStrength
            placeholder="Password"
            onChange={(value) => setSignUpPassword(value)} // Update the password state
          />
          <button type="button" onClick={handleSignUp}>Sign Up</button>
          <button type="button" onClick={flipSignUp}>Already Have Account?</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
