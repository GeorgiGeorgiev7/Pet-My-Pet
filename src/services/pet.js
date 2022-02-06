import { host } from './common';
import { request } from './requester';


export const getAll = () =>
    request(host + "/data/pets?sortBy=_createdOn%20desc");

export const create = async (petData, token) => {
    const response = await fetch(
        host + "/data/pets",
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Authorization': token
            },
            body: JSON.stringify(petData)
        }
    );

    return response.json();
};

export const getById = (petId) =>
    request(host + `/data/pets/${petId}`);


export const destroy = async (petId, token) => {
    const options = {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "X-Authorization": token
        }
    };

    const response = await fetch(
        host + `/data/pets/${petId}`,
        options
    );

    return response.json();
};