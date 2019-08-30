import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FormInput from './FormInput';

import '../styles/Navigation.css';

class Navigation extends Component {
  state = {
    prevScrollPos: window.pageYOffset
  };
  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  };

  handleScroll = e => {
    const { prevScrollPos } = this.state;
    const currScrollPos = window.pageYOffset;
    const visible = currScrollPos < prevScrollPos;
    this.setState({
      prevScrollPos: currScrollPos
    });

    if (visible) {
      document.querySelector('.navigation').classList.remove('hideNav');
    } else if (currScrollPos < 15) {
      document.querySelector('.navigation').classList.remove('hideNav');
    } else {
      document.querySelector('.navigation').classList.add('hideNav');
    }
  };

  render() {
    return (
      <div
        className="navigation animated fadeInDown"
        data-wow-duration="1.5s"
        data-wow-delay="0.1s">
        <div className="ui container">
          <div className="flexTitle">
            <div>
              <Link to="/">
                <div className="headerPar">navsearch</div>
              </Link>
            </div>
            <div className="flexLinks">
              <Link to="/about">
                <div className="linkEle">About</div>
              </Link>
              <Link to="/register">
                <div className="linkEle">Register</div>
              </Link>
              <Link to="/login">
                <div className="linkEle">Login</div>
              </Link>
            </div>
          </div>

          <FormInput />
          <div className="formCount">
            Total count: <span>{this.props.imageCount}</span> images
          </div>
        </div>
      </div>
    );
  }
}

export default Navigation;
