import React, { Component } from 'react';
import '../styles/FormInput.css';

import { connect } from 'react-redux';
import { getImages } from '../actions';

// There is a common error that occurs here with the keyword "this". The error states "cannot read property "state" of undefined". Basically, this is what we are trying to do, we are trying to access "undefined.state", however, undefined as on onject is well, undefined and nothing exists under it.
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
  // The word can change, instead of onInputChange, it can be inputChanger or whatever you wanna call it, user data will always be inside the event object inside event.target.value
  // NOTE When we invoke a function, it essentially rips the class out of the function, hence why we get this being defined as "undefined"
  // This can be fixed using ES6 arrow functions as they bind an instance of the class to "this" to that function, can also be done using constructor method

  onFormSubmit = e => {
    // preventDefault method prevents the default form functionality, eg. hitting enter will reload the page, we removed that with preventDefault
    e.preventDefault();

    // in a class-based component, referencing props is done through "this" rather than just props, in this case, 'this' refers to class FormInput

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
              // NOTE We can use functions as props, in this case, a function "onInputChange" will detect when a user typed something into the input
              // REMEMBER, no need for () after onInputChange, it's only to be executed when the user types something
              // onChange is a predefined React.Component method, there are many more as well like onClick, onSubmit and onScroll, etc.
              // For one line codes, it's better to NOT implement a function to invoke
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
