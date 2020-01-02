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
import logo from './images/logo.png'
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

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="inherit">
        <Toolbar>
        <Link to="/">
        <img 
        className='logo'
        height='80px'
        align='middle'
        src={logo}
        alt='app-logo'>
        </img>
        </Link>
          <div className="links"><Link to="/login"><Button color="primary">Login</Button></Link>
          |
          <Link to="/signup"><Button color="primary">Sign up</Button></Link>
          </div>
        </Toolbar>
      </AppBar>
      <Route path="/login" exact component={LoginFormContainer} />
      <Route path="/signup" exact component={SignupContainer} />
    </div>
  );
}