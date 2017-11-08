import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import 'bootstrap/dist/css/bootstrap.min.css'
import jquery from 'jquery'

import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'
import configureStore from './store/configureStore'

window.$ = window.jQuery = jquery
require('bootstrap/dist/js/bootstrap')

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
