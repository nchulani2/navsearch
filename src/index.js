import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const loader = document.querySelector('.loader');

class Index extends React.Component {
  hideLoader = () => {
    loader.classList.add('loader--hide');
  };

  showLoader = () => {
    loader.classList.remove('loader--hide');
  };
  componentDidMount = () => {
    this.hideLoader();
  };
  render() {
    return (
      <div>
        <App />
      </div>
    );
  }
}

setTimeout(() => {
  ReactDOM.render(<Index />, document.querySelector('#root'));
}, 3000);
