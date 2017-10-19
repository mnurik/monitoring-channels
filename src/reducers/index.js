import { combineReducers } from "redux";

export const initialState = [
    {
        id: 1,
        name: 'test',
        imageUrl: 'https://i.ytimg.com/vi/Y-VkNB3x-k0/hqdefault.jpg',
        status: 'error'
    },
    {
        id: 2,
        name: 'test',
        imageUrl: 'https://i.ytimg.com/vi/Y-VkNB3x-k0/hqdefault.jpg',
        status: 'error'
    }
];

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default combineReducers({ channels: rootReducer })