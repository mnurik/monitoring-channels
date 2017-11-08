import { URL } from "./../config";

export const CHANNEL_URL = URL + '/api/channel';
export const GET_CHANNELS = CHANNEL_URL + '/all'
export const GET_ACTIVE_CHANNELS = CHANNEL_URL + '/getActives?withImage='
export const START_ALL_CHANNELS = CHANNEL_URL + '/startAll'
export const STOP_ALL_CHANNELS = CHANNEL_URL + '/stopAll'
export const START_CHANNEL = CHANNEL_URL + '/start?id='
export const STOP_CHANNEL = CHANNEL_URL + '/stop?id='
export const UPDATE_MONITORING = CHANNEL_URL + '/save'
export const DELETE_MONITORING = CHANNEL_URL + '/delete?id='
