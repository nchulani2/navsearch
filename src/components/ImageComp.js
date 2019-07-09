import React from 'react';
import '../styles/ImageComp.css';

export default class ImageComp extends React.Component {
  state = {
    open: false
  };

  // callback to imagelist to check if images are laoded
  handleImageChange = () => {
    this.props.handleImg();
  };

  render() {
    // destructurizing keys from the JSON
    const { alt_description, urls, user, links } = this.props.imageCont;

    return (
      <div className="imageComp">
        <div className="content">
          <div className="content-overlay" />
          <img
            id="imageEle"
            alt={alt_description}
            src={urls.regular}
            onLoad={this.handleImageChange}
            onError={this.handleImageChange}
          />

          <div className="content-details fadeIn-bottom">
            <p className="content-text">
              Image by
              <a href={user.links.html} className="textPar">
                {user.name}
              </a>
              on
              <a href={links.html} className="textPar">
                Unsplash
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
