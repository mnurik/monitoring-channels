import * as actionTypes from "./../constants/actionTypes";
import * as actions from "./actions";

describe("channel actions", () => {
    it("editCurrentName should create EDIT_CURRENT_CHANNEL_NAME action", () => {
        expect(actions.editCurrentName("new name for channel")).toEqual({
            type: actionTypes.EDIT_CURRENT_CHANNEL_NAME, Name: "new name for channel"
        });
    });

    it("editCurrentList should create EDIT_CURRENT_CHANNEL_IPLIST action", () => {
        expect(actions.editCurrentList("list for channel")).toEqual({
            type: actionTypes.EDIT_CURRENT_CHANNEL_IPLIST, payload: "list for channel"
        });
    });

    it("replaceCurrent should create REPLACE_CURRENT_CHANNEL action", () => {
        expect(actions.replaceCurrent("channel info")).toEqual({
            type: actionTypes.REPLACE_CURRENT_CHANNEL, payload: "channel info"
        });
    });

    it("clearCurrent should create CLEAR_CURRENT_CHANNEL action", () => {
        expect(actions.clearCurrent()).toEqual({
            type: actionTypes.CLEAR_CURRENT_CHANNEL
        });
    });
});