import React, { Component } from 'react';
import '../styles/FormInput.css';

import { connect } from 'react-redux';
import { getImages } from '../actions';

class FormInput extends Component {
  /* -------------------------------------------------------------------------- */
  // NOTE THIS IS ONE WAY OF RESOLVING THE "undefined" ISSUE WHEN IT COMES TO INVOKING A FUNCTION USING "this". Ideally, binding that function to the constructor creates an instance of the class with that function
  // constructor(props) {
  //   super(props);

  //   this.onFormSubmit = this.onFormSubmit.bind(this);
  // }
  /* -------------------------------------------------------------------------- */

  state = {
    userText: this.props.imageState !== null ? this.props.imageState.query : ''
  };

  onFormSubmit = e => {
    e.preventDefault();

    this.props.getImages(this.state.userText);
  };

  render() {
    return (
      <div className="formInput">
        <form onSubmit={this.onFormSubmit}>
          <div className="ui icon input" id="inputEle">
            <input
              value={this.state.userText}
              className="focusedEle"
              type="text"
              placeholder="Find any image. . ."
              onChange={e => {
                this.setState({ userText: e.target.value });
              }}
            />

            <i id="iconEle" className="search icon" />
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { imageState: state.data };
};

export default connect(
  mapStateToProps,
  { getImages }
)(FormInput);
