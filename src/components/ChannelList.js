import React, { Component } from 'react';
import { connect } from "react-redux";
import ChannelItem from "./ChannelItem";
import { fetchChannels, deleteChannel } from "./../utils/services";

class ChannelList extends Component {

    // componentDidMount() {
    //     fetchChannels()
    //         .then(channels => this.setState(channels))
    // }

    handledeleteChannel = (id) => {
        deleteChannel(id);
        this.setState(prevState => ({
            channels: prevState.channels
                .filter(channel => channel.id !== id)
        }));
    }

    render() {
        console.log('====================================');
        console.log(this.props);
        console.log('====================================');
        return (
            <tbody>
                {this.props.channels.map(channel => <ChannelItem
                    key={channel.id}
                    channel={channel}
                    onDeleteChannel={this.handledeleteChannel} />)}
            </tbody>
        );
    }
}

const mapStateToProps = (state) => ({
    channels: state.channels
});

export default connect(mapStateToProps)(ChannelList);