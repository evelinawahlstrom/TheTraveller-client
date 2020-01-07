import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));

export default function ImageDetails(props) {
const classes = useStyles();
  if (!props.image.id) return "Loading";
  console.log(props.image, "what is props.images??")
  return (
    <div className={classes.root}>
    <h4>{props.image.name}</h4>
    <br/>
    <img src={props.image.picture} 
    width="400" 
    height="400" 
    alt="profile-pic" />
    <br/>
    <Fab 
    color="primary" 
    size="small"
    aria-label="edit">
        <EditIcon />
      </Fab>
    </div>
  );
}
