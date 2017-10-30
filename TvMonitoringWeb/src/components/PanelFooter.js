import React from 'react';
import PropTypes from 'prop-types';

const PanelFooter = ({ channel, includedChannel, openModal, stopChannelMonitoring, startChannelMonitoring, onDelete }) => <div className="panel-footer clearfix">
  <div className="btn-group pull-left">
    {
      includedChannel ?
        <button className="btn btn-danger btn-sm" onClick={() => stopChannelMonitoring(channel.id)}>
          <i className="glyphicon glyphicon-stop" />
        </button>
        : <button className="btn btn-success btn-sm" onClick={() => startChannelMonitoring(channel.id)}>
          <i className="glyphicon glyphicon-play" />
        </button>
    }
  </div>
  <div className="btn-group pull-right">
    <button className="btn btn-info btn-sm" onClick={openModal}>
      <i className="glyphicon glyphicon-pencil" />
    </button>
    {includedChannel ? null : <button className="btn btn-danger btn-sm" onClick={() => { onDelete(channel.id) }}>
      <i className="glyphicon glyphicon-trash" />
    </button>}
  </div>
</div>;

PanelFooter.propTypes = {
  includedChannel: PropTypes.bool.isRequired,
  openModal: PropTypes.func.isRequired
}

export default PanelFooter;