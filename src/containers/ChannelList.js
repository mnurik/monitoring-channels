import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import List from "./../components/List";
import * as actions from "./../actions/actions";
import * as services from "./../utils/services";

class ChannelList extends Component {

    static propTypes = {
        channels: PropTypes.array.isRequired,
        replaceCurrent: PropTypes.func.isRequired,
        editCurrentData: PropTypes.func.isRequired,
        receiveChannels: PropTypes.func.isRequired,
        destroyChannel: PropTypes.func.isRequired,
        saveChannel: PropTypes.func.isRequired,
        startChannel: PropTypes.func.isRequired,
        stopChannel: PropTypes.func.isRequired,
        startAllChannels: PropTypes.func.isRequired,
        stopAllChannels: PropTypes.func.isRequired
    }

    componentDidMount() {
        services.fetchChannels()
            .subscribe(response => this.props.receiveChannels(response));
    }

    deleteChannel = (id) => {
        services.deleteChannel(id)
            .subscribe(() => { this.props.destroyChannel(id) });
    }

    handleSaveChannel = () => {
        this.props.saveChannelRequest();
    }

    startChannelMonitoring = (id) => {
        this.props.startChannelRequested(id);
        services.startChannel(id)
            .subscribe(() => this.props.startChannel(id))
    }

    stopChannelMonitoring = (id) => {
        services.stopChannel(id)
            .subscribe(() => this.props.stopChannel(id))
    }

    render() {
        return <List
            channels={this.props.channels}
            current={this.props.current}
            control={this.props.control}
            onSave={this.handleSaveChannel}
            onDelete={this.deleteChannel}
            onReplace={this.props.replaceCurrent}
            onEditData={this.props.editCurrentData}
            startChannelMonitoring={this.startChannelMonitoring}
            stopChannelMonitoring={this.stopChannelMonitoring}
        />;
    }
}

export default connect(state => state, { ...actions })(ChannelList);