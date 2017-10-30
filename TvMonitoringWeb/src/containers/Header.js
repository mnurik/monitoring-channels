import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import $ from "jquery";
import Form from "./../components/Form";
import * as actions from "./../actions/actions";
import * as services from "./../utils/services";
import ControlPanel from "./../components/ControlPanel";

class ChannelForm extends Component {

    static propTypes = {
        editCurrentList: PropTypes.func.isRequired,
        editChannel: PropTypes.func.isRequired,
        addChannel: PropTypes.func.isRequired,
        current: PropTypes.object.isRequired,
        channels: PropTypes.array.isRequired,
        editCurrentData: PropTypes.func.isRequired,
        toggleImageMode: PropTypes.func.isRequired
    }

    handleChangeList = (key, value, index) => {
        this.props.editCurrentList({ key, value, index });
    }

    handleSaveChannel = () => {
        const { current } = this.props;
        services.saveChannel(current)
            .subscribe(response => {
                if (current.id) this.props.editChannel(response)
                else this.props.addChannel(response)
            });
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
            />
            <ControlPanel
                startAllChannelsMonitoring={this.startAllChannelsMonitoring}
                stopAllChannelsMonitoring={this.stopAllChannelsMonitoring}
            />
        </div>;
    }
};

export default connect(state => state, { ...actions })(ChannelForm);