import _ from 'lodash';
import * as actionTypes from './../constants/actionTypes'

export const initialState = [];

const mergeById = (arr, obj) => {
  let clonedArr = _.clone(arr);
  const index = _.findIndex(clonedArr, { id: obj.id });
  if (~index) {
    clonedArr.splice(index, 1, obj); // Replace with channel from getActives
  } else {
    clonedArr.push(obj); // Add new channel from getActives
  }
  return clonedArr;
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_CHANNELS:
      return action.payload
    case actionTypes.SAVE_CHANNEL:
      return mergeById(state, action.payload);
    case actionTypes.GET_ACTIVE_CHANNELS:
      let clonedState = _.clone(state);
      action.payload.forEach(channel => {
        clonedState = mergeById(clonedState, action.payload);
      });
      return clonedState;
    case actionTypes.DELETE_CHANNEL:
      return state.filter(channel => channel.id !== action.payload.id)
    default:
      return state
  }
}
