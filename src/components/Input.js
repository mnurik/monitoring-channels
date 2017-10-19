import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => <input
    id={props.id}
    className="form-control"
    placeholder={props.placeholder}
    type={props.type || "text"}
    value={props.value}
    onChange={e => props.onChange(e.target.value)}
/>;


Input.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    editing: PropTypes.bool
}

export default Input;