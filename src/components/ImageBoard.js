import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
      margin: theme.spacing(12),
      flexGrow: 1,
      paddingTop: 1,
      paddingLeft: 200,
      paddingRight: 100,
      paddingBottom: 10,
      borderRadius: '25px',
  },
  input: {
    display: 'none',
  },
  paper: {
    paddingTop: theme.spacing(2),
    paddingLeft: theme.spacing(22),
    paddingRight: theme.spacing(12),
    paddingBottom: theme.spacing(2),
    textAlign: 'center',
    alignItems: 'center', 
    borderRadius: '40px'
  },
}));

export default function ImageBoard(props) {
  const classes = useStyles();
  if (!props.images) return "Loading";
  console.log(props.images, "what is props.images??")
  return (
    <div className={classes.root}>
    <Grid container spacing={10}>
    <Paper className={classes.paper}>
    <Grid item xl={10} md={10}>
      {props.images.map(image => {
        return (
         <Link to={`/images/${image.id}`}>
          <img src={image.picture} 
          width="250px" 
          height="250px" 
          alt="image-pic" />
          </Link>
        );
      })}
      </Grid>
      </Paper>
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
