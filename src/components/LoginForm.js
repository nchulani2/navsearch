import React, { Component } from 'react';
import Button from './Button';
import '../styles/LoginForm.css';

class Login extends Component {
  state = {
    user: '',
    pass: ''
  };
  loginUser = e => {
    e.preventDefault();

    console.log(this.state.user, this.state.pass);
  };

  render() {
    return (
      <div className="login">
        <h3 style={{ textTransform: 'uppercase', letterSpacing: '2px' }}>
          Login
        </h3>
        <form onSubmit={this.loginUser}>
          <input
            required
            type="text"
            autoComplete="username"
            placeholder="Username"
            className="loginInp"
            onChange={e => this.setState({ user: e.target.value })}></input>
          <input
            required
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            className="loginInp"
            onChange={e => this.setState({ pass: e.target.value })}></input>

          <Button
            buttonText="Submit"
            margin="20px 0 0 0"
            iconClass="sign-in icon"></Button>
        </form>
      </div>
    );
  }
}

export default Login;
