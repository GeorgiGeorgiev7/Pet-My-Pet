export const request = (url, options = {}) => {
    return fetch(url, options).then(responseHandler);
};

async function responseHandler(res) {
    if (res.ok) {
        return res.json();
    } else {
        throw await res.json();
    }
}