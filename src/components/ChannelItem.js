import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from "./Button";
import Input from "./Input";
import { saveChannel, deleteChannel } from "./../utils/services";
import { destroyChannel } from "./../actions/actions";
import './ChannelItem.css';

class ChannelItem extends Component {

    static propTypes = {
        channel: PropTypes.object.isRequired
    }

    state = {
        editing: false
    }

    handleEditingClick = () => {
        this.setState({ editing: true })
    }

    handleChange = (key, value) => {
        this.setState({ channel: { ...this.state.channel, [key]: value } });
    }

    handleSave = () => {
        const { id, name, url } = this.props.channel;
        saveChannel({ id, name, url });
        this.setState({ editing: false });
    }

    handleDeleteClick = () => {
        const { id } = this.props.channel;
        deleteChannel()
            .then(() => this.props.destroyChannel(id));
    }

    render() {
        const { channel } = this.props;
        return (
            <div className={`panel panel-${channel.IsSuccess ? "success" : "danger"}`}>
                <div className="panel-heading" onDoubleClick={this.handleEditingClick}>
                    {this.state.editing ?
                        <Input value={channel.Name} onChange={(value) => this.handleChange("name", value)} />
                        : channel.Name}
                </div>
                <div className="panel-body">
                    <img src={channel.ScreanShotUrl} alt={channel.ScreanShotUrl} />
                </div>
                <div className="panel-footer">
                    <div className="btn-group">
                        {this.state.editing ?
                            <Button className="success btn-sm" onClick={this.handleSave}>
                                <i className="fa fa-check" />
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
        );
    } IpList
}

export default connect(null, { destroyChannel })(ChannelItem);