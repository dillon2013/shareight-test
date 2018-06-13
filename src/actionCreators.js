import { FILTER_PRODUCTS } from './actions';

export function filterProducts (filter) {
    return {
        type: FILTER_PRODUCTS,
        payload: filter
    }
}