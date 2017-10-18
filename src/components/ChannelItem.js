import React, { Component } from 'react';
import Button from "./Button";
import Input from "./Input";

class ChannelItem extends Component {
    state = {
        editing: false
    }

    handleDoubleClick = () => {
        this.setState({ editing: true })
    }

    handleSave = (id, text) => {
        this.setState({ editing: false })
    }

    render() {
        const { channel } = this.props;
        return (
            <tr>
                <td>
                    {this.state.editing ?
                        <Input value={channel.name} onSave={(text) => this.handleSave(channel.id, text)} />
                        : <span onDoubleClick={this.handleDoubleClick}>{channel.name}</span>}
                </td>
                <td>
                    {this.state.editing ?
                        <Input value={channel.uid} onSave={(text) => this.handleSave(channel.id, text)} />
                        : <span onDoubleClick={this.handleDoubleClick}>{channel.uid}</span>}
                </td>
                <td>
                    {this.state.editing ?
                        <Input value={channel.status} onSave={(text) => this.handleSave(channel.id, text)} />
                        : <span onDoubleClick={this.handleDoubleClick}>{channel.status}</span>}
                </td>
                <td>
                    <div className="btn-group">
                        <Button className="info">Dəyiş</Button>
                        <Button className="danger">Sil</Button>
                    </div>
                </td>
            </tr>
        );
    }
}

export default ChannelItem;