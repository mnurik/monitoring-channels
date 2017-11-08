import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import $ from "jquery";
import FormModal from "./../components/FormModal";
import * as actions from "./../actions/actions";
import * as services from "./../utils/services";
import ControlPanel from "./../components/ControlPanel";
import './Header.css';

class Header extends Component {

    static propTypes = {
        onChangeChannelItem: PropTypes.func.isRequired,
        saveChannel: PropTypes.func.isRequired,
        current: PropTypes.object.isRequired,
        channels: PropTypes.object.isRequired,
        editCurrentData: PropTypes.func.isRequired,
        toggleImageMode: PropTypes.func.isRequired
    }

    componentDidMount() {
        $('#channelModal').on('hidden.bs.modal', () => {
            this.props.clearCurrent();
        })
    }

    handleSaveChannel = () => {
        services.saveChannel(this.props.current)
            .subscribe(this.props.saveChannel)
    }

    startAllChannelsMonitoring = () => {
        const channelIds = this.props.channels.list.map(channel => channel.id)
        this.props.startAllChannelsRequested(channelIds);
        services.startAllChannels()
            .subscribe(() => this.props.startAllChannels(channelIds))
    }

    stopAllChannelsMonitoring = () => {
        services.stopAllChannels()
            .subscribe(() => this.props.stopAllChannels())
    }

    render() {
        return <header className="margin-b-10">
            <FormModal
                currentChannel={this.props.current}
                onChangeData={this.props.editCurrentData}
                onChangeChannelItem={this.props.onChangeChannelItem}
                onDeleteChannelItem={this.props.deleteChannelItem}
                onAddChannelItem={this.props.addChannelItem}
                onChangeCurrent={this.handleChange}
                onSave={this.handleSaveChannel}
            />
            <ControlPanel
                imageMode={this.props.control.imageMode}
                toggleImageMode={this.props.toggleImageMode}
                startAllChannelsMonitoring={this.startAllChannelsMonitoring}
                stopAllChannelsMonitoring={this.stopAllChannelsMonitoring}
            />
        </header>;
    }
};

export default connect(state => state, { ...actions })(Header);