import { combineReducers } from "redux";

export const initialState = [];

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default combineReducers({ channels: rootReducer })