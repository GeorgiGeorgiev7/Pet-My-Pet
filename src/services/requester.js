export const request = (url) => {
    return fetch(url).then(responseHandler);
};

async function responseHandler(res) {
    if (res.ok) {
        return res.json();
    } else {
        throw await res.json();
    }
}