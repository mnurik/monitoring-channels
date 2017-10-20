import React, { Component } from 'react';
import { connect } from "react-redux";
import List from "./../components/List";
import * as actions from "./../actions/actions";

class ChannelList extends Component {

    componentDidMount() {
        this.props.load()
    }

    handleSaveChannel = () => {
        this.props.save(this.props.current);
    }

    handleDeleteChannel = (id) => {
        this.props.delete(id)
    }

    render() {
        return <List
            channels={this.props.channels}
            onSave={this.handleSaveChannel}
            onDelete={this.handleDeleteChannel}
            onEdit={this.props.change}
            onReplace={this.props.replace}
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
    change: actions.editCurrentName,
    replace: actions.replaceCurrent
};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelList);