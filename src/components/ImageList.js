import React from 'react';
import '../styles/ImageList.css';
import ImageComp from './ImageComp';

const imagesLoaded = parentNode => {
  const imgEles = [...parentNode.querySelectorAll('img')];
  for (let index = 0; index < imgEles.length; index++) {
    const img = imgEles[index];
    if (!img.complete) {
      return false;
    }
  }
  return true;
};

export default class ImageList extends React.Component {
  state = {
    loading: true
  };

  renderSpinner = () => {
    if (!this.state.loading) {
      return null;
    }
    return (
      <div>
        <i
          style={{ position: 'fixed' }}
          className="loadey notched massive circle loading icon"
        />
      </div>
    );
  };

  handleImageChange = () => {
    this.setState({ loading: !imagesLoaded(this.galleryEle) });
  };

  renderImage = image => {
    return (
      // we have to include a key for a LIST of items, a better way is to create another component, that way we just need to pass that component one key

      <ImageComp
        key={image.id}
        imageCont={image}
        handleImg={this.handleImageChange}
      />
    );
  };

  render() {
    console.log(this.props);
    return (
      <div className="imageList" style={{ marginBottom: '2rem' }}>
        <p className="textEle">
          Form Input has found:
          <strong className="boldEle">{this.props.imageCount}</strong>images
        </p>
        <div
          className="gallery"
          ref={ele => {
            this.galleryEle = ele;
          }}>
          {this.renderSpinner()}
          <div className="containerPar">
            {this.props.images.map(image => this.renderImage(image))}
          </div>
        </div>
      </div>
    );
  }
}
