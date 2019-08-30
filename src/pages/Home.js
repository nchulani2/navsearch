import React, { Component } from 'react';
import Navigation from '../components/Navigation';
import ImageList from '../components/ImageList';
import { connect } from 'react-redux';

class Home extends Component {
  divStyle = {
    position: 'fixed',
    top: '60%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    textAlign: 'center'
  };
  render() {
    const { images } = this.props;
    console.log(images);
    if (this.props.images !== null && this.props.images.images.length === 0) {
      return <div>hello</div>;
    } else if (
      this.props.images !== null &&
      this.props.images.images.length !== 0
    ) {
      return (
        <div style={{ width: '100%', height: '100%' }}>
          {/* Props only can go down, we need a way to communicate from child to parent => send them through as a function invoked */}

          <Navigation
          // imageCount={this.state.imageCount}
          />

          <ImageList
            images={this.props.images.images}
            imageCount={this.props.images.total}
          />
        </div>
      );
    }
    return (
      <div style={{ width: '100%', height: '100vh' }}>
        {/* Props only can go down, we need a way to communicate from child to parent => send them through as a function invoked */}

        <Navigation
        // imageCount={this.state.imageCount}
        />

        <div style={{ ...this.divStyle }}>
          <h1
            style={{
              fontFamily: 'Indie Flower, cursive',
              fontWeight: 'bolder',
              letterSpacing: '2px',
              lineHeight: '3rem'
            }}>
            Thanks to the Unsplash API, you can immediately start searching for
            any images!
          </h1>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { images: state.images, total: state.total };
};

export default connect(mapStateToProps)(Home);
