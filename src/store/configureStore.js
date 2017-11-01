import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createEpicMiddleware } from 'redux-observable'
import rootEpic from './../epics/epics'
import reducers from './../reducers'

const epicMiddleware = createEpicMiddleware(rootEpic)

const configureStore = () => {
  return createStore(
    reducers,
    composeWithDevTools(applyMiddleware(epicMiddleware)))
}

export default configureStore
