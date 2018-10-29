import React, { Component } from 'react';
import './App.css';
import ComplexGrid from './ComplexGrid';
import { get } from './httpClient';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  componentDidMount() {
    
  }

  handleKeyPress = e => {
    if(e.charCode === 13){
      this.setState({isLoading: true});
      get(e.target.value, this.callback);
    }
  }

  callback = (searchResult) => {
    this.setState({ posts: searchResult, isLoading: false});
  }

  render() {
    const result = this.state.posts ? this.state.posts.GoodreadsResponse.search.results : undefined;

    return [
        <div className="App">
          <InputLabel htmlFor="search">Provide Book Title and Press Enter (ex. react)</InputLabel>&nbsp;&nbsp;&nbsp;&nbsp;
          <Input type="text" name="search" id="search" onKeyPress={this.handleKeyPress} autoFocus />
          {
            this.state.isLoading && "Loading..."
          }
          {
            result === null ? "No Result Found" : "" 
          }
          {
            result && Array.isArray(result.work) ? result.work.map(function(searchResult, index) {
              return <ComplexGrid searchResult={searchResult} index={index} />
            }) : result && <ComplexGrid searchResult={result.work} index={1} />
          }
        </div>
    ]
  }
}

export default App;
