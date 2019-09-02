import React, {Component} from 'react';
import {connect} from 'react-redux';
import App from '../component/App.jsx'

const AppContainer = (props) => {
    return(
        <App
            video = {props.video}
            selectedVideo = {props.selectedVideo}
        />
    )
}

const mapStateToProps = ({app}) => ({
    video: app.video,
    selectedVideo: app.selectedVideo
})

export default connect(
    mapStateToProps
)(AppContainer);