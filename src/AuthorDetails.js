import React, { Component, Fragment } from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

class AuthorDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        const { authorDetails } = this.props;

        return [
            <DialogTitle id="scroll-dialog-title">Author Details | <a href="#" onClick={this.props.resetAuthor}>Back To Book Detail</a></DialogTitle>,
            <DialogContent>
                <Grid container spacing={16}>
                    <Grid item xs={4}>
                        <img alt="complex" src={authorDetails.image_url['#cdata']} />
                    </Grid>
                    <Grid item xs={8}>
                        <Grid item xs container direction="column" spacing={16}>
                            <Grid item xs>
                                <Typography gutterBottom variant="h5">
                                    {authorDetails.name}
                                </Typography>
                                <hr />
                                <Typography gutterBottom variant="h6">
                                    Born: {authorDetails.born_at === null ? 'N/A' : authorDetails.born_at} <br />
                                    Website: N/A <br />
                                    Twitter: <br />
                                </Typography>
                                <br /> <br />
                            </Grid>
                        </Grid>

                    </Grid>
                    <Typography gutterBottom variant="h6">
                        <Fragment><span dangerouslySetInnerHTML={{ __html: authorDetails.about['#cdata'] }} /></Fragment>
                    </Typography>
                </Grid>
            </DialogContent>
        ]
    }
}

export default AuthorDetails;