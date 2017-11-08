import React, { Component } from 'react';
import ImageMode from './../components/ImageMode';
import PropTypes from 'prop-types';
import './ControlPanel.css';

export default class ControlPanel extends Component {

  static propTypes = {
    toggleImageMode: PropTypes.func.isRequired,
    imageMode: PropTypes.bool.isRequired,
    startAllChannelsMonitoring: PropTypes.func.isRequired,
    stopAllChannelsMonitoring: PropTypes.func.isRequired
  }

  shouldComponentUpdate(prevState) {
    return prevState.imageMode !== this.props.imageMode;
  }

  render() {
    return (
      <div className='controlPanel-container'>
        <ImageMode toggleImageMode={this.props.toggleImageMode} imageMode={this.props.imageMode} />
        <button type='button' className='btn btn-primary' onClick={this.props.startAllChannelsMonitoring}>Start All</button>
        <button type='button' className='btn btn-danger' onClick={this.props.stopAllChannelsMonitoring}>Stop All</button>
      </div>
    );
  }
};
