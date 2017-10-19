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
    return callApi('http://10.50.50.197:3169/api/monitoring/channelList');
};

export const saveChannel = (data) => {
    return callApi('kelenterApi', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
};

export const deleteChannel = () => {
    return callApi('');
};