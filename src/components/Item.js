import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from "jquery";
import './Item.css';

export default class ChannelItem extends Component {

    static propTypes = {
        channel: PropTypes.object.isRequired
    }

    state = {
        editing: false,
        videoSrc: "",
        started: false
    }

    handleEditingMode = () => {
        this.setState({ editing: true });
        this.props.onReplace(this.props.channel);
    }

    handleBlur = () => {
        this.props.onSave();
        this.setState({ editing: false });
    }

    handleChange = (e) => {
        this.props.onEditData(e.target.value);
        if (e.which === 13) {
            this.props.onSave();
        }
    }

    openModal = () => {
        $('#channelModal').modal('show');
        this.props.onReplace(this.props.channel);
    }

    handleVideoModalShow = () => {
        const { channel } = this.props;
        $('#videoModal').modal('show');
        this.props.onVideoModalShow(channel.videoUrl, channel.Name);
    }

    handleStartMonitoring = () => {
        this.setState({ started: true })
        this.props.startChannelMonitoring(this.props.channel.id)
    }

    handleStopMonitoring = () => {
        this.setState({ started: false })
        this.props.stopChannelMonitoring(this.props.channel.id)
    }

    render() {
        const { channel, onDelete, onSave, current } = this.props;
        const { editing } = this.state;
        return (
            <div className={`panel panel-${channel.isSuccess ? "success" : "danger panel-danger--red"}`}>
                <div className="panel-heading" onDoubleClick={this.handleEditingMode}>
                    {editing ?
                        <input className="form-control" value={current.name} onBlur={this.handleBlur} onChange={this.handleChange} />
                        : channel.name}
                </div>
                <div className="panel-body">
                    <img
                        className="channel__screenshot img-rounded"
                        src={'http://10.50.50.197:3169' + channel.screenShotUrl}
                        alt={channel.screenShotUrl}
                        onClick={this.handleVideoModalShow} />
                    <ul className="channel__list">
                        {channel.channelItems.map(channelItem => <li key={channelItem.id}>
                            {`${channelItem.type === 2 ? "Giriş" : "Çıxış"} ${channelItem.ip}:${channelItem.port} `}
                            <i className={`glyphicon glyphicon-${channelItem.isSuccess ? "ok-sign channel__item--green" : "exclamation-sign channel__item--red"}`} />
                        </li>)}
                    </ul>
                </div>
                <div className="panel-footer clearfix">
                    <div className="btn-group pull-left">
                        {
                            this.state.started || channel.active ?
                                <button className="btn btn-danger btn-sm" onClick={this.handleStopMonitoring}>
                                    <i className="glyphicon glyphicon-stop" />
                                </button>
                                : <button className="btn btn-success btn-sm" onClick={this.handleStartMonitoring}>
                                    <i className="glyphicon glyphicon-play" />
                                </button>
                        }
                    </div>
                    <div className="btn-group pull-right">
                        {editing ?
                            <button className="btn btn-success btn-sm" onClick={onSave}>
                                <i className="glyphicon glyphicon-ok" />
                            </button> : <button className="btn btn-info btn-sm" onClick={this.openModal}>
                                <i className="glyphicon glyphicon-pencil" />
                            </button>}
                        <button className="btn btn-danger btn-sm" onClick={() => { onDelete(channel.id) }}>
                            <i className="glyphicon glyphicon-trash" />
                        </button>
                    </div>
                </div>
            </div>
        );
    }
};