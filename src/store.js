import { createStore, compose } from 'redux';
import initialData from './data/products';
import reducer from './reducers';

const store = createStore(reducer, initialData, compose(
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? 
    window.devToolsExtension() :
    f => f
));

export default store;