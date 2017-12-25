import _ from 'lodash';
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list.js';
import VideoDetail from './components/video_detail.js'
const API_KEY= '';


//create a new component , this component should produce some html

class App extends React.Component{
  constructor(props){
    super(props);
    this.state={

      videos:[],
      selectedVideo:null
    };
    this.videoSearch('Surfboards');

  }
  videoSearch(term){
    YTSearch({key:API_KEY , term:term},(videos)=>{
      this.setState({
        videos:videos,
        selectedVideo:videos[0]
      });
    });
  }
  render(){
    const videoSearch=_.debounce((term)=>{this.videoSearch(term)},300);
    return (
        <div>
          < SearchBar onSearchTermChange={videoSearch}/>
          <VideoDetail video={this.state.selectedVideo}/>
          <VideoList
            onVideoSelect={selectedVideo=>this.setState({selectedVideo})}
            videos={this.state.videos}/>
        </div>
        );
      }
  }

//take this components's generated HTMl and put this on  a page
ReactDOM.render(<App />,document.querySelector('.container'));
