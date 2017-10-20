import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from "./Button";
import Input from "./Input";
import $ from "jquery";
import './Item.css';

export default class ChannelItem extends Component {

    static propTypes = {
        channel: PropTypes.object.isRequired
    }

    state = {
        editing: false
    }

    handleEditingMode = () => {
        this.setState({ editing: true })
    }

    handleSubmit = e => {
        if (e.which === 13) { }
    }

    openModal = () => {
        $('#channelModal').modal('show');
        this.props.onReplace(this.props.channel);
    }

    render() {
        const { channel, onDelete, onSave, onEdit } = this.props;
        const { editing } = this.state;
        return (
            <div className={`panel panel-${channel.isSuccess ? "success" : "danger"}`}>
                <div className="panel-heading" onDoubleClick={this.handleEditingMode}>
                    {editing ?
                        <Input value={channel.name} onChange={onEdit} />
                        : channel.Name}
                </div>
                <div className="panel-body">
                    <img src={channel.screanShotUrl} alt={channel.screanShotUrl} />
                </div>
                <div className="panel-footer">
                    <div className="btn-group">
                        {editing ?
                            <Button className="success btn-sm" onClick={onSave}>
                                <i className="fa fa-check" />
                            </Button> : <Button className="info btn-sm" onClick={this.openModal}>
                                <i className="fa fa-pencil" />
                            </Button>}
                        <Button className="danger btn-sm" onClick={() => { onDelete(channel.id) }}>
                            <i className="fa fa-trash" />
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
};