export const login = (username) => {
    localStorage.setItem('username', username);
};

export const getCurrentUser = () => {
    const username = localStorage.getItem('username');

    return {
        username
    };
};

export const isAuth = () => {
    return Boolean(getCurrentUser().username);
};

export const logout = () => {
    localStorage.removeItem('username');
};