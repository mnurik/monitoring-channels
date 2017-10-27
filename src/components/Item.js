import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from "jquery";
import './Item.css';

export default class Item extends Component {

    static propTypes = {
        channel: PropTypes.object.isRequired,
        current: PropTypes.object.isRequired,
        control: PropTypes.object.isRequired,
        onReplace: PropTypes.func.isRequired,
        onSave: PropTypes.func.isRequired,
        onEditData: PropTypes.func.isRequired,
        onVideoModalShow: PropTypes.func.isRequired,
        startChannelMonitoring: PropTypes.func.isRequired,
        stopChannelMonitoring: PropTypes.func.isRequired,
        onDelete: PropTypes.func.isRequired
    }

    state = {
        editing: false,
        videoSrc: ""
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

    render() {
        const { channel, onDelete, current, control, startChannelMonitoring, stopChannelMonitoring } = this.props;
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
                        src={channel.screenShotUrl}
                        alt=""
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
                            control.channels.includes(channel.id) ?
                                <button className="btn btn-danger btn-sm" onClick={() => stopChannelMonitoring(channel.id)}>
                                    <i className="glyphicon glyphicon-stop" />
                                </button>
                                : <button className="btn btn-success btn-sm" onClick={() => startChannelMonitoring(channel.id)}>
                                    <i className="glyphicon glyphicon-play" />
                                </button>
                        }
                    </div>
                    <div className="btn-group pull-right">
                        {editing ?
                            <button className="btn btn-success btn-sm" onClick={this.handleBlur}>
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