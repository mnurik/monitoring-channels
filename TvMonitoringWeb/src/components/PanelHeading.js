import React from 'react';
import PropTypes from 'prop-types';

const PanelHeading = ({ channel }) => <div className="panel-heading">{channel.name}</div>;

PanelHeading.propTypes = {
  channel: PropTypes.array.isRequired
}

export default PanelHeading;