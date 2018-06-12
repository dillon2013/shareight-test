import React, { Component } from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import data from './data/products';


function Home () {
  return (
    <div>
      <p>this is the home page</p>
    </div>
  )
}

function Product ({match}) {
  return (
    <div>
      {data.products.filter(product => product.type === match.params.productType).map(product => (
        <p key={product.name}>{ product.name }</p>
      ))}
    </div>
  )
}

function ProductLanding (props) {
  return (
    <div>Click on the category to filter</div>
  )
}

function Products ({match}) {
  let productTypes = ['dresses', 'jeans', 'shoes', 't-shirts'];
  return (
    <div>
        <ul>
          {productTypes.map(productType => (
            <Link key={productType} to={`/products/${productType}`}>
              <li>{ productType }</li>
            </Link>
          ))}
        </ul>
        <Route exact path={match.path} component={ProductLanding} />
        <Route path={`${match.path}/:productType`} component={Product} />
    </div>
  )
}


class App extends Component {
  render() {
    return (
      <Router>
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
      </Router>
    );
  }
}

export default App;
