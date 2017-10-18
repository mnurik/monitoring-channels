import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

//  Bootstrap. Easy way including inside scripts, but we don't like ease ways :)
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import jquery from 'jquery';
window.$ = window.jQuery = jquery;
window.Tether = require('tether');
require('bootstrap/dist/js/bootstrap');

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
