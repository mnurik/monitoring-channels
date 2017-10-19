import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => <button
    className={`btn btn-${props.className}`}
    onClick={props.onClick}
>{props.children}</button>;

Button.propTypes = {
    className: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
}

export default Button;