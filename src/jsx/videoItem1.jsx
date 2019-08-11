import React from 'react';

const VideoItem = ({video, onVideoSelect}) => {
    const url = video.snippet.thumbnails.default.url;

    return(
        <li onClick={() => onVideoSelect(video)}>
            <div>
                <img src={url}></img>
                <div>{video.snippet.title}</div>
            </div>
        </li>
    )
}

export default VideoItem;