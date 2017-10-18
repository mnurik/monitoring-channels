import React, { Component } from 'react';
import ChannelForm from './ChannelForm';
import ChannelList from './ChannelList';

class Channel extends Component {
    state = {}
    render() {
        return (
            <div className="table-responsive">
                <table className="table">
                    <ChannelForm />
                    <ChannelList channels={this.props.channels} />
                </table>
            </div>
        );
    }
}

export default Channel;