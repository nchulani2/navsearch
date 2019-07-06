import React from 'react';
import '../styles/ImageList.css';
import ImageComp from './ImageComp';

export default class ImageList extends React.Component {
  newImages = images =>
    images.map(image => {
      return (
        // we have to include a key for a LIST of items, a better way is to create another component, that way we just need to pass that component one key

        <ImageComp key={image.id} imageCont={image} />
      );
    });

  render() {
    return (
      <div className="imageList" style={{ marginBottom: '2rem' }}>
        <p className="textEle">
          Form Input has found:
          <strong className="boldEle">{this.props.imageCount}</strong>images
        </p>

        <div className="containerPar">{this.newImages(this.props.images)}</div>
      </div>
    );
  }
}
