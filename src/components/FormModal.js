import React, { Component } from 'react';
import Inputmask from "inputmask";
import PropTypes from 'prop-types';
import _ from "lodash";
import './FormModal.css';

/**
 *  This is component is controlled because we need handle rerender.
*/

export default class FormModal extends Component {

  shouldComponentUpdate(prevState) {
    /** Don't rerender this component if current state is the same */
    return !_.isEqual(prevState.currentChannel, this.props.currentChannel);
  }

  static propTypes = {
    currentChannel: PropTypes.object.isRequired,
    onSave: PropTypes.func.isRequired,
    onChangeData: PropTypes.func.isRequired,
    onChangeChannelItem: PropTypes.func.isRequired,
    onDeleteChannelItem: PropTypes.func.isRequired
  }

  inputMask() {
    Inputmask("9{1,3}.9{1,3}.9{1,3}.9{1,3}").mask(document.querySelectorAll('input[name="ip"]'));
  }

  componentDidMount() {
    this.inputMask();
  }

  componentDidUpdate() {
    this.inputMask();
  }

  render() {
    const { currentChannel } = this.props;
    const { channelItems } = currentChannel;
    const disabled = !(currentChannel.name && channelItems.some(item => !item.ip.includes('_') && item.ip && item.port));
    return (
      <div className="clearfix channel__add__container">
        <button
          type='button'
          className='btn btn-default pull-left channel__add__button'
          data-toggle='modal'
          data-target='#channelModal'
        >Yeni</button>
        <div id='channelModal' className='modal fade' role='dialog'>
          <div className='modal-dialog modal-lg'>
            <div className='modal-content'>
              <div className='modal-header text-center'>
                <button type='button' className='close' data-dismiss="modal">&times;</button>
                <h4 className='modal-title'>Yeni Kanal</h4>
              </div>
              <div className='modal-body'>
                <div className='form-horizontal'>
                  <div className='form-group'>
                    <label className='control-label col-sm-1' htmlFor='name'>Adı*:</label>
                    <div className={`col-sm-3 ${this.props.currentChannel.name ? '' : 'has-error'}`}>
                      <input
                        className='form-control'
                        id='name'
                        placeholder='exampleTV'
                        value={this.props.currentChannel.name}
                        onChange={({ target }) => this.props.onChangeData({ name: target.value })}
                      />
                    </div>
                    <label className='control-label col-sm-1' htmlFor='checkCount'>Təkrarla:</label>
                    <div className='col-sm-3'>
                      <input
                        className='form-control'
                        id='checkCount'
                        type='number'
                        value={this.props.currentChannel.checkCount}
                        placeholder='Sabit dəyəri 2'
                        onChange={({ target }) => this.props.onChangeData({ checkCount: target.value })}
                      />
                    </div>
                    <label className='control-label col-sm-1' htmlFor='frequency'>Tezlik:</label>
                    <div className='col-sm-3'>
                      <input
                        className='form-control'
                        id='frequency'
                        type='number'
                        value={this.props.currentChannel.frequency}
                        placeholder='Sabit dəyəri 200 Hz'
                        onChange={({ target }) => this.props.onChangeData({ frequency: target.value })}
                      />
                    </div>
                  </div>
                  <hr />
                  {this.props.currentChannel.channelItems.map((item, index, array) =>
                    <div className='form-group' key={index}>
                      <label className='control-label col-sm-1' htmlFor='type'>Çıxarış:</label>
                      <div className='col-sm-2'>
                        <select
                          className='form-control'
                          name='type'
                          value={item.type}
                          onChange={({ target }) => this.props.onChangeChannelItem({ key: 'type', value: target.value, index })}
                        >
                          <option value='1'>Çıxış</option>
                          <option value='2'>Giriş</option>
                        </select>
                      </div>
                      <label className='control-label col-sm-1' htmlFor='ip'>İp*:</label>
                      <div className={`col-sm-3 ${item.ip && !item.ip.includes('_') ? '' : 'has-error'}`}>
                        <input
                          className='form-control'
                          name='ip'
                          value={item.ip}
                          onChange={({ target }) => this.props.onChangeChannelItem({ key: 'ip', value: target.value, index })}
                        />
                      </div>
                      <label className='control-label col-sm-1' htmlFor='port'>Port*:</label>
                      <div className={`col-sm-3 ${item.port ? '' : 'has-error'}`}>
                        <input
                          className='form-control'
                          name='port'
                          type='number'
                          value={item.port}
                          placeholder='0000'
                          onChange={({ target }) => this.props.onChangeChannelItem({ key: 'port', value: target.value, index })}
                        />
                      </div>
                      <div className='col-sm-1 text-right'>
                        <button type='button' className="btn btn-danger btn-sm" onClick={() => { this.props.onDeleteChannelItem(index) }}>
                          <i className="glyphicon glyphicon-trash" />
                        </button>
                      </div>
                    </div>
                  )}
                  <div className='row'>
                    <div className='col-xs-12 text-right'>
                      <button type='button' className="btn btn-success btn-sm pull-right" onClick={this.props.onAddChannelItem}>
                        <i className="glyphicon glyphicon-plus" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='modal-footer'>
                <button
                  type='button'
                  className='btn btn-success'
                  data-dismiss='modal'
                  disabled={disabled}
                  onClick={this.props.onSave}>Yadda Saxla</button>
              </div>
            </div>
          </div>
        </div>
      </div >
    );
  }
};
