import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import '../styles/Navigation.css';
import search from '../images/search.jpg';

class Navigation extends Component {
  state = {
    isOpen: false
  };

  componentDidMount = () => {
    document.getElementById('overlayNav').classList.add('hiddenBody');
  };
  toggleOverlay = e => {
    e.preventDefault();
    const { isOpen } = this.state;
    var section = document.getElementsByClassName('sectioning')[0];
    if (isOpen === false) {
      document.getElementById('overlayNav').classList.remove('hiddenBody');
      section.classList.add('transIt');
    } else {
      section.classList.remove('transIt');
    }
    this.setState({
      isOpen: !isOpen
    });
  };
  render() {
    var section = document.getElementsByClassName('sectioning')[0];

    return (
      <div className="navigation">
        <button
          onClick={this.toggleOverlay}
          className="buttonNav animated bounceInLeft faster">
          <i
            className={`${this.state.isOpen ? 'close icon' : 'bars icon'}`}></i>
        </button>
        <div
          id="overlayNav"
          className={`overlayNav delay-0s  ${
            this.state.isOpen ? 'animated slideInLeft' : 'animated slideOutLeft'
          }`}>
          <div
            style={{ animationDelay: '0.3s' }}
            className={
              this.state.isOpen ? 'animated fadeInUp faster' : 'hiddenBody'
            }>
            <Link
              to="/"
              onClick={() => {
                this.setState({ isOpen: !this.state.isOpen });
                section.classList.remove('transIt');
              }}></Link>
            <div style={{ textAlign: 'center', paddingTop: '30px' }}>
              <img
                style={{ width: '40px' }}
                src={search}
                alt="search icon"></img>
            </div>
          </div>
          <div className="flexLinks">
            <Link
              className={`linkEle ${
                this.state.isOpen ? 'animated fadeInUp faster' : 'hiddenBody'
              }`}
              to="/"
              onClick={() => {
                this.setState({ isOpen: !this.state.isOpen });
                section.classList.remove('transIt');
              }}>
              Home
            </Link>
            <Link
              className={`linkEle ${
                this.state.isOpen ? 'animated fadeInUp faster' : 'hiddenBody'
              }`}
              to="/gallery"
              onClick={() => {
                this.setState({ isOpen: !this.state.isOpen });
                section.classList.remove('transIt');
              }}>
              Gallery
            </Link>
            <Link
              className={`linkEle ${
                this.state.isOpen ? 'animated fadeInUp faster' : 'hiddenBody'
              }`}
              to="/search"
              onClick={() => {
                this.setState({ isOpen: !this.state.isOpen });
                section.classList.remove('transIt');
              }}>
              Search
            </Link>
          </div>

          <Footer navState={this.state.isOpen}></Footer>
        </div>
      </div>
    );
  }
}

export default Navigation;
