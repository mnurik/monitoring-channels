import * as actionTypes from "./../constants/actionTypes";

export const initialState = {
    Id: null,
    Name: "",
    IpList: [{ Id: null, Ip: "", Port: "", Type: "", Hz: "" }]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.EDIT_CURRENT_CHANNEL_NAME:
            return { ...state, Name: action.Name };
        case actionTypes.EDIT_CURRENT_CHANNEL_IPLIST:
            // It this case checks if changes happens for last ip in list, 
            // then we add initial ip object to this list. If not then we just update properties.
            let IpList = state.IpList.slice();
            if (action.payload.index === (IpList.length - 1)) {
                IpList.push(initialState.IpList[0]);
            };
            return {
                ...state,
                IpList: IpList.map((ip, index) => {
                    if (index === action.payload.index) {
                        return { ...ip, [action.payload.key]: action.payload.value }
                    }
                    return ip;
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