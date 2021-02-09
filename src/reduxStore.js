import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import ticketsReducer from './ticketsReducer';

const reducers = combineReducers({
  ticketsReducer: ticketsReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

// @ts-ignore
window.store = store;


export default store;
