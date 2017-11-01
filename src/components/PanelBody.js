import React from 'react';
import PropTypes from 'prop-types';
import './PanelBody.css';
import { URL } from "./../constants/endPoints";

const PanelBody = ({ control, channel }) => <div className="panel-body">
  {control.imageMode ? <img
    className="channel__screenshot img-rounded"
    src={`${URL}${channel.screenShotUrl}`}
    alt=""
    onClick={this.handleVideoModalShow} /> : null}
  <ul className="channel__list">
    {channel.channelItems.map(channelItem => <li key={channelItem.id}>
      {`${channelItem.type === 2 ? "Giriş" : "Çıxış"} ${channelItem.ip}:${channelItem.port} `}
      <i className={`glyphicon glyphicon-${channelItem.isSuccess ? "ok-sign channel__item--green" : "exclamation-sign channel__item--red"}`} />
    </li>)}
  </ul>
</div>;

PanelBody.propTypes = {
  control: PropTypes.object.isRequired,
  channel: PropTypes.object.isRequired
}

export default PanelBody;