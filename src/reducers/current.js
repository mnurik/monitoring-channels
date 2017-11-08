import * as actionTypes from './../constants/actionTypes'

export const initialState = {
  id: null,
  group: '',
  checkCount: '',
  frequency: '',
  name: '',
  channelItems: [{ id: null, ip: '', port: '', type: 1 }]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.EDIT_CURRENT_CHANNEL:
      return { ...state, ...action.payload }
    case actionTypes.EDIT_CURRENT_CHANNEL_IPLIST:
      return {
        ...state,
        channelItems: state.channelItems.map((ip, index) => {
          if (index === action.payload.index) {
            return { ...ip, [action.payload.key]: action.payload.value }
          }
          return ip
        })
      }
    case actionTypes.REPLACE_CURRENT_CHANNEL:
      return action.payload;
    case actionTypes.DELETE_CURRENT_CHANNEL_ITEM:
      return {
        ...state,
        channelItems: [
          ...state.channelItems.slice(0, action.index),
          ...state.channelItems.slice(action.index + 1)
        ]
      };
    case actionTypes.ADD_CURRENT_CHANNEL_ITEM:
      return {
        ...state,
        channelItems: state.channelItems.concat(initialState.channelItems)
      };
    case actionTypes.CLEAR_CURRENT_CHANNEL:
      return initialState;
    default:
      return state
  }
}
