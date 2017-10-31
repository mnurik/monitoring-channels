import * as actionTypes from './../constants/actionTypes'

export const initialState = {
  id: null,
  group: '',
  checkCount: 2,
  frequency: 200,
  name: '',
  channelItems: [{ id: null, ip: '', port: '', type: 1 }]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.EDIT_CURRENT_CHANNEL:
      return { ...state, ...action.payload }
    case actionTypes.EDIT_CURRENT_CHANNEL_IPLIST:
      // It this case checks if changes happens for last ip in list, 
      // then we add initial ip object to this list. If not then we just update properties.
      let channelItems = state.channelItems.slice()
      if (action.payload.index === (channelItems.filter(item => !item.isDeleted).length - 1)) {
        channelItems.push(initialState.channelItems[0])
      };
      return {
        ...state,
        channelItems: channelItems.map((ip, index) => {
          if (index === action.payload.index) {
            return { ...ip, [action.payload.key]: action.payload.value }
          }
          return ip
        })
      }
    case actionTypes.REPLACE_CURRENT_CHANNEL:
      return action.payload;
    case actionTypes.DELETE_CHANNEL_ITEM:
      return {
        ...state,
        channelItems: state.channelItems.map((item, index) => {
          if (index === action.index) {
            return { ...item, isDeleted: true }
          }
          return item;
        })
      };
    case actionTypes.CLEAR_CURRENT_CHANNEL:
      return initialState;
    default:
      return state
  }
}
