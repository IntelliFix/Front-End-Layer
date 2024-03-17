// Login.js
import React, { useState } from 'react';

const Login = ({ flipSignUp }) => {
  const [logInEmail, setLogInEmail] = useState('');
  const [logInPassword, setLogInPassword] = useState('');
  const [logInEmailError, setLogInEmailError] = useState('');
  const [logInPasswordError, setLogInPasswordError] = useState('');

  const handleLogin = () => {
    // Add your login logic here
  };

  return (
    <div className="card-front">
      <div className="left-half">
        <h2>Welcome Back!</h2>
        <p>Please login to access your account.</p>
      </div>
      <div className="right-half">
        <form>
          <input
            type="email"
            placeholder="Email"
            value={logInEmail}
            onChange={(e) => setLogInEmail(e.target.value)}
            required
          />
          <div className="email error">{logInEmailError}</div>

          <input
            type="password"
            placeholder="Password"
            value={logInPassword}
            onChange={(e) => setLogInPassword(e.target.value)}
            required
          />
          <div className="password error">{logInPasswordError}</div>

          <button type="button" onClick={handleLogin}>Login</button>
          <button type="button" onClick={flipSignUp}>New Account?</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
