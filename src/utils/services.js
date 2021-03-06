import request from './request'
import * as endPoints from './../constants/endPoints'

export const fetchChannels = () => request({ url: endPoints.GET_CHANNELS });

export const saveChannel = (data) =>
  request({
    url: endPoints.UPDATE_MONITORING,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: data
  });

export const deleteChannel = (id) => request({ url: endPoints.DELETE_MONITORING + id });

export const getActivesChannels = (imageMode) => request({ url: endPoints.GET_ACTIVE_CHANNELS + imageMode });

export const startAllChannels = () => request({ url: endPoints.START_ALL_CHANNELS });

export const stopAllChannels = () => request({ url: endPoints.STOP_ALL_CHANNELS });

export const startChannel = (id) => request({ url: endPoints.START_CHANNEL + id });

export const stopChannel = (id) => request({ url: endPoints.STOP_CHANNEL + id });
