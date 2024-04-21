// Login.js
import React, { useState } from 'react';
import ApiHandler from '../../ApiHandler/ApiHandler';

const Login = ({ flipSignUp }) => {
  const [logInEmail, setLogInEmail] = useState('');
  const [logInPassword, setLogInPassword] = useState('');
  const [logInEmailError, setLogInEmailError] = useState('');
  const [logInPasswordError, setLogInPasswordError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    setLogInEmailError('');
    setLogInPasswordError('');
    if(!logInEmail) {
      setLogInEmailError('Email is required');
    }
    if(!logInPassword) {
      setLogInPasswordError('Password is required');
    }
    console.log('login');
    await ApiHandler.login(logInEmail, logInPassword,setLogInEmailError, setLogInPasswordError);
  };

  return (
    <div className="card-front">
      <div className="left-half" style={{textAlign: 'center'}}>
        {/*align center*/}
        <h2  >Welcome Back!</h2>
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
          <div className="email error" >{logInEmailError}</div>

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
