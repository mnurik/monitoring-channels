import reducer, { initialState } from "./currentChannel";
import * as actionTypes from "./../constants/actionTypes";

describe("currentChannels reducer test", () => {

    afterAll(() => {
        it("should never mutate initialState", () => {
            expect(initialState).toEqual({
                Id: null,
                Name: "",
                IpList: [{ Id: null, Ip: "", Port: "", Type: "", Hz: "" }]
            });
        });
    });

    it("should handle initial state", () => {
        expect(reducer(undefined, {})).toMatchObject(initialState);
    });

    it("should handle EDIT_CURRENT_CHANNEL_NAME state", () => {
        expect(reducer({ Name: "test" }, { type: actionTypes.EDIT_CURRENT_CHANNEL_NAME, Name: "new test" }))
            .toEqual({ Name: "new test" });
    });

    it("should handle EDIT_CURRENT_CHANNEL_IPLIST state", () => {
        expect(reducer(
            { IpList: [{ ip: "10.10.10.10" }] },
            { type: actionTypes.EDIT_CURRENT_CHANNEL_IPLIST, payload: { index: 0, key: "ip", value: "11.10.10.10" } }
        )).toEqual({
            IpList: [{ ip: "11.10.10.10" },
            { "Hz": "", "Id": null, "Ip": "", "Port": "", "Type": "" }]
        });

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