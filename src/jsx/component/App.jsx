import _ from 'lodash';

import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search'

import searchContainer from '../container/searchContainer.js';

import VideoDetail from './videoDetail.jsx';
import VideoList from './videoList.jsx';

const API_KEY = 'AIzaSyCxKFVp-gfaoRR7ipJRiMKpn6vLMUEFM3o';

class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('');
    }

    videoSearch(term){
        YTSearch({key: API_KEY, term: term, maxResult: 10}, videos => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render(){
        const videoSearch = _.debounce(term => {
            this.videoSearch(term);
        }, 300);

        return(
            <div className="body">
                <h3>Youtube Search: </h3> <searchContainer onSearchTermChange={videoSearch}/>       
                <VideoDetail video = {this.state.selectedVideo}/>        
                <VideoList onVideoSelect={selectedVideo => this.setState({selectedVideo})} videos={this.state.videos}/>
            </div>
        )
    }
}

export default App;