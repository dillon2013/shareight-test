import data from './data/products';
import { FILTER_PRODUCTS } from './actions';

const DEFAULT_STATE = data;

const filterProducts = (state, action) => {
    let filteredProducts = state.products.filter(product => product.type === action.payload);
    return Object.assign({}, state, {filteredProducts})
}

const rootReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case FILTER_PRODUCTS:
            return filterProducts(state, action);
        default:
            return state
    }
}

export default rootReducer;