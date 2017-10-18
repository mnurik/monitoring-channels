import React, { Component } from 'react';
import Channel from './../components/Channel';
import './App.css';

class App extends Component {
  state = {
    channels: []
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Channel channels={this.state.channels} />
        </div>
      </div>
    );
  }
}

export default App;
