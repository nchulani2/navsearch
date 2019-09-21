import React, { Component } from 'react';
import ImageList from '../components/ImageList';
import Spinner from '../components/Spinner';
import '../styles/pages/Gallery.css';
import { connect } from 'react-redux';

import { listImages, listMoreImages } from '../actions';

class Gallery extends Component {
  componentDidMount = () => {
    this.props.listImages();
    window.addEventListener('scroll', this.handleScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  };

  handleScroll = e => {
    const { scrolling } = this.props.imageState;

    if (scrolling) return;

    let scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;

    let scrollHeight =
      (document.documentElement && document.documentElement.scrollHeight) ||
      document.body.scrollHeight;

    let clientHeight =
      document.documentElement.clientHeight || window.innerHeight;

    let scrolledToBottom =
      Math.ceil(scrollTop + clientHeight) >= scrollHeight - 100;
    if (scrolledToBottom) {
      this.props.listMoreImages();
    }
  };

  render() {
    const { imageState } = this.props;
    console.log(imageState);

    return (
      <div className="sectioning" style={{ height: '100%' }}>
        <div className="headers ui container animated fadeIn">
          <div className=" listHeader">Gallery</div>
          <div className="listSubHeader">
            The gallery section features the latest images from Unsplash
          </div>
        </div>
        {imageState !== null &&
        imageState.imageData.length !== 0 &&
        !imageState.loading ? (
          <ImageList images={imageState.imageData}></ImageList>
        ) : (
          <Spinner></Spinner>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    imageState: state.data
  };
};

export default connect(
  mapStateToProps,
  { listImages, listMoreImages }
)(Gallery);
