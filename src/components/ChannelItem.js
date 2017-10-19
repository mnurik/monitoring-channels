import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from "./Button";
import Input from "./Input";
import { saveChannel } from "./../utils/services";

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
        return (
            <tr onDoubleClick={this.handleEditingClick}>
                <td>
                    {this.state.editing ?
                        <Input value={this.state.channel.name} onChange={(value) => this.handleChange("name", value)} />
                        : this.state.channel.name}
                </td>
                <td>
                    {this.state.editing ?
                        <Input value={this.state.channel.url} onChange={(value) => this.handleChange("url", value)} />
                        : this.state.channel.url}
                </td>
                <td>{this.state.channel.status}</td>
                <td>
                    <div className="btn-group">
                        <Button className="primary" onClick={this.handleStartMonitoring}>Start</Button>
                        <Button className="warning" onClick={this.handleStopMonitoring}>Stop</Button>
                    </div>
                </td>
                <td>
                    <div className="btn-group">
                        {this.state.editing ?
                            <Button className="info" onClick={this.handleSave}>Yadda saxla</Button>
                            : <Button className="info" onClick={this.handleEditingClick}>Dəyiş</Button>
                        }
                        <Button className="danger" onClick={this.handleDeleteClick}>Sil</Button>
                    </div>
                </td>
            </tr>
        );
    }
}

export default ChannelItem;