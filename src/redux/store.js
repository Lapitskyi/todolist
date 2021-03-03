import {combineReducers, createStore} from "redux";
import todoReducer from "./todo-reducer";

let reducers = combineReducers({
    todoList: todoReducer
});

let store = createStore(reducers);

export default store;