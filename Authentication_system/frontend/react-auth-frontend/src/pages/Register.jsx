import React, { useState } from 'react';
import AuthForm from '../components/AuthForm';
import { registerUser } from '../api/auth';

const Register = () => {
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleRegister = async (userData) => {
        try {
            await registerUser(userData);
            setSuccess(true);
            setError(null);
        } catch (err) {
            setError(err.response.data.message || 'Registration failed');
            setSuccess(false);
        }
    };

    return (
        <div>
            <h2>Register</h2>
            {error && <p className="error">{error}</p>}
            {success && <p className="success">Registration successful! Please log in.</p>}
            <AuthForm onSubmit={handleRegister} />
        </div>
    );
};

export default Register;