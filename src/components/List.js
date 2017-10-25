import React, { Component } from 'react';
import Item from "./Item";
import VideoView from "./VideoView";
import './List.css';

class List extends Component {
    state = {
        videoSrc: "",
        name: ""
    }

    handleVideoModalShow = (videoSrc, name) => {
        this.setState({ videoSrc, name });
    }

    render() {
        const { channels, ...rest } = this.props;
        return (<div className="channels">
            {
                channels.map(channel =>
                    <Item
                        key={channel.id}
                        channel={channel}
                        {...rest}
                        onVideoModalShow={this.handleVideoModalShow}
                    />
                )
            }
            <VideoView videoSrc={this.state.videoSrc} name={this.state.name} />
        </div>);
    }
};

export default List;