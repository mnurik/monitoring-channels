import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from "jquery";
import PanelHeading from "./PanelHeading";
import PanelBody from "./PanelBody";
import PanelFooter from "./PanelFooter";
import './Channel.css';

export default class Channel extends Component {

    static propTypes = {
        channel: PropTypes.object.isRequired,
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
        videoSrc: "",
        loader: false
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
        const { channel, control } = this.props;
        const includedChannel = control.channels.includes(channel.id);
        const includedLoading = control.loading.includes(channel.id);
        return (
            <div className={`panel panel-${includedChannel ? channel.isSuccess ? "success" : "danger panel-danger--red" : "default"}`}>
                <PanelHeading channel={channel} />
                <PanelBody channel={channel} control={control} />
                <PanelFooter channel={channel}
                    includedChannel={includedChannel}
                    includedLoading={includedLoading}
                    openModal={this.openModal}
                    stopChannelMonitoring={this.props.stopChannelMonitoring}
                    startChannelMonitoring={this.props.startChannelMonitoring}
                    onDelete={this.props.onDelete}
                />
            </div>
        );
    }
};