import React, { Component } from 'react';
import FormNav from '../components/FormNav';
import ImageList from '../components/ImageList';
import { connect } from 'react-redux';

import { getMore } from '../actions';

class Home extends Component {
  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  };

  handleScroll = e => {
    const { scrolling, total_pages, page } = this.props.imageState;

    if (scrolling) return;

    if (total_pages <= page) return;

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
      this.props.getMore();
    }
  };

  divStyle = {
    position: 'fixed',
    top: '65%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    textAlign: 'center',
    animationDelay: '0.3s'
  };

  render() {
    const { imageState } = this.props;

    if (imageState !== null && imageState.images.length === 0) {
      return (
        <div
          style={{
            width: '100%',
            height: '100%'
          }}>
          <FormNav total={imageState.total} />
          <div className="animated fadeIn" style={{ ...this.divStyle }}>
            <h1
              style={{
                fontFamily: 'Indie Flower, cursive',
                fontWeight: 'bolder',
                letterSpacing: '2px',
                lineHeight: '3rem'
              }}>
              Sorry, no imageState found for {`"${imageState.query}"`}
            </h1>
          </div>
        </div>
      );
    } else if (imageState !== null && imageState.images.length !== 0) {
      return (
        <div
          style={{
            width: '100%',
            height: '100%'
          }}>
          <FormNav total={imageState.total} />

          <ImageList images={imageState.images} imageCount={imageState.total} />
        </div>
      );
    }
    return (
      <div style={{ width: '100%', height: '100vh' }}>
        <FormNav total={'0'} />

        <div className="animated fadeIn" style={{ ...this.divStyle }}>
          <h3
            style={{
              fontFamily: 'Indie Flower, cursive',
              fontWeight: 'bolder',
              letterSpacing: '2px',
              lineHeight: '3rem'
            }}>
            Thanks to the Unsplash API, you can immediately start searching for
            any images!
          </h3>
        </div>
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
  { getMore }
)(Home);
