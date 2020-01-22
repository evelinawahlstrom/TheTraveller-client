import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  root: {
      margin: theme.spacing(12),
      flexGrow: 1,
      maxWidth: '1050px',
  },
  input: {
    display: 'none',
  },
}));

export default function ImageBoard(props) {
  const classes = useStyles();
  if (!props.images) return "Loading";
  console.log(props.images, "what is props.images??")
  return (
    // <div className={classes.root}>
    <div className = "grid">
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


