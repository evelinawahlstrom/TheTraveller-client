import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, {Component} from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SignupContainer from './components/SignupContainer'
import LoginFormContainer from './components/LoginFormContainer'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
         <Typography variant="h4" className={classes.title}>
            The Traveller
          </Typography>
          <Link to="/login"><Button color="inherit">Login</Button></Link>
          <Link to="/signup"><Button color="inherit">Sign up</Button></Link>
        </Toolbar>
      </AppBar>
      <Route path="/login" exact component={LoginFormContainer} />
      <Route path="/signup" exact component={SignupContainer} />
    </div>
  );
}

