import * as actionTypes from './../constants/actionTypes'

//  Channel List Action Creaters
export const receiveChannels = (payload) => ({ type: actionTypes.LOAD_CHANNELS, payload })
export const destroyChannel = (id) => ({ type: actionTypes.DELETE_CHANNEL, payload: { id } })
export const saveChannel = (payload) => ({ type: actionTypes.SAVE_CHANNEL, payload })
export const getActives = (payload) => ({ type: actionTypes.GET_ACTIVE_CHANNELS, payload })

//  Current Channel Action Creaters
export const editCurrentData = (payload) => ({ type: actionTypes.EDIT_CURRENT_CHANNEL, payload })
export const editCurrentList = (payload) => ({ type: actionTypes.EDIT_CURRENT_CHANNEL_IPLIST, payload })
export const replaceCurrent = (payload) => ({ type: actionTypes.REPLACE_CURRENT_CHANNEL, payload })
export const clearCurrent = () => ({ type: actionTypes.CLEAR_CURRENT_CHANNEL })

//  Start/Stop Action Creaters
export const startChannel = (id) => ({ type: actionTypes.START_CHANNEL, payload: id })
export const startChannelRequested = (id) => ({ type: actionTypes.START_CHANNEL_REQUESTED, payload: id })
export const stopChannel = (id) => ({ type: actionTypes.STOP_CHANNEL, payload: id })
export const startAllChannels = (payload) => ({ type: actionTypes.START_ALL_CHANNELS, payload })
export const startAllChannelsRequested = (payload) => ({ type: actionTypes.START_ALL_CHANNELS_REQUESTED, payload })
export const stopAllChannels = () => ({ type: actionTypes.STOP_ALL_CHANNELS })
export const toggleImageMode = () => ({ type: actionTypes.TOGGLE_IMAGE_MODE })