import React, { Component, Fragment } from 'react';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

class BookDetails extends Component {
    constructor(props) {
        super(props);

        this.state = { isShowDialogBox: false }
    }

    render() {
        const { bookDetail, isLoading } = this.props;

        return [
            isLoading && <div class="loading">Loading&#8230;</div>,
            <DialogTitle id="scroll-dialog-title">Bood Detail</DialogTitle>
            , <DialogContent>
                <Grid container spacing={16}>
                    <Grid item>
                        <img alt="complex" src={bookDetail.image_url} />
                    </Grid>
                    <Grid item xs={12} sm container>
                        <Grid item xs container direction="column" spacing={16}>
                            <Grid item xs>
                                <Typography gutterBottom variant="h5">
                                    {bookDetail.title['#cdata']}
                                </Typography>
                                <Typography gutterBottom variant="h5">
                                    <b>by

                            {
                                            Array.isArray(bookDetail.authors.author) ?
                                                bookDetail.authors.author.map(obj => {
                                                    return <a href="#" onClick={() => this.props.getAuthorDetails(obj.id)}> {obj.name}, </a>;
                                                })
                                                :
                                                <a href="#" onClick={() => this.props.getAuthorDetails(bookDetail.authors.author.id)}>
                                                    {bookDetail.authors.author.name}
                                                </a>
                                        }
                                    </b>

                                    {this.state.authorDetails &&
                                        <div>
                                            {
                                                this.state.authorDetails.GoodreadsResponse.author.about ? this.state.authorDetails.GoodreadsResponse.author.about['#cdata'] : "About info is not available for this user"
                                            }
                                        </div>
                                    }

                                </Typography>
                                <Typography color="textSecondary">*****: {bookDetail.average_rating} | Rating details | {bookDetail.ratings_count["#cdata"]} Ratings | {bookDetail.text_reviews_count["#cdata"]} Reviews</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <br />
                <Fragment><span dangerouslySetInnerHTML={{ __html: bookDetail.description && bookDetail.description['#cdata'] }} /></Fragment>
            </DialogContent>
            , <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                    Close
                    </Button>
            </DialogActions>
        ]
    }
}

export default BookDetails;