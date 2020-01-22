import React from "react";
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
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
    margin: {
      margin: theme.spacing(1),
    },
  }));

export default function ImageDetails(props) {
const classes = useStyles();
  if (!props.image.id) return "Loading";
  console.log(props.image, "what is props.images??")
  return (
    <div className={classes.root}>
    <Grid container spacing={10}>
    <Grid item md={10}>
    <h2><i>{props.image.name}</i></h2>
    <br/>
    <img src={props.image.picture} 
    width="400" 
    height="400" 
    alt="profile-pic"
    className="image"/>
    <br/>
    <i>{props.image.descriptions.map(description => {
      return (
        <div>
            <div>
              <i>{description.text}</i>
            </div>
        </div>
      )
    })}</i>
    <form
onSubmit={props.onSubmit}>
<TextField 
  id="standard-multiline-flexible"
  label="Multiline"
  multiline
  rowsMax="4"
  type="text"
  name="text"
  value={props.values.text} 
  onChange={props.onChange}
  label="Description"/>
  <Button default type="submit">Add a description <br/> of your travel</Button>
  </form>
  <IconButton 
  aria-label="delete" 
  className={classes.margin}
  onClick={() => props.onClick(props.image.id)}>
      <DeleteIcon fontSize='large' />
    </IconButton>
      </Grid>
      </Grid>
    </div>
  );
}