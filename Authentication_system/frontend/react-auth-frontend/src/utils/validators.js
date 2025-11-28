export const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
};

export const validatePassword = (password) => {
    const minLength = 6;
    return password.length >= minLength;
};

export const validateUsername = (username) => {
    const re = /^[a-zA-Z0-9_]{3,}$/;
    return re.test(String(username));
};