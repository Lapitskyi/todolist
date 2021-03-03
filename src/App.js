import React from 'react'
import './App.scss';
import ToDoList from "./component/ToDoList/ToDoList";
import {Route} from "react-router-dom"


const App = () => {
    return (
        <div className="container">

            <Route path="/" render={() => <ToDoList/>}/>
        </div>
    )
}

export default App;
