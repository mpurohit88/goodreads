import React, { Component } from 'react';
import './App.css';
import Tile from './BookTile';
import DialogBox from './DialogBox';
import { get, getDetails } from './httpClient';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {isShowDialogBox: false}
  }

  reset = () => {
    this.setState({isShowDialogBox: false, bookDetail: undefined});
  }

  handleKeyPress = e => {
    if(e.charCode === 13){
      this.setState({isLoading: true});
      get(e.target.value).then(searchResult => this.setState({ posts: searchResult, isLoading: false}));
    }
  }

  getBookDetails = id => {
    this.setState({ isShowDialogBox: true})

    getDetails(id).then(bookDetail => { 
              this.setState({ bookDetail: bookDetail})
            });
  }

  render() {
    const that = this;
    const result = this.state.posts ? this.state.posts.GoodreadsResponse.search.results : undefined;
    const bookDetail = this.state.bookDetail ? this.state.bookDetail.GoodreadsResponse.book : undefined;

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
              return <Tile searchResult={searchResult} getBookDetails={that.getBookDetails} index={index} />
            }) : result && <Tile searchResult={result.work} getBookDetails={that.getBookDetails} index={1} />
          }
        </div>,
        this.state.isShowDialogBox ? <DialogBox bookDetail={bookDetail} reset={this.reset}/> : null
    ]
  }
}

export default App;
