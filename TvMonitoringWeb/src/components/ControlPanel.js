import React from 'react'
import './ControlPanel.css'

const ControlPanel = (props) => <div className="col-lg-2 col-sm-9 clearfix margin-b-10">
  <button type='button' className='btn btn-primary pull-left' onClick={props.startAllChannelsMonitoring}>Start All</button>
  <button type='button' className='btn btn-danger pull-right' onClick={props.stopAllChannelsMonitoring}>Stop All</button>
</div>;

export default ControlPanel
