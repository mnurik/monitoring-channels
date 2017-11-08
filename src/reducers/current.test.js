import reducer, { initialState } from "./current";
import * as actionTypes from "./../constants/actionTypes";

describe("currentChannels reducer test", () => {

    afterAll(() => {
        it("should never mutate initialState", () => {
            expect(initialState).toEqual({
                id: null,
                group: '',
                checkCount: 2,
                frequency: 200,
                name: '',
                channelItems: [{ id: null, ip: '', port: '', type: 1 }]
            });
        });
    });

    it("should handle initial state", () => {
        expect(reducer(undefined, {})).toMatchObject(initialState);
    });

    it("should handle EDIT_CURRENT_CHANNEL state", () => {
        expect(reducer({ name: "test" }, { type: actionTypes.EDIT_CURRENT_CHANNEL, payload: { name: "new test" } }))
            .toEqual({ name: "new test" });
    });

    it("should handle EDIT_CURRENT_CHANNEL_IPLIST state", () => {
        expect(reducer(
            { channelItems: [{ ip: "10.10.10.10" }] },
            { type: actionTypes.EDIT_CURRENT_CHANNEL_IPLIST, payload: { index: 0, key: "ip", value: "11.10.10.10" } }
        )).toEqual({
            channelItems: [{ ip: "11.10.10.10" }]
        });
    });

    it("should handle ADD_CURRENT_CHANNEL_ITEM", () => {
        expect(reducer(
            { channelItems: [] },
            { type: actionTypes.ADD_CURRENT_CHANNEL_ITEM })
        ).toEqual({
            channelItems: [{
                id: null, ip: '', port: '', type: 1
            }]
        })
    });

    it("should handle REPLACE_CURRENT_CHANNEL state", () => {
        expect(reducer('text will be replaced', { type: actionTypes.REPLACE_CURRENT_CHANNEL, payload: 'with this text' }))
            .toEqual('with this text');
    });

    it("should handle CLEAR_CURRENT_CHANNEL state", () => {
        expect(reducer({}, { type: actionTypes.CLEAR_CURRENT_CHANNEL }))
            .toMatchObject(initialState);
    });

});