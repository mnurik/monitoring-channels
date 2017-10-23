import toastr from "toastr";
import * as actionTypes from "./../constants/actionTypes";
import * as api from "./../utils/services";

const receiveChannels = (payload) => ({ type: actionTypes.LOAD_CHANNELS, payload });
const destroyChannel = (id) => ({ type: actionTypes.DELETE_CHANNEL, payload: { id } });
const addChannel = (payload) => ({ type: actionTypes.ADD_CHANNEL, payload });
export const editCurrentName = (name) => ({ type: actionTypes.EDIT_CURRENT_CHANNEL_NAME, name });
export const editCurrentList = (payload) => ({ type: actionTypes.EDIT_CURRENT_CHANNEL_IPLIST, payload });
export const replaceCurrent = (payload) => ({ type: actionTypes.REPLACE_CURRENT_CHANNEL, payload });
const clearCurrent = () => ({ type: actionTypes.CLEAR_CURRENT_CHANNEL });

export const loadChannels = () => (dispatch) => {
    return api.fetchChannels()
        .then(response => { dispatch(receiveChannels(response.Result)); })
        .catch(error => { toastr.error(error) });
};

export const deleteChannel = (id) => (dispatch) => {
    return api.deleteChannel(id)
        .then(response => { dispatch(destroyChannel(id)); })
        .catch(error => { toastr.error(error) });
};

export const saveChannel = (data) => (dispatch) => {
    return api.saveChannel(data)
        .then(response => {
            dispatch(addChannel(response));
            dispatch(clearCurrent());
        })
        .catch(error => { toastr.error(error) });
};