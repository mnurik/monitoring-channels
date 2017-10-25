import * as actionTypes from './../constants/actionTypes'

export const receiveChannels = (payload) => ({ type: actionTypes.LOAD_CHANNELS, payload })
export const destroyChannel = (id) => ({ type: actionTypes.DELETE_CHANNEL, payload: { id } })
export const addChannel = (payload) => ({ type: actionTypes.ADD_CHANNEL, payload })
export const editChannel = (payload) => ({ type: actionTypes.EDIT_CHANNEL, payload })

export const editCurrentData = (payload) => ({ type: actionTypes.EDIT_CURRENT_CHANNEL_NAME, payload })
export const editCurrentList = (payload) => ({ type: actionTypes.EDIT_CURRENT_CHANNEL_IPLIST, payload })
export const replaceCurrent = (payload) => ({ type: actionTypes.REPLACE_CURRENT_CHANNEL, payload })
export const clearCurrent = () => ({ type: actionTypes.CLEAR_CURRENT_CHANNEL })

export const startChannel = () => ({ type: actionTypes.START_CHANNEL })
export const stopChannel = () => ({ type: actionTypes.STOP_CHANNEL })
export const startAllChannels = () => ({ type: actionTypes.START_ALL_CHANNELS })
export const stopAllChannels = () => ({ type: actionTypes.STOP_ALL_CHANNELS })
