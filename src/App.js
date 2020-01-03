import './App.css';
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
import Card from '@material-ui/core/Card';
import logo from './images/logo.png'
import globe from './images/globe.gif'
import SignupContainer from './components/SignupContainer'
import LoginFormContainer from './components/LoginFormContainer'
import ImageBoardContainer from './components/ImageBoardContainer'
import Homepage from './components/Homepage'

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
          <div className="links"><Link to="/login"><Button color="primary">Login</Button></Link>| 
          <Link to="/signup"><Button color="primary">Sign up</Button></Link>|
          <Link to="/images"><Button color="primary">Image Board</Button></Link>
          </div>
        </Toolbar>
      </AppBar>
      <div>
      <Route path="/" exact component={Homepage}/>
      <Route path="/login" exact component={LoginFormContainer} />
      <Route path="/signup" exact component={SignupContainer} />
      <Route path="/images" exact component= {ImageBoardContainer} />
      </div>
    </div>
  );
}