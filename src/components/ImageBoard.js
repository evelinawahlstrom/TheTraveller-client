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
    <div className="imageboard">
      {props.images.map(image => {
        return (
         <Link to={`/images/${image.id}`}>
          <img 
          className="images"
          src={image.picture} 
          width="250px" 
          height="250px" 
          alt="image-pic"/>
          </Link>
        );
      })}
      </div>
      </Grid>
    </div>
  );
}


