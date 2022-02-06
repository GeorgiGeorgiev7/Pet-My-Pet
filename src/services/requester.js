export const request = async (url, options = {}) => {
    const response = await fetch(url, options);

    if (response.ok && response.status != 204) {
        return response.json();
    } else {
        throw await response.json();
    }

};
