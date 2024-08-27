// context/AuthContext.js

import React, { createContext, useState } from 'react';
import axios from 'axios';


const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
   
   
    

    const login = async (email, password) => {
        const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
        localStorage.setItem('token', res.data.token);
        axios.defaults.headers.common['authorization'] = res.data.token;
       
        const token = localStorage.getItem('token');
        if (token) {
            
            axios.defaults.headers.common['authorization'] = token;
            axios.get('http://localhost:5000/api/auth/protected')
                .then(console.log(res.data.user))
                .catch(() => localStorage.removeItem('token'));
                
        }
        console.log(token)
        
        
    };

    const logout = () => {
        localStorage.removeItem('token');
        delete axios.defaults.headers.common['authorization'];
       
    };

    return (
        <AuthContext.Provider value={{  login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
