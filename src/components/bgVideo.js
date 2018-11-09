import React, {Component} from 'react';

class Video extends Component {
    constructor (props) {
        super(props);

        this.state = {
            videoURL: 'https://www.youtube.com/watch?v=Xy3GlrddZFI&t=171s'
        }
    }

    render () {
        return (
            <video id="background-video" loop autoPlay muted>
                <source src={this.state.videoURL} type="video/mp4" />
                <source src={this.state.videoURL} type="video/ogg" />
                Your browser does not support the video tag.
            </video>
        )
    }
};

export default Video;