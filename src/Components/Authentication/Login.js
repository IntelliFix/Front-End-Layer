// Login.js
import React, { useState } from 'react';
import ApiHandler from '../../ApiHandler/ApiHandler';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Authentication.css';

const Login = ({ flipSignUp }) => {
  const [logInEmail, setLogInEmail] = useState('');
  const [logInPassword, setLogInPassword] = useState('');
  const [logInEmailError, setLogInEmailError] = useState('');
  const [logInPasswordError, setLogInPasswordError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    clearErrors(); // Clear previous errors before logging in
    if(!logInEmail || !logInPassword){
      toast.error('Complete the missing data.');
    }
    if (!logInEmail) {
      setLogInEmailError('Email is required');
    }
    if (!logInPassword) {
      setLogInPasswordError('Password is required');
    }

    if (logInEmail && logInPassword) {
      try {
        await ApiHandler.login(logInEmail, logInPassword, setLogInEmailError, setLogInPasswordError);
      } catch (err) {
        console.log(err);
        toast.error('An error occurred. Please try again later.');
      }
    }
  };

  const clearErrors = () => {
    setLogInEmailError('');
    setLogInPasswordError('');
  };

  return (
    <div className="card-front">
      <div className="left-half" style={{textAlign: 'center'}}>
        <h2>Welcome Back!</h2>
        <p>Please login to access your account.</p>
      </div>
      <div className="right-half ">
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
