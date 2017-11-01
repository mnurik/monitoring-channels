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
            <div className='col-sm-3'>
              <input
                className='form-control'
                id='name'
                placeholder='Adı'
                value={props.currentChannel.name}
                onChange={({ target }) => props.onChangeData({ name: target.value })}
              />
            </div>
            <label className='control-label col-sm-1' htmlFor='checkCount'>Təkrarla:</label>
            <div className='col-sm-3'>
              <input
                className='form-control'
                id='checkCount'
                placeholder='Sabit dəyər 2'
                onChange={({ target }) => props.onChangeData({ checkCount: target.value })}
              />
            </div>
            <label className='control-label col-sm-1' htmlFor='frequency'>Tezlik:</label>
            <div className='col-sm-3'>
              <input
                className='form-control'
                id='frequency'
                placeholder='Sabit dəyər 200 Hz'
                onChange={({ target }) => props.onChangeList({ frequency: target.value })}
              />
            </div>
          </div>
          <hr />
          {props.currentChannel.channelItems.map((item, index) =>
            <div className='form-group' key={index}>
              <label className='control-label col-sm-1' htmlFor='type'>Çıxarış:</label>
              <div className='col-sm-2'>
                <select
                  className='form-control'
                  id='type'
                  value={item.type}
                  onChange={({ target }) => props.onChangeList('type', target.value, index)}
                >
                  <option disabled>Seçin</option>
                  <option value='1'>Çıxış</option>
                  <option value='2'>Giriş</option>
                </select>
              </div>
              <label className='control-label col-sm-1' htmlFor='ip'>İp:</label>
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
