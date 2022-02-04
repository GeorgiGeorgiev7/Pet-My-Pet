const host = "http://localhost:3030";

export const getAll = async () => {
    const response = await fetch(
        host + "/data/pets?sortBy=_createdOn%20desc"
    );

    return response.json();
};

export const create = async (petData) => {
    const response = await fetch(
        host + "/data/pets",
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(petData)
        }
    );

    return response.json();
};

export const getById = async (petId) => {
    const response = await fetch(
        host + `/data/pets/${petId}`
    );
    
    return response.json();
};