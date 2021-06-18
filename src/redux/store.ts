import { combineReducers, createStore } from 'redux';
import reducer from './reducer';

const reducers = combineReducers({
  todoList: reducer
});

const store = createStore(reducers);

export default store;
