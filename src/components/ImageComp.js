import React from 'react';
import '../styles/ImageComp.css';

export default class ImageComp extends React.Component {
  state = { loaded: false };

  render() {
    // destructurizing keys from the JSON
    const { alt_description, urls } = this.props.imageCont;

    return (
      <div className="imageComp">
        <img
          style={this.state.loaded ? {} : { display: 'none' }}
          className="ui image"
          id="imageEle"
          alt={alt_description}
          src={urls.regular}
          onLoad={() => this.setState({ loaded: true })}
        />
      </div>
    );
  }
}
