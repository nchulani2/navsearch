import React from 'react';
import unsplash from '../api/unsplashapi';
import FormInput from './FormInput';
import ImageList from './ImageList';

// CAN ONLY USE "export default" ON THE SAME LINE WITH CLASS BASED COMPONENTS
export default class App extends React.Component {
  state = {
    image: [],
    pageCount: 1,
    per_page: 30,
    totalPage: '',
    scrolling: false,
    imageCount: 0,
    userInput: 'beach'
  };

  // INITIAL LOADING
  onLoadPage = async () => {
    const { pageCount, per_page, image } = this.state;
    // pageCount gets updated after onLoadPage is called from the onLoadMore fn

    try {
      // check the unsplashapi.js file for api config
      const parsedBody = await unsplash.get(`/search/photos/`, {
        params: {
          query: this.state.userInput,
          per_page: per_page,
          page: pageCount
        }
      });
      console.log(parsedBody);
      this.setState({
        image: [...image, ...parsedBody.data.results],
        totalPage: parsedBody.data.total_pages,
        imageCount: parsedBody.data.total,
        scrolling: false
      });
    } catch (err) {
      alert(err);
    }
  };

  // MORE LOADING
  onLoadMore = () => {
    this.setState(
      prevState => ({
        pageCount: prevState.pageCount + 1,
        scrolling: true
      }),
      this.onLoadPage
    );
  };

  // we can use promises, or async and await to retrieve data with axios
  onSearchSubmit = async userText => {
    try {
      // check the unsplashapi.js file for api config
      const parsedBody = await unsplash.get(`/search/photos/`, {
        params: {
          query: userText,
          per_page: '30',
          page: 1
        }
      });

      this.setState({
        userInput: userText,
        imageCount: parsedBody.data.total,
        image: parsedBody.data.results,
        totalPage: parsedBody.data.total_pages
      });
    } catch (err) {
      alert(err);
    }
  };

  componentDidMount = () => {
    // initial load
    this.onLoadPage();
    this.scrollListener = window.addEventListener('scroll', e => {
      this.handleScroll(e);
    });
  };

  // scroll handler to detect when at bottom of page
  handleScroll = e => {
    const { scrolling, totalPage, pageCount } = this.state;
    if (scrolling) return;
    if (totalPage <= pageCount) return;
    let scrollTop =
      (document.documentElement && document.documentElement.scrollTop) ||
      document.body.scrollTop;

    let scrollHeight =
      (document.documentElement && document.documentElement.scrollHeight) ||
      document.body.scrollHeight;

    let clientHeight =
      document.documentElement.clientHeight || window.innerHeight;

    let scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;
    if (scrolledToBottom) {
      this.onLoadMore();
    }
  };

  render() {
    if (this.state.scrolling) {
      return (
        <div className="ui container app">
          {/* Props only can go down, we need a way to communicate from child to parent => send them through as a function invoked */}

          <FormInput onSubmit={this.onSearchSubmit} />

          {/* props.children is undefined unless we are nesting components */}

          <ImageList
            handleScroll={this.handleRemoveScroll}
            className="imageListPar"
            images={this.state.image}
            imageCount={this.state.imageCount}
            totalPages={this.state.totalPage}
            pageCount={this.state.pageCount}
          />
          <div style={{ textAlign: 'center', margin: '20px 0' }}>
            <i className="notched circle loading huge icon" />
          </div>
        </div>
      );
    }
    return (
      <div className="ui container app">
        {/* Props only can go down, we need a way to communicate from child to parent => send them through as a function invoked */}

        <FormInput onSubmit={this.onSearchSubmit} />

        {/* props.children is undefined unless we are nesting components */}

        <ImageList
          handleScroll={this.handleRemoveScroll}
          className="imageListPar"
          images={this.state.image}
          imageCount={this.state.imageCount}
          totalPages={this.state.totalPage}
          pageCount={this.state.pageCount}
        />
      </div>
    );
  }
}
