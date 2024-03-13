import React, { useState } from 'react';
import '../Home/home.css';
import ApiHandler from '../../ApiHandler/ApiHandler';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [nameError, setNameError] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        setEmailError('');
        setPasswordError('');
        setNameError('');
        setPhoneNumberError('');

        ApiHandler.signup(email, password, name, phoneNumber, setEmailError, setPasswordError, setNameError, setPhoneNumberError);
    };

    return (
        <form className='forms' onSubmit={handleSubmit}>
            <h2>Sign up</h2>

            <label htmlFor="email">Email</label>
            <input
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <div className="email error">{emailError}</div>

            <label htmlFor="password">Password</label>
            <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <div className="password error">{passwordError}</div>

            <label htmlFor="name">Name</label>
            <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <div className="name error">{nameError}</div>

            <label htmlFor="phoneNumber">PhoneNumber</label>
            <input
                type="text"
                name="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
            />
            <div className="phoneNumber error">{phoneNumberError}</div>

            <button type="submit">Sign Up</button>
        </form>
    );
}

export default Signup;
