import React from 'react'
import './ControlPanel.css'

const ControlPanel = (props) => <div className="col-sm-4">
  <div className="col-sm-6">
    <div class="checkbox-container">
      <span className="checkbox__text">Görüntülü</span>
      <input data-index="0" id="imageMode" type="checkbox" onChange={props.toggleImageMode} />
      <label for="imageMode" className="checkbox__view"></label>
    </div>
  </div>
  <div className="col-sm-3">
    <button type='button' className='btn btn-primary' onClick={props.startAllChannelsMonitoring}>Start All</button>
  </div>
  <div className="col-sm-3">
    <button type='button' className='btn btn-danger' onClick={props.stopAllChannelsMonitoring}>Stop All</button>
  </div>
</div>

export default ControlPanel
