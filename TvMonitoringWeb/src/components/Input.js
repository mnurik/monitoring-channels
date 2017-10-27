import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Input extends Component {
    static propTypes = {
        onSave: PropTypes.func.isRequired,
        value: PropTypes.string,
        placeholder: PropTypes.string,
        editing: PropTypes.bool,
        newTodo: PropTypes.bool
    }

    state = {
        value: this.props.value || ''
    }

    handleSubmit = e => {
        const value = e.target.value.trim()
        if (e.which === 13) {
            this.props.onSave(value)
            if (this.props.newTodo) {
                this.setState({ value: '' })
            }
        }
    }

    handleChange = e => {
        this.setState({ text: e.target.value })
    }

    handleBlur = e => {
        if (!this.props.newTodo) {
            this.props.onSave(e.target.value)
        }
    }

    render() {
        return (
            <input
                className="form-control"
                type={this.props.type || "text"}
                value={this.props.value}
                onBlur={this.handleBlur}
                onChange={this.handleChange}
                onKeyDown={this.handleSubmit}
            />
        );
    }
}

export default Input;