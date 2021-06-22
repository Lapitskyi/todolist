import { combineReducers, createStore } from 'redux';
import reducer from './reducer';

const reducers = combineReducers({
  todoList: reducer,
});

export type AppStateType = ReturnType<typeof reducers>;

const store = createStore(reducers);

export default store;
