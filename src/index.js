import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

class Index extends React.Component {
  render() {
    return (
      <div className="Index">
        <App />
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.querySelector('#root'));
