import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import $ from "jquery";
import Form from "./../components/Form";
import * as actions from "./../actions/actions";
import * as services from "./../utils/services";
import ControlPanel from "./../components/ControlPanel";

class Header extends Component {

    static propTypes = {
        editCurrentList: PropTypes.func.isRequired,
        saveChannel: PropTypes.func.isRequired,
        current: PropTypes.object.isRequired,
        channels: PropTypes.array.isRequired,
        editCurrentData: PropTypes.func.isRequired,
        toggleImageMode: PropTypes.func.isRequired
    }

    handleChangeList = (key, value, index) => {
        this.props.editCurrentList({ key, value, index });
    }

    handleSaveChannel = () => {
        this.props.saveChannelRequest();
    }

    handleCloseModal = () => {
        $('#channelModal').modal('hide');
        this.props.clearCurrent();
    }

    startAllChannelsMonitoring = () => {
        const channelIds = this.props.channels.map(channel => channel.id)
        this.props.startAllChannelsRequested(channelIds);
        services.startAllChannels()
            .subscribe(() => this.props.startAllChannels(channelIds))
    }

    stopAllChannelsMonitoring = () => {
        services.stopAllChannels()
            .subscribe(() => this.props.stopAllChannels())
    }

    render() {
        return <div className="row">
            <Form
                currentChannel={this.props.current}
                imageMode={this.props.control.imageMode}
                onChangeData={this.props.editCurrentData}
                onChangeList={this.handleChangeList}
                onChangeCurrent={this.handleChange}
                onSave={this.handleSaveChannel}
                onCloseModal={this.handleCloseModal}
                toggleImageMode={this.props.toggleImageMode}
                deleteChannelItem={this.props.deleteChannelItem}
            />
            <ControlPanel
                startAllChannelsMonitoring={this.startAllChannelsMonitoring}
                stopAllChannelsMonitoring={this.stopAllChannelsMonitoring}
            />
        </div>;
    }
};

export default connect(state => state, { ...actions })(Header);