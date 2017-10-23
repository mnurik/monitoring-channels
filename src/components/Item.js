import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
        this.setState({ editing: true });
        this.props.onReplace(this.props.channel);
    }

    handleBlur = () => {
        this.props.onSave();
        this.setState({ editing: false });
    }

    handleChange = (e) => {
        this.props.onEditName(e.target.value);
        if (e.which === 13) {
            this.props.onSave();
        }
    }

    openModal = () => {
        $('#channelModal').modal('show');
        this.props.onReplace(this.props.channel);
    }

    render() {
        const { channel, onDelete, onSave, current } = this.props;
        const { editing } = this.state;
        return (
            <div className={`panel panel-${channel.isSuccess ? "success" : "danger"}`}>
                <div className="panel-heading" onDoubleClick={this.handleEditingMode}>
                    {editing ?
                        <input className="form-control" value={current.Name} onBlur={this.handleBlur} onChange={this.handleChange} />
                        : channel.Name}
                </div>
                <div className="panel-body">
                    <img
                        className="channel__screenshot img-rounded"
                        src={channel.screanShotUrl}
                        alt={channel.screanShotUrl}
                        data-toggle="modal"
                        data-target="#videoModal" />
                    <div className="modal fade" id="videoModal" role="dialog">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-body">
                                    <video width="100%" height="100%" controls>
                                        <source src="http://techslides.com/demos/sample-videos/small.mp4" type="video/mp4" />
                                    </video>
                                </div>
                            </div>

                        </div>
                    </div>
                    <ul className="channel__list">
                        {channel.IpList.map(item =>
                            <li key={item.Id}>
                                {`${item.type}, ${item.Ip}:${item.Port} `}
                                <i className={`glyphicon glyphicon-${item.status ? "ok-sign channel__item--green" : "exclamation-sign channel__item--red"}`} />
                            </li>)}
                    </ul>
                </div>
                <div className="panel-footer">
                    <div className="btn-group">
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