import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';

class LoginForm extends Component {
	render() {
		const { onChange, onSubmit } = this.props
		const { email, password } = this.props.values
		return (
				<div className="form">
				<Container>
				<Card 
				className="card-50"
				mx="auto"
				p={1}>
				<CardContent>
				   <Typography 
				   variant="h4" 
				   color="textSecondary"
				   align="center">
				  	Login
				   </Typography>
			   <form noValidate onSubmit={onSubmit}>
				<TextField
                id="outlined-name"
                label="Email"
                className="form-control-lg"
				onChange={onChange}
				name="email"
				value={email}
                margin="normal"
                variant="outlined"
                 />
                  <TextField
                id="outlined-password-input"
                label="Password"
				className="form-control-lg"
				type="password"
				onChange={onChange}
				name="password"
				value={password}
                margin="normal"
                variant="outlined"
                 />

				 <CardActions style={{justifyContent: 'center'}}>
					<Button 
					type="submit" 
					variant="contained"
					size="large"
					color="primary">Login</Button>
                </CardActions>
                 </form>
				</CardContent>
                </Card>
				<p className="text-center"><i>Don't have an account yet? </i><Link to="/signup">Sign up</Link></p>
                </Container>
				</div>
		)
	}
}

export default LoginForm;