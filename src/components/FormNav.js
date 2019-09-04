import React, { Component } from 'react';
import FormInput from './FormInput';

import '../styles/FormNav.css';

class FormNav extends Component {
  state = {
    prevScrollPos: window.pageYOffset
  };
  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  };

  // need to unmount componenets when routing
  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  };

  handleScroll = e => {
    const { prevScrollPos } = this.state;
    const currScrollPos = window.pageYOffset;
    const visible = currScrollPos < prevScrollPos;
    this.setState({
      prevScrollPos: currScrollPos
    });

    if (visible) {
      document.querySelector('.formnav').classList.remove('hideNav');
    } else if (currScrollPos < 15) {
      document.querySelector('.formnav').classList.remove('hideNav');
    } else {
      document.querySelector('.formnav').classList.add('hideNav');
    }
  };

  render() {
    return (
      <div className="formnav animated fadeInDown">
        <div className="ui container">
          <FormInput />
          <div className="formCount">
            Total count: <span>{this.props.total}</span> images
          </div>
        </div>
      </div>
    );
  }
}

export default FormNav;
