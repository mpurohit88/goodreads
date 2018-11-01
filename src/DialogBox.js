import React, {Fragment} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

class DialogBox extends React.Component {
  state = {
    open: true,
    scroll: 'paper',
  };

  handleClickOpen = scroll => () => {
    this.setState({ open: true, scroll });
  };

  handleClose = () => {
    this.setState({ open: false });
    this.props.reset();
  };

  render() {
    const { bookDetail } = this.props;

    return (
      <div>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          scroll={this.state.scroll}
          aria-labelledby="scroll-dialog-title"
        > 
        {
          bookDetail ? 
          <span> 
            <DialogTitle id="scroll-dialog-title">Bood Detail</DialogTitle>
            <DialogContent>
              <Grid container spacing={16}>
                <Grid item>
                    <img  alt="complex" src={bookDetail.image_url} />
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={16}>
                    <Grid item xs>
                      <Typography gutterBottom variant="h5">
                        {bookDetail.title['#cdata']}
                      </Typography>
                      <Typography gutterBottom variant="h5">
                        <b>by {Array.isArray(bookDetail.authors.author) ? bookDetail.authors.author.map(obj => {return obj.name + ", ";}) : bookDetail.authors.author.name} </b>
                      </Typography>
                      <Typography color="textSecondary">*****: {bookDetail.average_rating} | Rating details | {bookDetail.ratings_count["#cdata"]} Ratings | {bookDetail.text_reviews_count["#cdata"]} Reviews</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <br />
              <Fragment><span dangerouslySetInnerHTML={{__html: bookDetail.description && bookDetail.description['#cdata']}} /></Fragment>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Close
              </Button>
            </DialogActions>
            </span>
          :
          <span>Loading...</span>
        }
        </Dialog>
      </div>
    );
  }
}

export default DialogBox;
