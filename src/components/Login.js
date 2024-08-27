// components/Login.js

import React, { useState, useContext } from 'react';
import AuthContext from '../AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
            // Redirect to dashboard or another protected route
            navigate('/dashboard')
        } catch (err) {
            console.error('Failed to login', err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Email"
                required 
            />
            <input 
                type="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                placeholder="Password"
                required 
            />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;
