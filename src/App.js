import './App.css';
import React, {Component} from "react";
import { Route, Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import logo from './images/logo.png'
import SignupContainer from './components/SignupContainer'
import LoginFormContainer from './components/LoginFormContainer'
import ImageBoardContainer from './components/ImageBoardContainer'
import ImageDetailsContainer from './components/ImageDetailsContainer'
import Homepage from './components/Homepage'
import LogoutContainer from './components/LogoutContainer';
import Destination from './components/Destination'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    background: "black",
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
    <div className="background">
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
          <Link to="/images"><Button color="primary">Image Board</Button></Link>|
          <Link to="/destinations"><Button color="primary">Destinations</Button>
          </Link>|
          <Link to="/">
          <Route path="/logout" exact component={LogoutContainer}/><Button color="primary">Log out</Button>
          </Link>
          </div>
        </Toolbar>
      </AppBar>
      <Route path="/" exact component={Homepage}/>
      </div>
      <div>
      <Route path="/login" exact component= {LoginFormContainer} />
      <Route path="/signup" exact component= {SignupContainer} />
      <Route path="/images" exact component= {ImageBoardContainer} />
      <Route path="/images/:id" exact component= {ImageDetailsContainer} />
      <Route path="/destinations" exact component= {Destination}/>
      </div>
      </div>
      )}