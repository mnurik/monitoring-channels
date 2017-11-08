import _ from 'lodash';
import * as actionTypes from './../constants/actionTypes'

export const initialState = {
  loading: false,
  list: []
};

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
      return { ...state, loading: true }
    case actionTypes.RECEIVE_CHANNELS:
      return { loading: false, list: action.payload }
    case actionTypes.SAVE_CHANNEL:
      return {
        loading: false,
        list: mergeById(state.list, action.payload)
      };
    case actionTypes.GET_ACTIVE_CHANNELS:
      if (!Array.isArray(action.payload)) {
        return state;
      }
      let clonedState = state.list;
      action.payload.forEach(channel => {
        clonedState = mergeById(clonedState, channel);
      });
      return {
        loading: false,
        list: clonedState
      };
    case actionTypes.DELETE_CHANNEL:
      return {
        loading: false,
        list: state.list.filter(channel => channel.id !== action.payload.id)
      }
    default:
      return state
  }
}
