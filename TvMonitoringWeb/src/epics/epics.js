import "rxjs/Observable"
import { combineEpics } from 'redux-observable'
import * as actionTypes from './../constants/actionTypes'
import * as actions from './../actions/actions'
import * as services from './../utils/services'

const startEpics = action$ => action$.ofType(actionTypes.START_CHANNEL, actionTypes.START_ALL_CHANNELS)
  .mapTo(actions.editChannel([]))

const getActivesEpics = (action$, store) => action$.ofType(actionTypes.EDIT_CHANNEL)
  .debounceTime(5 * 1000)
  .mergeMap(action =>
    services.getActivesChannels(store.getState().control.imageMode)
      .map(response => actions.editChannel(response))
      .takeUntil(action$.ofType(actionTypes.STOP_ALL_CHANNELS))
  )

export default combineEpics(startEpics, getActivesEpics)
