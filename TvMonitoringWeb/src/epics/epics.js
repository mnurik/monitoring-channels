import { Observable } from "rxjs"
import { combineEpics } from 'redux-observable'
import * as actionTypes from './../constants/actionTypes'
import * as actions from './../actions/actions'
import * as services from './../utils/services'

const startEpics = action$ => action$.ofType(actionTypes.START_CHANNEL, actionTypes.START_ALL_CHANNELS)
  .mapTo(actions.getActives([]));

const getActivesEpics = (action$, store) => action$.ofType(actionTypes.GET_ACTIVE_CHANNELS)
  .debounceTime(5 * 1000)
  .mergeMap(action => {
    const state = store.getState();
    if (state.control.channels.length) {
      return services.getActivesChannels(state.control.imageMode)
        .map(response => actions.getActives(response))
        .takeUntil(action$.ofType(actionTypes.STOP_ALL_CHANNELS));
    } else {
      return Observable.empty();
    }
  });

const clearCurrentEpic = action$ => action$.ofType(actionTypes.SAVE_CHANNEL)
  .mapTo(actions.clearCurrent());


export default combineEpics(startEpics, getActivesEpics, clearCurrentEpic)
