import React from 'react';
import unsplash from './api/unsplashapi';

// Pages
import Home from './pages/Home';

// Routing
import { Route } from 'react-router-dom';

// CAN ONLY USE "export default" ON THE SAME LINE WITH CLASS BASED COMPONENTS
export default class App extends React.Component {
  state = {
    image: [],
    pageCount: 1,
    per_page: 20,
    totalPage: null,
    scrolling: false,
    imageCount: null,
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
  onSearchSubmit = userText => {
    this.setState(
      prevState => ({
        image: [],
        pageCount: prevState.pageCount - (prevState.pageCount - 1), // always outputs 1
        userInput: userText
      }),

      this.getNewData
    );
  };

  getNewData = async () => {
    try {
      // check the unsplashapi.js file for api config
      const parsedBody = await unsplash.get(`/search/photos/`, {
        params: {
          query: this.state.userInput,
          per_page: this.state.per_page,
          page: this.state.pageCount
        }
      });

      this.setState({
        userInput: this.state.userInput,
        imageCount: parsedBody.data.total,
        image: parsedBody.data.results,
        totalPage: parsedBody.data.total_pages,
        scrolling: false
      });
    } catch (err) {
      alert(err);
    }
  };

  componentDidMount = () => {
    // initial load
    // this.onLoadPage();
    window.addEventListener('scroll', this.handleScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
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

    let scrolledToBottom =
      Math.ceil(scrollTop + clientHeight) >= scrollHeight - 100;

    if (scrolledToBottom) {
      this.onLoadMore();
    }
  };

  render() {
    return (
      <div>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={Home}></Route>
        <Route exact path="/register" component={Home}></Route>
        <Route exact path="/login" component={Home}></Route>
      </div>
    );
  }
}
