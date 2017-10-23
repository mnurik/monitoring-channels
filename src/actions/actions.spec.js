import * as actionTypes from "./../constants/actionTypes";
import * as actions from "./actions";

describe("channel actions", () => {
    it("editCurrentList should create EDIT_CURRENT_CHANNEL_NAME action", () => {
        expect(actions.editCurrentName("new name for channel")).toEqual({ type: actionTypes.EDIT_CURRENT_CHANNEL_NAME, name: "new name for channel" });
    })
})

/*
const receiveChannels = (payload) => ();
const destroyChannel = (id) => ({ type: actionTypes.DELETE_CHANNEL, payload: { id } });
const addChannel = (payload) => ({ type: actionTypes.ADD_CHANNEL, payload });
export const editCurrentName = (payload) => ({ type: actionTypes.EDIT_CURRENT_CHANNEL_NAME, payload });
export const editCurrentList = (payload) => ({ type: actionTypes.EDIT_CURRENT_CHANNEL_IPLIST, payload });
export const replaceCurrent = (payload) => ({ type: actionTypes.REPLACE_CURRENT_CHANNEL, payload });
const clearCurrent = () => ({ type: actionTypes.CLEAR_CURRENT_CHANNEL });
*/