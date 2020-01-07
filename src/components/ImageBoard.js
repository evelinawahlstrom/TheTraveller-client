import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
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
    <div className="list">
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
      <div className={classes.root}>
      <input 
      accept="image/*" 
      className={classes.input} 
      id="icon-button-file" type="file" />
      <label htmlFor="icon-button-file">
        <IconButton 
        color="primary" 
        aria-label="upload picture" 
        component="span"
        size="medium">
          <PhotoCamera />
        </IconButton>
      </label>
      </div>
    </div>
  );
}
