// Signup.js
import React, { useState } from 'react';

const Signup = ({ flipSignUp }) => {
  const [signUpName, setSignUpName] = useState('');
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');
  const [signUpNameError, setSignUpNameError] = useState('');
  const [signUpEmailError, setSignUpEmailError] = useState('');
  const [signUpPasswordError, setSignUpPasswordError] = useState('');

  const handleSignUp = () => {
    // Add your sign up logic here
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
          <input
            type="email"
            placeholder="Email"
            value={signUpEmail}
            onChange={(e) => setSignUpEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={signUpPassword}
            onChange={(e) => setSignUpPassword(e.target.value)}
            required
          />
          <button type="button" onClick={handleSignUp}>Sign Up</button>
          <button type="button" onClick={flipSignUp}>Already Have Account?</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
