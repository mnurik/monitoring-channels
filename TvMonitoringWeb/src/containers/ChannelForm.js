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
        clearCurrent: PropTypes.func.isRequired,
        current: PropTypes.object.isRequired,
        channels: PropTypes.array.isRequired,
        editCurrentData: PropTypes.func.isRequired,
        toggleImageMode: PropTypes.func.isRequired
    }

    handleChangeList = (key, value, index) => {
        this.props.editCurrentList({ key, value, index });
    }

    handleSaveChannel = () => {
        services.saveChannel(this.props.current)
            .subscribe(response => {
                if (response.id) this.props.editChannel(response)
                else this.props.addChannel(response)
                this.props.clearCurrent()
            });
    }

    handleCloseModal = () => {
        $('#channelModal').modal('hide');
        this.props.clearCurrent();
    }

    startAllChannelsMonitoring = () => {
        services.startAllChannels()
            .subscribe(() => this.props.startAllChannels(this.props.channels.map(channel => channel.id)))
    }

    stopAllChannelsMonitoring = () => {
        services.stopAllChannels()
            .subscribe(() => this.props.stopAllChannels())
    }

    render() {
        return <div className="row">
            <Form
                currentChannel={this.props.current}
                onChangeData={this.props.editCurrentData}
                onChangeList={this.handleChangeList}
                onChangeCurrent={this.handleChange}
                onSave={this.handleSaveChannel}
                onCloseModal={this.handleCloseModal}
            />
            <ControlPanel
                startAllChannelsMonitoring={this.startAllChannelsMonitoring}
                stopAllChannelsMonitoring={this.stopAllChannelsMonitoring}
                toggleImageMode={this.props.toggleImageMode}
            />
        </div>;
    }
};

export default connect(state => state, { ...actions })(ChannelForm);