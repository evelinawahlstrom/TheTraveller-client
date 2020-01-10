import React from "react";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';;

const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        flexGrow: 1,
      },
      position: 'center',
      textAlign: 'center'
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
    <Grid container spacing={3}>
    <Grid item md={10}>
    <h4>{props.image.name}</h4>
    <br/>
    <img src={props.image.picture} 
    width="400" 
    height="400" 
    alt="profile-pic" />
    <br/>
    <form
    onSubmit={props.onSubmit}>
      <TextField 
      id="standard-multiline-flexible"
      label="Multiline"
      multiline
      rowsMax="4"
      name="description"
        // value={props.values.picture} 
        // onChange={props.onChange}
        label="Description"/>
        <Button default type="submit">Add a description <br/> of your travel</Button>
      </form>
      </Grid>
      </Grid>
    </div>
  );
}
