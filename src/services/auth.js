export const login = (username) => {
    localStorage.setItem('isAuth', true);
    localStorage.setItem('username', username);
};

export const getCurrentUser = () => {
    const isAuth = localStorage.getItem('isAuth');
    const username = localStorage.getItem('username');

    return {
        isAuth: isAuth == 'true',
        username: username || ''
    };
};

export const isAuth = () => {
    return localStorage.getItem('isAuth');
};

export const logout = () => {
    localStorage.setItem('isAuth', false);
    localStorage.removeItem('username');
};