import React, { Component } from 'react';
import ChannelItem from "./ChannelItem";

class ChannelList extends Component {
    state = {}
    render() {
        return (
            <tbody>
                {this.props.channels.map(channel => <ChannelItem key={channel.id} channel={channel} />)}
            </tbody>
        );
    }
}

export default ChannelList;