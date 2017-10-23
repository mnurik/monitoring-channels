import * as actionTypes from "./../constants/actionTypes";

export const initialState = {
    id: null,
    name: "",
    ipList: [{ id: null, ip: "", port: "" }]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.EDIT_CURRENT_CHANNEL_NAME:
            return { ...state, name: action.name };
        case actionTypes.EDIT_CURRENT_CHANNEL_IPLIST:
            let ipList = state.ipList.slice();
            if (action.payload.index === (ipList.length - 1)) {
                ipList = ipList.concat(initialState.ipList);
            };
            return {
                ...state,
                ipList: ipList.map((ip, index) => {
                    let ipClone = { ...ip };
                    if (index === action.payload.index) {
                        ipClone[action.payload.key] = action.payload.value
                    }
                    return ipClone;
                })
            };
        case actionTypes.REPLACE_CURRENT_CHANNEL:
            return action.payload;
        case actionTypes.CLEAR_CURRENT_CHANNEL:
            return initialState;
        default:
            return state;
    }
}