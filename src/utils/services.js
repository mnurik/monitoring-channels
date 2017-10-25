import request from './request'
import * as endPoints from './../constants/endPoints'

export const fetchChannels = () =>
  request({ url: endPoints.GET_CHANNELS })

export const saveChannel = (data) =>
  request({
    url: endPoints.UPDATE_MONITORING,
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

export const deleteChannel = (id) =>
  request({ url: endPoints.DELETE_MONITORING + id, method: 'DELETE' })

export const getActivesChannels = () =>
  request({ url: endPoints.GET_ACTIVE_CHANNELS })

export const startAllChannels = () =>
  request({ url: endPoints.START_ALL_CHANNELS })

export const stopAllChannels = () =>
  request({ url: endPoints.STOP_ALL_CHANNELS })

export const startChannel = (id) =>
  request({ url: endPoints.START_CHANNEL + id })

export const stopChannel = (id) =>
  request({ url: endPoints.STOP_CHANNEL + id })
