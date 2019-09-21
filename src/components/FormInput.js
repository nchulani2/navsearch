import React, { Component } from 'react';
import '../styles/FormInput.css';

import { connect } from 'react-redux';
import { getImages } from '../actions';

class FormInput extends Component {
  state = {
    userText: this.props.imageState !== null ? this.props.imageState.query : ''
  };

  onFormSubmit = e => {
    e.preventDefault();

    this.props.getImages(this.state.userText);
  };

  render() {
    return (
      <div className="formnav animated fadeInUp">
        <div className="ui container">
          <div className="formInput">
            <form onSubmit={this.onFormSubmit}>
              <div className="ui icon input" id="inputEle">
                <input
                  value={this.state.userText}
                  className="focusedEle"
                  type="text"
                  placeholder="Search for images. . ."
                  onChange={e => {
                    this.setState({ userText: e.target.value });
                  }}
                />

                <i id="iconEle" className="search icon" />
              </div>
            </form>
          </div>
        </div>
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
