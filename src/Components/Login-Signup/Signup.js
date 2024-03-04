import React, { useState } from 'react';
import '../Home/home.css'
import axios from 'axios';

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
        const Url = 'https://integration-layer-pb5xmvfa7a-uc.a.run.app'

        e.preventDefault();
        console.log(email);
        console.log(password);
        console.log(name);
        console.log(phoneNumber);
        // Reset errors every time the user enters valid input
        setEmailError('');
        setPasswordError('');
        setNameError('');
        setPhoneNumberError('');

        try {
            console.log('sending request');
            const body = JSON.stringify({ email, password, name, phoneNumber });
            console.log(body);


            const res = await fetch(`${Url}/signup`, {
                method: 'POST',
                body: JSON.stringify({ email, password, name, phoneNumber }),
                headers: { 'Content-Type': 'application/json' }
            });
            const data = await res.json();
            
            console.log(data);

            // const res = await axios
            // .post(Url + '/signup', {
            //     body: JSON.stringify({ email, password, name, phoneNumber }),
            //     headers: { 'Content-Type': 'application/json' }
            // });

            // const data = await res.json();
            // console.log(data);

            if (data.errors) {
                setEmailError(data.errors.email);
                setPasswordError(data.errors.password);
                setNameError(data.errors.name);
                setPhoneNumberError(data.errors.phoneNumber);
            }

            if (data.user) {
                // Redirect to the next page after successful signup
                // Replace '/' with the desired URL
                window.location.assign('/login');
            }

        } catch (err) {
            console.log(err);
        }
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
