import * as actionTypes from "./../constants/actionTypes";
export const initialState = {
  imageMode: false,
  loading: [],
  channels: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.START_CHANNEL_REQUESTED:
      return {
        ...state,
        loading: state.channels.concat([action.payload])
      };
    case actionTypes.START_CHANNEL:
      return {
        imageMode: state.imageMode,
        loading: [],
        channels: state.channels.concat([action.payload])
      };
    case actionTypes.STOP_CHANNEL:
      return {
        ...state,
        channels: state.channels.filter(item => item !== action.payload)
      };
    case actionTypes.START_ALL_CHANNELS_REQUESTED:
      return {
        ...state,
        loading: action.payload
      };
    case actionTypes.START_ALL_CHANNELS:
      return {
        imageMode: state.imageMode,
        loading: [],
        channels: action.payload
      };
    case actionTypes.STOP_ALL_CHANNELS:
      return {
        ...state,
        channels: initialState.channels
      };
    case actionTypes.TOGGLE_IMAGE_MODE:
      return {
        ...state,
        imageMode: !state.imageMode
      };
    default:
      return state;
  }
};