import { FILTER_PRODUCTS } from './actions';

const filterProducts = (state, action) => {
    let filteredProducts = state.products.filter(product => product.type === action.payload);
    return Object.assign({}, state, {filteredProducts})
}

const rootReducer = (state, action) => {
    switch (action.type) {
        case FILTER_PRODUCTS:
            return filterProducts(state, action);
        default:
            return state
    }
}

export default rootReducer;