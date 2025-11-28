import React, { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser, registerUser, logoutUser } from '../api/auth';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = async (credentials) => {
        const userData = await loginUser(credentials);
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        navigate('/dashboard');
    };

    const register = async (userData) => {
        const newUser = await registerUser(userData);
        setUser(newUser);
        localStorage.setItem('user', JSON.stringify(newUser));
        navigate('/dashboard');
    };

    const logout = () => {
        logoutUser();
        setUser(null);
        localStorage.removeItem('user');
        navigate('/login');
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};