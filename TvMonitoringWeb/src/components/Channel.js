import React, { Component } from 'react';
import ChannelForm from './ChannelForm';
import ChannelList from './ChannelList';

class Channel extends Component {
    render() {
        return (
            <div className="table-responsive">
                <table className="table">
                    <ChannelForm />
                    <ChannelList />
                </table>
            </div>
        );
    }
}

export default Channel;