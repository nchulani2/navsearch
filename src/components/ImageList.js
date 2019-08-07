import React from 'react';
import '../styles/ImageList.css';
import ImageComp from './ImageComp';
import Spinner from './Spinner';

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
  constructor(props) {
    super(props);

    this.galleryEle = React.createRef();
    this.state = {
      loading: true
    };
  }

  renderSpinner = () => {
    if (!this.state.loading) {
      document.documentElement.classList.remove('noScroll');
      return null;
    }
    document.documentElement.classList.add('noScroll');
    return <Spinner />;
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
    return (
      <div className="imageList">
        <div className="gallery" ref={ele => (this.galleryEle = ele)}>
          <div id="containerPar" className="containerPar animated fadeInUp">
            {this.props.images.map(image => this.renderImage(image))}
          </div>

          {this.renderSpinner()}
        </div>
      </div>
    );
  }
}
