import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import BookDetails from './BookDetails';
import AuthorDetails from './AuthorDetails';
import { getAuthorDetails } from './httpClient';

class DialogBox extends React.Component {
  state = {
    open: true,
    scroll: 'paper',
    authorDetails: undefined,
    isLoading: false
  };

  handleClickOpen = scroll => () => {
    this.setState({ open: true, scroll });
  };

  handleClose = () => {
    this.setState({ open: false });
    this.props.reset();
  };

  getAuthorDetails = (id) => {
    this.setState({ isLoading: true })
    getAuthorDetails(id).then(authorDetails => {
      this.setState({ authorDetails, isLoading: false })
      console.log("************** Author Details: ", authorDetails);
    })
  }

  resetAuthor = () => {
    this.setState({ authorDetails: undefined })
  }

  render() {
    const { bookDetail } = this.props;
    console.log("$$$$$$", this.state.authorDetails)
    return (
      <div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          scroll={this.state.scroll}
          aria-labelledby="scroll-dialog-title"
        >
          {
            this.state.authorDetails ? <AuthorDetails resetAuthor={this.resetAuthor} authorDetails={this.state.authorDetails.GoodreadsResponse.author} /> : bookDetail ?
              <BookDetails isLoading={this.state.isLoading} getAuthorDetails={this.getAuthorDetails} bookDetail={bookDetail} />
              :
              <span>Loading...</span>
          }
        </Dialog>
      </div>
    );
  }
}

export default DialogBox;
