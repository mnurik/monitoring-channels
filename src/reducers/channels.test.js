import reducer, { initialState } from "./channels";
import * as actionTypes from "./../constants/actionTypes";

describe("channels reducer test", () => {

    afterAll(() => {
        it("should never mutate initialState", () => {
            expect(initialState.join("")).toEqual("");
        });
    });

    it("should handle initial state", () => {
        expect(reducer(undefined, {})).toEqual([]);
    });

    it("should handle LOAD_CHANNELS", () => {
        expect(reducer(undefined, { type: actionTypes.LOAD_CHANNELS, payload: [{ id: 0 }] }))
            .toEqual([{ id: 0 }]);
    });

    it("should handle ADD_CHANNEL", () => {
        expect(reducer([{ id: 0 }], { type: actionTypes.ADD_CHANNEL, payload: { id: 1 } }))
            .toEqual([{ id: 0 }, { id: 1 }]);
    });

    it("should handle EDIT_CHANNEL", () => {
        expect(reducer([{ id: 1, name: "test" }], { type: actionTypes.EDIT_CHANNEL, payload: { id: 1, name: "new test" } }))
            .toEqual([{ id: 1, name: "new test" }]);
    });

    it("should handle DELETE_CHANNEL", () => {
        expect(reducer([{ id: 1 }], { type: actionTypes.DELETE_CHANNEL, payload: { id: 1 } }))
            .toEqual([]);
    });

});