import React, { Component } from 'react';
import FormInput from './FormInput';

import '../styles/FormNav.css';

class FormNav extends Component {
  render() {
    return (
      <div className="formnav animated fadeInUp">
        <div className="ui container">
          <div className="formCount">
            Total count: <span>{this.props.total}</span> images
          </div>
          <FormInput />
        </div>
      </div>
    );
  }
}

export default FormNav;
