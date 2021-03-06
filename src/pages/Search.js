import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormInput from '../components/FormInput';
import { getMore, reset } from '../actions';
import ImageList from '../components/ImageList';

class Search extends Component {
  componentDidMount = () => {
    this.props.reset();
    window.addEventListener('scroll', this.handleScroll);
  };
  componentWillUnmount = () => {
    window.addEventListener('scroll', this.handleScroll);
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
  render() {
    const { imageState } = this.props;
    return (
      <div className="sectioning" style={{ height: '100%' }}>
        <FormInput></FormInput>
        {imageState !== null &&
        imageState.imageData.length !== 0 &&
        !imageState.loading ? (
          <ImageList images={imageState.imageData}></ImageList>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { imageState: state.data };
};

export default connect(
  mapStateToProps,
  { getMore, reset }
)(Search);
