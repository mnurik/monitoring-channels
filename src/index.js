import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'
import configureStore from './store/configureStore'

//  Bootstrap. Easy way including inside scripts, but we don't like ease ways :)
import 'bootstrap/dist/css/bootstrap.min.css'
import 'toastr/build/toastr.css'
import jquery from 'jquery'
window.$ = window.jQuery = jquery
window.Tether = require('tether')
require('bootstrap/dist/js/bootstrap')

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
