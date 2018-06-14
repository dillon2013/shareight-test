import React from 'react';
import { connect } from 'react-redux'; 

function ProductList ({filteredProducts}) {

    function FilteredProducts () {
      if (filteredProducts) {
        return filteredProducts.map(product => <p key={product.name}>{ product.name }</p>)
      }
      return <p>click category to see what's in stock</p>
    }

    return (
        <FilteredProducts/>
    )
}

const mapStateToProps = state => ({filteredProducts: state.filteredProducts});

export default connect(mapStateToProps)(ProductList)