import * as actionTypes from "./../constants/actionTypes";
import * as actions from "./actions";

describe("channel list actions", () => {
    it("editCurrentName should create LOAD_CHANNELS action", () => {
        expect(actions.loadChannels()).toEqual({
            type: actionTypes.LOAD_CHANNELS
        });
    });

    it("editCurrentName should create RECEIVE_CHANNELS action", () => {
        expect(actions.receiveChannels([
            { id: 1, name: "channel 1" },
            { id: 2, name: "channel 2" }
        ]
        )).toEqual({
            type: actionTypes.RECEIVE_CHANNELS,
            payload: [
                { id: 1, name: "channel 1" },
                { id: 2, name: "channel 2" }
            ]
        });
    });

    it("editCurrentList should create DELETE_CHANNEL action", () => {
        expect(actions.destroyChannel(1)).toEqual({
            type: actionTypes.DELETE_CHANNEL,
            payload: { id: 1 }
        });
    });

    it("replaceCurrent should create SAVE_CHANNEL action", () => {
        expect(actions.saveChannel({ id: 5, name: "channel 5" })).toEqual({
            type: actionTypes.SAVE_CHANNEL, payload: { id: 5, name: "channel 5" }
        });
    });
});

describe("current channel actions", () => {
    it("editCurrentName should create EDIT_CURRENT_CHANNEL action", () => {
        expect(actions.editCurrentData({ name: "channel" })).toEqual({
            type: actionTypes.EDIT_CURRENT_CHANNEL, payload: { name: "channel" }
        });
    });

    it("editCurrentList should create EDIT_CURRENT_CHANNEL_IPLIST action", () => {
        expect(actions.onChangeChannelItem({ index: 1, key: "ip", value: "10.10.11.109" })).toEqual({
            type: actionTypes.EDIT_CURRENT_CHANNEL_IPLIST, payload: { index: 1, key: "ip", value: "10.10.11.109" }
        });
    });

    it("replaceCurrent should create REPLACE_CURRENT_CHANNEL action", () => {
        expect(actions.replaceCurrent({ id: 1, name: "channel" })).toEqual({
            type: actionTypes.REPLACE_CURRENT_CHANNEL, payload: { id: 1, name: "channel" }
        });
    });

    it("clearCurrent should create CLEAR_CURRENT_CHANNEL action", () => {
        expect(actions.clearCurrent()).toEqual({
            type: actionTypes.CLEAR_CURRENT_CHANNEL
        });
    });
});

describe("start/stop actions", () => {
    it("editCurrentName should create EDIT_CURRENT_CHANNEL_NAME action", () => {
        expect(actions.startChannel(1)).toEqual({
            type: actionTypes.START_CHANNEL, payload: 1
        });
    });

    it("editCurrentList should create EDIT_CURRENT_CHANNEL_IPLIST action", () => {
        expect(actions.stopChannel(2)).toEqual({
            type: actionTypes.STOP_CHANNEL, payload: 2
        });
    });

    it("replaceCurrent should create REPLACE_CURRENT_CHANNEL action", () => {
        expect(actions.startAllChannels([1, 2, 3])).toEqual({
            type: actionTypes.START_ALL_CHANNELS, payload: [1, 2, 3]
        });
    });

    it("clearCurrent should create CLEAR_CURRENT_CHANNEL action", () => {
        expect(actions.stopAllChannels()).toEqual({
            type: actionTypes.STOP_ALL_CHANNELS
        });
    });

    it("clearCurrent should create CLEAR_CURRENT_CHANNEL action", () => {
        expect(actions.toggleImageMode()).toEqual({
            type: actionTypes.TOGGLE_IMAGE_MODE
        });
    });
});