import React from 'react';
import { connect } from 'react-redux';
import ProductList from './components/ProductList';
import { filterProducts } from '../actionCreators';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
`

const Ul = styled.ul`
    padding: 0;
    list-style: none;
    flex: 1;
    font-size: 1.3rem;
    margin: 12px 0;

    li{
        margin-bottom: 10px

        &:hover{
            cursor: pointer;
            text-decoration: underline; 
        }
    }
`
const ProductSection = styled.div`
    flex: 3;
`



function Products ({match, handleProductFilter}) {
    let productTypes = ['dresses', 'jeans', 'shoes', 't-shirts'];
    return (
        <Wrapper>
            <Ul>
            {productTypes.map(productType => (
                <li key={productType} onClick={handleProductFilter}>{ productType }</li>
            ))}
            </Ul>
            <ProductSection>
                <ProductList />
            </ProductSection>
        </Wrapper>
    )
}

const mapStateToProps = state => ({products: state.products})
const mapDispatchToProps = dispatch => ({
    handleProductFilter(event) {
      dispatch(filterProducts(event.target.innerHTML))
    }
  })

export default connect(mapStateToProps, mapDispatchToProps)(Products)