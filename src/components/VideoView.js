import React, { Component } from 'react';

class VideoView extends Component {
    render() {
        return (
            <div className="modal fade" id="videoModal" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">{this.props.name}</h4>
                        </div>
                        <div className="modal-body">
                            <video width="100%" height="100%" controls>
                                <source src={this.props.videoSrc} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default VideoView;