import React, { useState } from 'react';
import ApiHandler from '../../ApiHandler/ApiHandler';
import { PasswordStrength } from './PasswordStrength';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Authentication.css';

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
    clearErrors(); // Clear previous errors before signing up

    if (!signUpName) {
      setSignUpNameError('Please enter your name');
    }
    if (!signUpEmail) {
      setSignUpEmailError('Please enter your email');
    }
    if (!signUpPhoneNo) {
      setSignUpPhoneNoError('Please enter your phone number');
    }
    if (!signUpPassword) {
      setSignUpPasswordError('Please enter a password');
    }
    if(!signUpName || !signUpEmail || !signUpPhoneNo || !signUpPassword){
    toast.error('Complete the missing data!');
    }

    if (signUpName && signUpEmail && signUpPhoneNo && signUpPassword) {
      try {
        const response = await ApiHandler.signup(
          signUpEmail,
          signUpPassword,
          signUpName,
          signUpPhoneNo,
          setSignUpEmailError,
          setSignUpPasswordError,
          setSignUpNameError,
          setSignUpPhoneNoError
        );
        const data = response.data;

        if (data.errors) {
          displayErrors(data.errors); // Display errors from the server response
        } else if (data.user) {
          await ApiHandler.signup(signUpEmail, signUpPassword, signUpName, signUpPhoneNo,
            setSignUpEmailError, setSignUpPasswordError, setSignUpNameError, setSignUpPhoneNoError);
          handleSuccessfulSignUp(data.user); // Handle successful sign-up
        }
      } catch (err) {
        console.log(err);
        // toast.error('An error occurred. Please try again later.');
        //TODO (Backend)
        // We need to add a condition to check if the user is already signed up with the entered email 
        // and send a different error message
      }
    }
  };

  const handleSuccessfulSignUp = (token) => {
    toast.success('Sign up successful!');
    localStorage.setItem('token', token);
    window.location.assign('/homepage'); // Redirect to homepage
  };

  const clearErrors = () => {
    setSignUpNameError('');
    setSignUpEmailError('');
    setSignUpPasswordError('');
    setSignUpPhoneNoError('');
  };

  const displayErrors = (errors) => {
    if (errors.email) setSignUpEmailError(errors.email);
    if (errors.password) setSignUpPasswordError(errors.password);
    if (errors.name) setSignUpNameError(errors.name);
    if (errors.phoneNumber) setSignUpPhoneNoError(errors.phoneNumber);
    toast.error('Failed to sign up. Please check your information.');
  };

  return (
    <div className="card-front">
      <div className="right-half">
        <form>
          <>
            <input
              type="text"
              placeholder="Name"
              value={signUpName}
              onChange={(e) => setSignUpName(e.target.value)}
              required
            />
            <div className="name error">{signUpNameError}</div>
          </>

          <>
            <input
              type="text"
              placeholder="Phone Number"
              value={signUpPhoneNo}
              onChange={(e) => setSignUpPhoneNo(e.target.value)}
              required
            />
            <div className="phoneNo error">{signUpPhoneNoError}</div>
          </>

          <>
            <input
              type="email"
              placeholder="Email"
              value={signUpEmail}
              onChange={(e) => setSignUpEmail(e.target.value)}
              required
            />
            <div className="email error">{signUpEmailError}</div>
          </>

          <>
            <PasswordStrength
              placeholder="Password"
              onChange={(value) => setSignUpPassword(value)}
            />
            <div className="password error">{signUpPasswordError}</div>
          </>

          <button type="button" onClick={handleSignUp}>Sign Up</button>
          <button type="button" onClick={flipSignUp}>Already Have Account?</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;