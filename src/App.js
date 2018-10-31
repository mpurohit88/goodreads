import React, { Component } from 'react';
import './App.css';
import Tile from './BookTile';
import { get } from './httpClient';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  handleKeyPress = e => {
    if(e.charCode === 13){
      this.setState({isLoading: true});
      get(e.target.value, this.callback).then(searchResult => this.setState({ posts: searchResult, isLoading: false}));
    }
  }

  render() {
    const result = this.state.posts ? this.state.posts.GoodreadsResponse.search.results : undefined;

    return [
        <div className="App">
          <InputLabel htmlFor="search">Provide Book Title and Press Enter (ex. react)</InputLabel>&nbsp;&nbsp;&nbsp;&nbsp;
          <Input type="text" name="search" id="search" onKeyPress={this.handleKeyPress} autoFocus />
          {
            this.state.isLoading && <span id="loading">Loading...</span>
          }
          {
            result === null ? <span id="notFound">No Result Found</span> : "" 
          }
          {
            result && Array.isArray(result.work) ? result.work.map(function(searchResult, index) {
              return <Tile searchResult={searchResult} index={index} />
            }) : result && <Tile searchResult={result.work} index={1} />
          }
        </div>
    ]
  }
}

export default App;
