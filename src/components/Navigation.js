import React, { Component } from 'react';
import FormInput from './FormInput';

import '../styles/Navigation.css';

class Navigation extends Component {
  state = {
    prevScrollPos: window.pageYOffset
  };
  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  };

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
        <div className="headerPar">navsearch</div>
        <FormInput submitNewData={this.props.submitNew} />
        <div className="formCount">
          Total count: <span>{this.props.imageCount}</span> images
        </div>
      </div>
    );
  }
}

export default Navigation;
