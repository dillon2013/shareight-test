import React from 'react';
import { connect } from 'react-redux';
import ProductList from './components/ProductList';
import { filterProducts } from '../actionCreators';


function Products ({match, handleProductFilter}) {
    let productTypes = ['dresses', 'jeans', 'shoes', 't-shirts'];
    return (
        <div>
            <ul>
            {productTypes.map(productType => (
                <li key={productType} onClick={handleProductFilter}>{ productType }</li>
            ))}
            </ul>
            <ProductList />
        </div>
    )
}

const mapStateToProps = state => ({products: state.products})
const mapDispatchToProps = dispatch => ({
    handleProductFilter(event) {
      dispatch(filterProducts(event.target.innerHTML))
    }
  })

export default connect(mapStateToProps, mapDispatchToProps)(Products)