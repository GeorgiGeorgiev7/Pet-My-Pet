import { host } from './common';
import { request } from './requester';


export const getAll = () =>
    request(host + "/data/pets?sortBy=_createdOn%20desc");

export const getById = (petId) =>
    request(host + `/data/pets/${petId}`);

export const getMine = (userId) =>
    request(host + `/data/pets?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`);

export const create = async (petData, token) => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(petData)
    };
    return request(host + "/data/pets", options);
};

export const destroy = async (petId, token) => {
    const options = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "X-Authorization": token
        }
    };
    return request(host + `/data/pets/${petId}`, options);
};

export const update = async (petId, petData, token) => {
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(petData)
    };
    return request(host + `/data/pets/${petId}`, options);
};

