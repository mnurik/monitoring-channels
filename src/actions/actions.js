import * as actionTypes from "./../constants/actionTypes";

export const loadChannels = (payload) => ({ type: actionTypes.LOAD_CHANNELS, payload });
export const addChannel = (payload) => ({ type: actionTypes.ADD_CHANNEL, payload });
export const destroyChannel = (id) => ({ type: actionTypes.DELETE_CHANNEL, payload: { id } });
export const editChannel = (payload) => ({ type: actionTypes.EDIT_CHANNEL, payload });