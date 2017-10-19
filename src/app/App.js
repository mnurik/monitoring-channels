import React, { Component } from 'react';
import ChannelForm from './../components/ChannelForm';
import ChannelList from './../components/ChannelList';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <ChannelForm />
        <ChannelList />
      </div>
    );
  }
};