import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

import { BrowserRouter as Router } from 'react-router-dom';

class Index extends React.Component {
  componentDidMount = () => {
    document.querySelector('.loader').classList.add('loader--hide');
  };

  render() {
    return (
      <Provider
        store={createStore(
          reducers,
          compose(
            applyMiddleware(thunk),
            window.__REDUX_DEVTOOLS_EXTENSION__ &&
              window.__REDUX_DEVTOOLS_EXTENSION__()
          )
        )}>
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
