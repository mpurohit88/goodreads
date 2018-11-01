import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 700,
    padding: theme.spacing.unit * 2,
    'margin-top':2,
    'margin-right':'auto',
    'margin-bottom':0,
    'margin-left':'auto',
    'text-align': 'left',
    cursor: 'pointer'
  },
  image: {
    width: 100,
    height: 100,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
});

function Tile(props) {
  const { classes, searchResult, getBookDetails, index } = props;
  
  return (
    <Paper className={classes.root} key={'id-' + index} onClick={() => getBookDetails(searchResult.best_book.id["#text"])}>
      <Grid container spacing={16}>
        <Grid item>
          <ButtonBase className={classes.image}>
            <img className={classes.img} alt="complex" src={searchResult.best_book.small_image_url} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={16}>
            <Grid item xs>
              <Typography gutterBottom variant="h5">
                {searchResult.best_book.title}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}

Tile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Tile);
