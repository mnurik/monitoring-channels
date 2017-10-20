import * as actionTypes from "./../constants/actionTypes";

export const initialState = {
    id: null,
    name: "",
    ipList: [{ id: null, ip: "", port: "" }]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.EDIT_CURRENT_CHANNEL_NAME:
            return { ...state, name: action.payload };
        case actionTypes.EDIT_CURRENT_CHANNEL_IPLIST:
            return {
                ...state,
                ipList: [...state.ipList, { ...action.payload.obj }]
            };
        case actionTypes.REPLACE_CURRENT_CHANNEL:
            return action.payload;
        case actionTypes.CLEAR_CURRENT_CHANNEL:
            return initialState;
        default:
            return state;
    }
}