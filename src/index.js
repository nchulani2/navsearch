import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

import { BrowserRouter as Router } from 'react-router-dom';

class Index extends React.Component {
  componentDidMount = () => {
    document.querySelector('.loader').classList.add('loader--hide');
  };

  render() {
    return (
      <Provider store={createStore(reducers, applyMiddleware(thunk))}>
        <Router>
          <App></App>
        </Router>
      </Provider>
    );
  }
}

setTimeout(() => {
  ReactDOM.render(<Index></Index>, document.querySelector('#root'));
}, 2500);
