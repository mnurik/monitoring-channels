import React from 'react';
import PropTypes from 'prop-types';

const ImageMode = (props) => (
  <div className="checkbox-container pull-right">
    <span className="checkbox__text">{props.imageMode ? "Görüntülü" : "Görüntüsüz"}</span>
    <input data-index="0" id="imageMode" type="checkbox" checked={props.imageMode} onChange={props.toggleImageMode} />
    <label htmlFor="imageMode" className="checkbox__view"></label>
  </div>
);

ImageMode.propTypes = {
  toggleImageMode: PropTypes.func.isRequired,
  imageMode: PropTypes.bool.isRequired
};

export default ImageMode;