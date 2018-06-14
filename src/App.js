import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './home/Home';
import Products from './products/Products';
import store from './store';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  color: grey;
`

const Ul = styled.ul`
  padding: 0;
  font-size: 1.5rem;

  li {
    display: inline-block;
    padding: 10px 10px 10px 0;
    
    a{
      color: #505050;
      text-decoration: none;

      &:hover{
        font-weight:bold;
      }
    }
  }
`


class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
        <Wrapper>
          <Ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
          </Ul>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/products" component={Products}/>
          </Switch>
        </Wrapper>
        </Provider>
      </Router>
    );
  }
}

export default App;
