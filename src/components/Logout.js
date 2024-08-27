// components/Logout.js

import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AuthContext from '../AuthContext';
const Logout = () => {
  
    const navigate = useNavigate();
    const {logout} = useContext(AuthContext)
    const handleLogout = () => {
        // // Clear the authentication tokens or user data
        // localStorage.removeItem('token'); // Assuming you're using local storage
        // delete axios.defaults.headers.common['authorization'];
        logout()
        // Redirect to login page or home page
        navigate('/login');
    };

    return (
        <button onClick={handleLogout}>
            Logout
        </button>
    );
};

export default Logout;
