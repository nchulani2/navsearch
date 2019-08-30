import React from 'react';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Register from './pages/Register';
import Login from './pages/Login';

// Routing
import { Route } from 'react-router-dom';

// CAN ONLY USE "export default" ON THE SAME LINE WITH CLASS BASED COMPONENTS
export default class App extends React.Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/register" component={Register}></Route>
        <Route exact path="/login" component={Login}></Route>
      </div>
    );
  }
}
