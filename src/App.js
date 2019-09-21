import React, { Component } from 'react';

// Pages
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Search from './pages/Search';
import Error from './pages/Error';

import Navigation from './components/Navigation';

// Routing
import { Route, Switch } from 'react-router-dom';

// CAN ONLY USE "export default" ON THE SAME LINE WITH CLASS BASED COMPONENTS
export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/gallery" component={Gallery}></Route>
          <Route path="/search" component={Search}></Route>
          <Route component={Error}></Route>
        </Switch>
        <Navigation></Navigation>
      </div>
    );
  }
}
