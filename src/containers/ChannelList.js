import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { connect } from "react-redux";
import List from "./../components/List";
import Loading from "./../components/Loading";
import * as actions from "./../actions/actions";
import * as services from "./../utils/services";

class ChannelList extends Component {

    static propTypes = {
        channels: PropTypes.object.isRequired,
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

    shouldComponentUpdate(prevState) {
        /** Don't rerender this component if current state is the same */
        return _.isEqual(prevState.current, this.props.current);
    }

    componentDidMount() {
        this.props.loadChannels();
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
        return this.props.channels.loading ? <Loading /> : <List
            channels={this.props.channels.list}
            current={this.props.current}
            control={this.props.control}
            onSave={this.handleSaveChannel}
            onDelete={this.deleteChannel}
            onReplace={this.props.replaceCurrent}
            onEditData={this.props.editCurrentData}
            startChannelMonitoring={this.startChannelMonitoring}
            stopChannelMonitoring={this.stopChannelMonitoring}
        />
    }
}

export default connect(state => state, { ...actions })(ChannelList);