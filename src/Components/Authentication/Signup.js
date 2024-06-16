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

  const [loading, setLoading] = useState(false);

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

  const handleSignUp = async (e) => {
    e.preventDefault();
    clearErrors(); // Clear previous errors before signing up

    const emailPattern = /^([A-Za-z0-9]+[.-_])*[A-Za-z0-9]+@[A-Za-z0-9-]+(\.[A-Z|a-z]{2,})+$/;
    const namePattern = /^[a-zA-Z\s]*$/;

    if (!signUpName) {
      setSignUpNameError('Please enter your name');
    } else if (!namePattern.test(signUpName)) {
      setSignUpNameError('Name can only contain letters');
      toast.error('Name can only contain letters');
    }

    if (!signUpEmail) {
      setSignUpEmailError('Please enter your email');
    } else if (!emailPattern.test(signUpEmail)) {
      setSignUpEmailError('Please enter a valid email');
      toast.error('Invalid email format');
    }

    if (!signUpPhoneNo) {
      setSignUpPhoneNoError('Please enter your phone number');
    }

    if (!signUpPassword) {
      setSignUpPasswordError('Please enter a password');
    } else if (signUpPassword.length < 8) {
      setSignUpPasswordError('Password must be at least 8 characters');
      toast.error('Password must be at least 8 characters');
    }

    if (!signUpName || !signUpEmail || !signUpPhoneNo || !signUpPassword || !emailPattern.test(signUpEmail) || !namePattern.test(signUpName) || signUpPassword.length < 8) {
      toast.error('Complete the missing data!');
      return;
    }

    if (signUpName && signUpEmail && signUpPhoneNo && signUpPassword) {
      setLoading(true);
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
        }
      } catch (err) {
        console.log(err);
        // toast.error('An error occurred. Please try again later.');
        //TODO (Backend)
        // We need to add a condition to check if the user is already signed up with the entered email 
        // and send a different error message
      } finally {
        setLoading(false);
      }
    }
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

          {/* <button className='sign_in_up_button' type="button" onClick={handleSignUp}>Sign Up</button> */}
          <button className='sign_in_up_button' type="button" onClick={handleSignUp} disabled={loading}>
            {loading ? 'Loading...' : 'Sign Up'}
          </button>

          <button type="button" onClick={flipSignUp}>Already Have Account?</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
