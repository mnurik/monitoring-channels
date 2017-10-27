import React from 'react';
import PropTypes from 'prop-types';

const FormModal = (props) => <div id='channelModal' className='modal fade' role='dialog'>
  <div className='modal-dialog modal-lg'>
    <div className='modal-content'>
      <div className='modal-header'>
        <button type='button' className='close' onClick={props.onCloseModal}>&times;</button>
        <h4 className='modal-title'>Yeni Kanal</h4>
      </div>
      <div className='modal-body'>
        <form className='form-horizontal'>
          <div className='form-group'>
            {/* <label className='control-label col-sm-1' htmlFor='group'>Qrup:</label>
                <div className='col-sm-5'>
                  <input
                    className='form-control'
                    id='group'
                    placeholder='Qrupu'
                    value={currentChannel.group}
                    onChange={({ target }) => onChangeData({ group: target.value })}
                  />
                </div> */}
            <label className='control-label col-sm-1' htmlFor='name'>Adı:</label>
            <div className='col-sm-5'>
              <input
                className='form-control'
                id='name'
                placeholder='Adı'
                value={props.currentChannel.name}
                onChange={({ target }) => props.onChangeData({ name: target.value })}
              />
            </div>
            <label className='control-label col-sm-1' htmlFor='frequency'>Tezlik:</label>
            <div className='col-sm-5'>
              <input
                className='form-control'
                id='frequency'
                value={props.currentChannel.frequency}
                placeholder='Sabit dəyər 500 Hz'
                onChange={({ target }) => props.onChangeList({ frequency: target.value })}
              />
            </div>
          </div>
          {props.currentChannel.channelItems.map((item, index) =>
            <div className='form-group' key={index}>
              <label className='control-label col-sm-1' htmlFor='type'>Cixaris:</label>
              <div className='col-sm-3'>
                <select
                  className='form-control'
                  id='type'
                  value={item.type}
                  onChange={({ target }) => props.onChangeList('type', target.value, index)}
                >
                  <option disabled>Secin</option>
                  <option value='1'>Cixis</option>
                  <option value='2'>Giris</option>
                </select>
              </div>
              <label className='control-label col-sm-1' htmlFor='ip'>Ip:</label>
              <div className='col-sm-3'>
                <input
                  className='form-control'
                  id='ip'
                  value={item.ip}
                  placeholder='ip'
                  onChange={({ target }) => props.onChangeList('ip', target.value, index)}
                />
              </div>
              <label className='control-label col-sm-1' htmlFor='port'>Port:</label>
              <div className='col-sm-3'>
                <input
                  className='form-control'
                  id='port'
                  value={item.port}
                  placeholder='Port'
                  onChange={({ target }) => props.onChangeList('port', target.value, index)}
                />
              </div>
            </div>
          )}
        </form>
      </div>
      <div className='modal-footer'>
        <button
          type='button'
          className='btn btn-success'
          data-dismiss='modal'
          onClick={props.onSave}>Əlavə Et</button>
      </div>
    </div>
  </div>
</div>;

FormModal.clearCurrentpropTypes = {
  currentChannel: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChangeData: PropTypes.func.isRequired,
  onChangeList: PropTypes.func.isRequired,
  onCloseModal: PropTypes.func.isRequired
};

export default FormModal;
