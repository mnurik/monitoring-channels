import React, { Component } from 'react';
import Channel from './../components/Channel';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Channel />
        </div>
      </div>
    );
  }
}

export default App;
