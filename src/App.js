// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import SignUp from './components/Signup';
import Logout from './components/Logout';

function App() {
    return (
        <AuthProvider>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                    <Route path="/" element={<Home />} />
                    <Route path="/logout" element={<Logout />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
