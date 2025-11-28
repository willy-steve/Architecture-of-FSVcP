import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const useAuth = () => {
    const { user, setUser } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkUserLoggedIn = async () => {
            try {
                const response = await fetch('/api/auth/check', {
                    method: 'GET',
                    credentials: 'include',
                });
                const data = await response.json();
                if (data.user) {
                    setUser(data.user);
                } else {
                    setUser(null);
                }
            } catch (error) {
                console.error('Error checking user login status:', error);
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        checkUserLoggedIn();
    }, [setUser]);

    return { user, loading };
};

export default useAuth;