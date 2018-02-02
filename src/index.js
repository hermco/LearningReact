import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
import SearchBar from './components/search_bar.js'
import VideoList from './components/video_list.js'
import VideoDetail from './components/video_detail.js'


const API_KEY = 'AIzaSyAmJiGozWr6my14rB3OpVRiIRf6SUmRmag';

/*
const App = () => { // SAME AS : const App = function() {
    return (
      <div>
        <SearchBar />
      </div>
    );
}
*/

class App extends Component {
  constructor(props){
    super(props);
    this.state= { videos: [], selectedVideo: null };
    this.searchVideo('This is fine');
  }

  searchVideo(input) {
    YTSearch({key: API_KEY, term:input}, videos =>
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    )
  }

  render(){
    const searchVideo = _.debounce( input => this.searchVideo(input), 300);

    return (
      <div>
        <SearchBar onNewResearch={searchVideo} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList videos={this.state.videos} onVideoSelect={selectedVideo => this.setState({selectedVideo})} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
