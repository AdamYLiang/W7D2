import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer.js';
import thunkMiddleware from '../middleware/thunk.js';

const configureStore = (preloadedState = {}) => {
    return createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(thunkMiddleware)
        );
};

export default configureStore;
