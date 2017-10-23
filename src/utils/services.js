import request from "./request";
import * as endPoints from "./../constants/endPoints";

export const fetchChannels = () => {
    return request(endPoints.GET_MONITORINGS);
};

export const saveChannel = (data) => {
    return request(endPoints.UPDATE_MONITORING, {
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
    return request(endPoints.DELETE_MONITORING + id, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    });
};