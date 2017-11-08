import React, { Component } from 'react'
import Header from './../containers/Header'
import ChannelList from './../containers/ChannelList'
import './App.css'

export default class App extends Component {
  state = { hasError: false }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Sistemdə xəta var.</h1>;
    }
    return (
      <div className='App'>
        <Header />
        <ChannelList />
      </div>
    )
  }
};
