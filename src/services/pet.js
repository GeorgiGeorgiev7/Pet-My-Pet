const host = "http://localhost:3030";

export const getAll = async () => {
    const response = await fetch(
        host + "/data/pets?sortBy=_createdOn%20desc"
    );

    return response.json();
};