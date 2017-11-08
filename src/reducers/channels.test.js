import reducer, { initialState } from "./channels";
import * as actionTypes from "./../constants/actionTypes";

describe("channels reducer test", () => {

    afterAll(() => {
        it("should never mutate initialState", () => {
            expect(initialState.toEqual(
                {
                    loading: false,
                    list: []
                }
            ));
        });
    });

    it("should handle initial state", () => {
        expect(reducer(undefined, {})).toEqual(initialState);
    });

    it("should handle LOAD_CHANNELS", () => {
        expect(reducer(undefined, { type: actionTypes.LOAD_CHANNELS }))
            .toEqual({ loading: true, list: [] });
    });

    it("should handle RECEIVE_CHANNELS", () => {
        expect(reducer(undefined, { type: actionTypes.RECEIVE_CHANNELS, payload: [{ id: 0 }] }))
            .toEqual({ loading: false, list: [{ id: 0 }] });
    });

    it("should handle SAVE_CHANNEL as create", () => {
        expect(reducer({ loading: false, list: [{ id: 0 }] }, { type: actionTypes.SAVE_CHANNEL, payload: { id: 1 } }))
            .toEqual({ loading: false, list: [{ id: 0 }, { id: 1 }] });
    });

    it("should handle SAVE_CHANNEL as update", () => {
        expect(reducer({ loading: false, list: [{ id: 1, name: "test" }] }, { type: actionTypes.SAVE_CHANNEL, payload: { id: 1, name: "new test" } }))
            .toEqual({ loading: false, list: [{ id: 1, name: "new test" }] });
    });

    it("should handle DELETE_CHANNEL", () => {
        expect(reducer({ loading: false, list: [{ id: 1 }] }, { type: actionTypes.DELETE_CHANNEL, payload: { id: 1 } }))
            .toEqual({ loading: false, list: [] });
    });

});