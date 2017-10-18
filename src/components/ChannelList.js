import React, { Component } from 'react';
import ChannelItem from "./ChannelItem";
import { fetchChannels } from "./../utils/services";

class ChannelList extends Component {
    state = {
        channels: [{ id: 1, name: 'test', uid: "some url", status: "normal" }]
    }

    componentDidMount() {
        fetchChannels()
            .then(channels => this.setState(channels))
    }

    render() {
        return (
            <tbody>
                {this.state.channels.map(channel => <ChannelItem key={channel.id} channel={channel} />)}
            </tbody>
        );
    }
}

export default ChannelList;