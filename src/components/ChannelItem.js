import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from "./Button";
import Input from "./Input";
import { saveChannel } from "./../utils/services";
import './ChannelItem.css';

class ChannelItem extends Component {

    static propTypes = {
        channel: PropTypes.object.isRequired,
        onDeleteChannel: PropTypes.func.isRequired
    }

    state = {
        channel: this.props.channel,
        editing: false
    }

    handleEditingClick = () => {
        this.setState({ editing: true })
    }

    handleChange = (key, value) => {
        this.setState({ channel: { ...this.state.channel, [key]: value } });
    }

    handleSave = () => {
        const { id, name, url } = this.state.channel;
        saveChannel({ id, name, url });
        this.setState({ editing: false });
    }

    handleDeleteClick = () => {
        const { id } = this.state.channel;
        this.props.onDeleteChannel(id);
    }

    handleStartMonitoring = () => {

    }

    handleStopMonitoring = () => {

    }

    render() {
        const { channel } = this.state;
        return (
            <div className="panel panel-success">
                <div className="panel-heading">
                    {this.state.editing ?
                        <Input value={this.state.channel.name} onChange={(value) => this.handleChange("name", value)} />
                        : this.state.channel.name}
                </div>
                <div className="panel-body">
                    <img src={channel.imageUrl} alt={channel.imageUrl} />
                </div>
                <div className="panel-footer">
                    <div onDoubleClick={this.handleEditingClick}>
                        <div className="btn-group">
                            {this.state.editing ?
                                <Button className="trick" onClick={this.handleSave}>
                                    <i className="fa fa-pencil" />
                                </Button>
                                : <Button className="info btn-sm" onClick={this.handleEditingClick}>
                                    <i className="fa fa-pencil" />
                                </Button>
                            }
                            <Button className="danger btn-sm" onClick={this.handleDeleteClick}>
                                <i className="fa fa-trash" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ChannelItem;