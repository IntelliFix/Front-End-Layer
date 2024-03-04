import React, { useState } from 'react';
import '../Home/home.css'

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleSubmit = async (e) => {
        const Url = 'https://integration-layer-pb5xmvfa7a-uc.a.run.app'
        e.preventDefault();

        // Reset errors every time the user enters valid input
        setEmailError('');
        setPasswordError('');

        try {
            const res = await fetch(`${Url}/login`, {
                method: 'POST',
                body: JSON.stringify({ email, password, }),
                headers: { 'Content-Type': 'application/json' }
            });
            const data = await res.json();
            console.log(data);
            console.log(data.user);

            if (data.errors) {
                setEmailError(data.errors.email);
                setPasswordError(data.errors.password);
            }

            if (data.user ) {
                // Save token to localStorage
                // Use 
                // const token = localStorage.getItem('token');
                // to access the token in other components
                localStorage.setItem('token', data.user);

                // Redirect to the next page after successful login
                // Replace '/' with the desired URL
                window.location.assign('/home');
            }
        } catch (err) {
            console.log(err);
        }
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

export default Login;
