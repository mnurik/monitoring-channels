import React, { Component } from 'react';
import { connect } from "react-redux";
import List from "./../components/List";
import ControlPanel from "./../components/ControlPanel";
import * as actions from "./../actions/actions";
import * as services from "./../utils/services";

class ChannelList extends Component {

    componentDidMount() {
        services.fetchChannels()
            .subscribe(response => this.props.receiveChannels(response));
    }

    deleteChannel = (id) => {
        services.deleteChannel(id)
            .subscribe(() => { this.props.destroyChannel(id) });
    }

    handleSaveChannel = () => {
        services.saveChannel(this.props.current)
            .then(response => {
                if (response.id) this.props.editChannel(response)
                else this.props.addChannel(response)
                this.props.clearCurrent()
            });
    }

    startChannelMonitoring = (id) => {
        services.startChannel(id)
            .subscribe(() => this.props.startChannel())
    }

    stopChannelMonitoring = (id) => {
        services.stopChannel(id)
            .subscribe(() => this.props.stopChannel())
    }

    startAllChannelsMonitoring = () => {
        services.startAllChannels()
            .subscribe(() => this.props.startAllChannels())
    }

    stopAllChannelsMonitoring = () => {
        services.stopAllChannels()
            .subscribe(() => this.props.stopAllChannels())
    }

    render() {
        return <div className="row">
            <div className="col-sm-10">
                <List
                    channels={this.props.channels}
                    current={this.props.current}
                    onSave={this.handleSaveChannel}
                    onDelete={this.deleteChannel}
                    onReplace={this.props.replace}
                    onEditData={this.props.editData}
                    startChannelMonitoring={this.startChannelMonitoring}
                    stopChannelMonitoring={this.stopChannelMonitoring}
                />
            </div>
            <div className="col-sm-2">
                <ControlPanel
                    startAllChannelsMonitoring={this.startAllChannelsMonitoring}
                    stopAllChannelsMonitoring={this.stopAllChannelsMonitoring}
                />
            </div>
        </div>;
    }
}

const mapStateToProps = (state) => ({
    channels: state.channels,
    current: state.currentChannel
});

export default connect(mapStateToProps, { ...actions })(ChannelList);