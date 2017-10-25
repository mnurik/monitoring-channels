import React from 'react'

const ControlPanel = (props) => <div>
  <button type='button' className='btn btn-primary pull-left' onClick={props.startAllChannelsMonitoring}>Start All</button>
  <button type='button' className='btn btn-danger pull-right' onClick={props.stopAllChannelsMonitoring}>Stop All</button>
</div>

export default ControlPanel
