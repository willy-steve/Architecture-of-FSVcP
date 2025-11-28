import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import { AuthContext } from '../contexts/AuthContext';

const Login = () => {
    const [error, setError] = useState(null);
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = async (email, password) => {
        try {
            await login(email, password);
            navigate('/dashboard');
        } catch (err) {
            setError('Invalid credentials. Please try again.');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            {error && <p className="error">{error}</p>}
            <AuthForm onSubmit={handleLogin} />
        </div>
    );
};

export default Login;