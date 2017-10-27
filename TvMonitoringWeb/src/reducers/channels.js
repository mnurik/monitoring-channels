import _ from 'lodash';
import * as actionTypes from './../constants/actionTypes'

export const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_CHANNELS:
      return action.payload
    case actionTypes.ADD_CHANNEL:
      return [...state, action.payload]
    case actionTypes.EDIT_CHANNEL:
      let cloneState = _.clone(state);
      action.payload.forEach(channel => {
        const index = _.findIndex(state, { id: channel.id });
        if (~index) {
          cloneState.splice(index, 1, channel);
        } else {
          cloneState.push(channel);
        }
      });
      return cloneState;
    case actionTypes.DELETE_CHANNEL:
      return state.filter(channel => channel.id !== action.payload.id)
    default:
      return state
  }
}
