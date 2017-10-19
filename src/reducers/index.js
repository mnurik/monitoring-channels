import { combineReducers } from "redux";
import * as actionTypes from "./../constants/actionTypes";

export const initialState = [];

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_CHANNELS:
            return action.payload;
        case actionTypes.ADD_CHANNEL:
            return [...state, action.payload];
        case actionTypes.EDIT_CHANNEL:
            return state.map(channel => {
                if (channel.id === action.payload.id) {
                    return action.payload;
                }
                return channel;
            });
        case actionTypes.DELETE_CHANNEL:
            return state.filter(channel => channel.id !== action.payload.id);
        default:
            return state;
    }
}

export default combineReducers({ channels: rootReducer })