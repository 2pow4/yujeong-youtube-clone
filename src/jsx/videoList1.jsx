import React from 'react';
import VideoItem from './videoItem1.jsx';

const VideoList = (props) => {

    const videoItems = props.videos.map(video => {
        return(
            <VideoItem onVideoSelect = {props.onVideoSelect} key={video.etag} video={video}/>
        )
    });

    return(
        <ul>{videoItems}</ul>
    )
};

export default VideoList;