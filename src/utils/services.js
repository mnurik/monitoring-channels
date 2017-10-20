import request from "./request";

export const fetchChannels = () => {
    return request('http://10.50.50.197:3169/api/monitoring/channelList');
};

export const saveChannel = (data) => {
    return request('http://10.50.50.197:3169/api/monitoring/channelList/', {
        method: "POST",
        mode: 'no-cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
};

export const deleteChannel = (id) => {
    return request('http://10.50.50.197:3169/api/monitoring/channelList/' + id, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
};