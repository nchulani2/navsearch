import React from 'react';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Register from './pages/Register';
import Login from './pages/Login';
import Error from './pages/Error';

import Navigation from './components/Navigation';

// Routing
import { Route, Switch } from 'react-router-dom';

// CAN ONLY USE "export default" ON THE SAME LINE WITH CLASS BASED COMPONENTS
export default class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/login" component={Login}></Route>
          <Route component={Error}></Route>
        </Switch>
        <Navigation></Navigation>
      </div>
    );
  }
}
