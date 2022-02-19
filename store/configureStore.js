import {combineReducers, compose, createStore} from 'redux';
import mainReducer from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers(mainReducer);

const configureStore = () => {
  return createStore(rootReducer, {}, composeEnhancers());
};
export default configureStore;
