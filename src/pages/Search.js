import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/pages/Search.css';
import FormNav from '../components/FormNav';
import { getMore } from '../actions';

class Search extends Component {
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
      // this.props.listMoreImages();
    }
  };
  render() {
    return (
      <div className="sectioning">
        <FormNav></FormNav>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { imageState: state.data };
};

export default connect(
  mapStateToProps,
  { getMore }
)(Search);
