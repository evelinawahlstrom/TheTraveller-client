import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
  }));

export default function (props) {
    const classes = useStyles();
  return (
  <div className="form">
  <form className={classes.root}
  onSubmit={props.onSubmit}>
  <TextField id="standard-uncontrolled"
      type= "text"
      name="name"
      value={props.values.name} 
      onChange={props.onChange}
      label="Name"/>
    <TextField id="standard-uncontrolled"
      type= "text"
      name="picture"
      value={props.values.picture} 
      onChange={props.onChange}
      label="Picture"/>
      <Button default type="submit">Add Image of your destination</Button>
    </form>
    </div>
  );
}