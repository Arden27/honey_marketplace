"use client"

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoggedIn } from '@/redux/store';

function LoginButton() {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.isLoggedIn);

    const handleLoginLogout = () => {
        dispatch(setIsLoggedIn(!isLoggedIn));
    }

    return (
        <button onClick={handleLoginLogout}>
            {isLoggedIn ? 'Logout' : 'Login'}
        </button>
    );
}

export default LoginButton;
