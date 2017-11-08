import reducer, { initialState } from "./control";
import * as actionTypes from "./../constants/actionTypes";

describe("currentChannels reducer test", () => {

  it("should handle initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it("should handle START_CHANNEL_REQUESTED", () => {
    expect(reducer({
      imageMode: "",
      loading: [],
      channels: []
    }, {
        type: actionTypes.START_CHANNEL_REQUESTED,
        payload: 1
      }))
      .toEqual({
        imageMode: "",
        loading: [1],
        channels: []
      });
  });

  it("should handle START_CHANNEL", () => {
    expect(reducer({
      imageMode: "",
      loading: [],
      channels: []
    }, {
        type: actionTypes.START_CHANNEL,
        payload: 1
      }))
      .toEqual({
        imageMode: "",
        loading: [],
        channels: [1]
      });
  });

  it("should handle STOP_CHANNEL", () => {
    expect(reducer({
      imageMode: "",
      channels: [1]
    }, {
        type: actionTypes.STOP_CHANNEL,
        payload: 1
      }))
      .toEqual({
        imageMode: "",
        channels: []
      });
  });

  it("should handle START_ALL_CHANNELS", () => {
    expect(reducer({
      imageMode: "",
      loading: [],
      channels: []
    }, {
        type: actionTypes.START_ALL_CHANNELS,
        payload: [1, 2, 3, 4]
      }))
      .toEqual({
        imageMode: "",
        loading: [],
        channels: [1, 2, 3, 4]
      });
  });

  it("should handle START_ALL_CHANNELS_REQUESTED", () => {
    expect(reducer({
      imageMode: "",
      loading: [],
      channels: []
    }, {
        type: actionTypes.START_ALL_CHANNELS_REQUESTED,
        payload: [1, 2, 3, 4]
      }))
      .toEqual({
        imageMode: "",
        loading: [1, 2, 3, 4],
        channels: []
      });
  });

  it("should handle STOP_ALL_CHANNELS", () => {
    expect(reducer({
      imageMode: "",
      channels: [1, 2, 3]
    }, {
        type: actionTypes.STOP_ALL_CHANNELS
      }))
      .toEqual({
        imageMode: "",
        channels: []
      });
  });

});