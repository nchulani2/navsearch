import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import '../styles/Navigation.css';

// import { connect } from 'react-redux';
// import { openNav, closeNav } from '../actions';
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
    if (isOpen === false) {
      document.getElementById('overlayNav').classList.remove('hiddenBody');
    }
    this.setState({
      isOpen: !isOpen
    });
  };
  render() {
    return (
      <div className="navigation">
        <button
          onClick={this.toggleOverlay}
          className="buttonNav animated bounceInRight faster">
          <i
            className={`${this.state.isOpen ? 'close icon' : 'bars icon'}`}></i>
        </button>
        <div
          id="overlayNav"
          className={`overlayNav delay-0s ${
            this.state.isOpen
              ? 'animated slideInRight'
              : 'animated slideOutRight'
          }`}>
          <Link
            to="/"
            onClick={() => {
              this.setState({ isOpen: !this.state.isOpen });
            }}>
            <Header color="white"></Header>
          </Link>
          <div className="flexLinks">
            <Link
              className="linkEle"
              to="/about"
              onClick={() => {
                this.setState({ isOpen: false });
              }}>
              About
            </Link>
            <Link
              className="linkEle"
              to="/register"
              onClick={() => {
                this.setState({ isOpen: false });
              }}>
              Register
            </Link>
            <Link
              className="linkEle"
              to="/login"
              onClick={() => {
                this.setState({ isOpen: false });
              }}>
              Login
            </Link>
          </div>
          <Footer></Footer>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return { data: state };
// };

export default // connect(
// mapStateToProps,
// { openNav, closeNav }
// )(
Navigation;
// );
