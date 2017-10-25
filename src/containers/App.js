import React, { Component } from 'react'
import ChannelForm from './../containers/ChannelForm'
import ChannelList from './../containers/ChannelList'
import './App.css'

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <ChannelForm />
        <ChannelList />
      </div>
    )
  }
};
