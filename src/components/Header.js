import React, { Component } from 'react';
import '../styles/Header.css';

class Header extends Component {
  state = {
    mouseOn: false
  };
  render() {
    return (
      <div
        className="header"
        style={{
          color: `${this.state.mouseOn ? 'rgb(200,70,70)' : this.props.color}`
        }}
        onMouseEnter={() => this.setState({ mouseOn: true })}
        onMouseLeave={() => this.setState({ mouseOn: false })}>
        navsearch
      </div>
    );
  }
}

export default Header;
