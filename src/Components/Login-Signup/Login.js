import React, { useState } from 'react';
import '../Home/home.css';
import ApiHandler from '../../ApiHandler/ApiHandler';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        setEmailError('');
        setPasswordError('');
        ApiHandler.login(email, password, setEmailError, setPasswordError);
    };

    return (
        <form className='forms' onSubmit={handleSubmit}>
            <h2> Login </h2>

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

            <button type="submit">Login</button>
        </form>
    );
}

// export default Login;
