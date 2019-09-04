import React, { Component } from 'react';
import Button from './Button';
import '../styles/RegisterForm.css';
import { Link, Redirect } from 'react-router-dom';

class Register extends Component {
  state = {
    username: '',
    email: '',
    pass: '',
    passConf: '',
    redirect: false
  };

  registerUser = e => {
    e.preventDefault();

    console.log(
      this.state.username,
      this.state.email,
      this.state.pass,
      this.state.passConf
    );
    // this.setState({
    //   redirect: true
    // });
  };

  render() {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/"></Redirect>;
    }
    return (
      <div className="register">
        <h3 style={{ textTransform: 'uppercase', letterSpacing: '2px' }}>
          Register
        </h3>
        <form onSubmit={this.registerUser}>
          <input
            required
            type="text"
            placeholder="Username"
            className="registerInp"
            onChange={e => this.setState({ username: e.target.value })}></input>
          <input
            required
            autoComplete="off"
            type="email"
            placeholder="Email"
            className="registerInp"
            onChange={e => this.setState({ email: e.target.value })}></input>
          <input
            required
            autoComplete="new-password"
            type="password"
            placeholder="Password"
            className="registerInp"
            onChange={e => this.setState({ pass: e.target.value })}></input>
          <input
            required
            autoComplete="new-password"
            type="password"
            placeholder="Confirm Password"
            className="registerInp"
            onChange={e => this.setState({ passConf: e.target.value })}></input>
          <div>
            <Button
              buttonText="Register"
              margin="20px 10px 0 0"
              iconClass="user plus icon"></Button>
            <Link to="/">
              <Button
                buttonText="Go back!"
                margin="20px 0 0 10px"
                iconClass="long arrow alternate left icon"></Button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
