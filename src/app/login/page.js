"use client"

import React, { useState } from 'react';
import { loginUser } from '@/api';
import LoginButton from '@/loginButton';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { setIsLoggedIn } from '@/redux/store';

function LoginForm({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const dispatch = useDispatch();

    const handleSubmit = async event => {
        event.preventDefault();
        try {
            const response = await loginUser(username, password);
            localStorage.setItem('token', response.key);
            dispatch(setIsLoggedIn(true)); // dispatch the setIsLoggedIn action with true
        } catch (error) {
            if (error.status === 400) { // 400 is usually returned for client errors
              if (error.detail.username) {
                setError(error.detail.username[0]);
              } else if (error.detail.non_field_errors) {
                setError(error.detail.non_field_errors[0]);
              } else {
                setError('Unknown error occurred, please try again.');
              }
            } else {
              setError(error.message);
            }
          }
    };

    return (
        <div>
        <LoginButton/>
        <form onSubmit={handleSubmit}>
            <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
            <button type="submit">Login</button>
            {error && <div>{error}</div>}
            <div>
                Don't have an account? <Link href="/register">Register</Link>
            </div>
        </form>
        </div>
    );
}

export default LoginForm;
