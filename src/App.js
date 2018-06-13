import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './home/Home';
import Products from './products/Products';
import store from './store';


class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
          </ul>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/products" component={Products}/>
          </Switch>
        </div>
        </Provider>
      </Router>
    );
  }
}

export default App;
