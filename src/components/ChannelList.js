import React, { Component } from 'react';
import { connect } from "react-redux";
import ChannelItem from "./ChannelItem";
import { fetchChannels } from "./../utils/services";
import './ChannelList.css';
import { loadChannels } from "./../actions/actions";

class ChannelList extends Component {

    componentDidMount() {
        fetchChannels()
            .then(res => this.props.loadChannels(res.Result))
    }

    render() {
        return (
            <div className="channel">
                {this.props.channels.map(channel => <ChannelItem
                    key={channel.Id}
                    channel={channel}
                />)}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    channels: state.channels
});

export default connect(mapStateToProps, { loadChannels })(ChannelList);