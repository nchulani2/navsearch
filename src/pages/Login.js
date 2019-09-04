import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

class Login extends Component {
  backStyle = {
    position: 'absolute',
    width: '100%',
    height: '100vh',
    zIndex: '-1',
    background:
      'linear-gradient(55deg, rgba(201, 5, 5, 0.7) 15%, rgba(201, 5, 5, 0.3) 60%)',
    clipPath: 'ellipse(100% 50% at 10% 100%)'
  };
  render() {
    return (
      <div style={{ width: '100%', height: '100vh' }}>
        <Link to="/">
          <Header color="black"></Header>
        </Link>
        <div style={{ ...this.backStyle }}></div>
        <LoginForm></LoginForm>
      </div>
    );
  }
}

export default Login;
