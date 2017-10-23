import React, { Component } from 'react';
import { connect } from "react-redux";
import List from "./../components/List";
import * as actions from "./../actions/actions";

class ChannelList extends Component {

    componentDidMount() {
        const that = this;
        (async function callRequest() {
            await that.props.load();
            setTimeout(callRequest, 5000);
        })();
    }

    handleSaveChannel = () => {
        this.props.save(this.props.current);
    }

    render() {
        return <List
            channels={this.props.channels}
            current={this.props.current}
            onSave={this.handleSaveChannel}
            onDelete={this.props.delete}
            onReplace={this.props.replace}
            onEditName={this.props.editName}
        />
    }
}

const mapStateToProps = (state) => ({
    channels: state.channels,
    current: state.currentChannel
});

const mapDispatchToProps = {
    load: actions.loadChannels,
    delete: actions.deleteChannel,
    save: actions.saveChannel,
    editName: actions.editCurrentName,
    replace: actions.replaceCurrent
};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);