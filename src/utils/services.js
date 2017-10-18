export function checkStatus(response) {
    if (!response.ok) {
        // (response.status < 200 || response.status > 300)
        const error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
    return response;
};

export function parseJSON(response) {
    return response.json();
};

export function callApi(url, config = {}) {
    return fetch(url, config)
        .then(checkStatus)
        .then(parseJSON)
        .catch(error => {
            console.error(error.message);
        });
};

export const fetchChannels = () => {
    return callApi('');
};