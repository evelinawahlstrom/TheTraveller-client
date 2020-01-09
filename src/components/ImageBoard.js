import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      flexGrow: 1,
      paddingTop: 20,
      paddingLeft: 450,
      paddingRight: 50,
      paddingBottom: 10,
      alignItems: 'center'
    },
  },
  input: {
    display: 'none',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    alignItems: 'center'
  },
}));

export default function ImageBoard(props) {
  const classes = useStyles();
  if (!props.images) return "Loading";
  console.log(props.images, "what is props.images??")
  return (
    <div className={classes.root}>
    <Grid container spacing={3}>
    <Grid item xs={3} sm={6}>
    <Paper className={classes.paper}>
      {props.images.map(image => {
        return (
         <Link to={`/images/${image.id}`}>
          <img src={image.picture} 
          width="200" 
          height="200" 
          alt="image-pic" />
          </Link>
        );
      })}
      </Paper>
      </Grid>
      </Grid>
    </div>
  );
}


// <div>
// <input 
// accept="image/*" 
// className={classes.input} 
// id="icon-button-file" type="file" />
// <label htmlFor="icon-button-file">
//   <IconButton 
//   color="primary" 
//   aria-label="upload picture" 
//   component="span"
//   size="medium">
//     <PhotoCamera />
//   </IconButton>
// </label>
// </div>