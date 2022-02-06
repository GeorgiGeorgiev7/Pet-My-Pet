import { host } from './common';
import { request } from './requester';


export const login = async (email, password) => {
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    };
    return request(host + "/users/login", options);
};

export const register = async (email, password) => {
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    };
    return request(host + "/users/register", options);
};

export const logout = async (token) => {
    const options = {
        headers: {
            "X-Authorization": token
        }
    };

    return request(host + "/users/logout", options);
};