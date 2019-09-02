import React from 'react';

const VideoDetail = ({video}) => {
    if(!video){
        return <div>Loading</div>
    }

    const videoId = video.id.videoId;
    const videoSrc = `https://www.youtube.com/embed/${videoId}`;
    console.log(typeof(video));

    return(
        <div>
            <div>
                <iframe src = {videoSrc} width="640" height="360" title='video player'></iframe>
            </div>
            <div>
                <h4>{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    )
}

export default VideoDetail;