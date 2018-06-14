import { createStore } from 'redux';
import initialData from './data/products';
import reducer from './reducers';

const store = createStore(reducer, initialData);

export default store;