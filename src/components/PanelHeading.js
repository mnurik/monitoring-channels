import React from 'react';
import PropTypes from 'prop-types';
import './PanelHeading.css';

const PanelHeading = ({ channel }) => <div className="panel-heading">{channel.name}</div>;

PanelHeading.propTypes = {
  channel: PropTypes.object.isRequired
}

export default PanelHeading;