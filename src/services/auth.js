import { host } from './util';


export const login = async (email, password) => {
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    };

    const response = await fetch(host + "/users/login", options);

    if (response.ok) {
        return response.json();
    } else {
        throw await response.json();
    }

};

export const logout = async (token) => {
    const options = {
        headers: {
            "X-Authorization": token
        }
    };

    return fetch(host + "/users/logout", options);
};

export const register = async (email, password) => {
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    };

    const response = await fetch(host + "/users/register", options);

    if (response.ok) {
        return response.json();
    } else {
        throw await response.json();
    }

};