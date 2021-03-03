import React from 'react'
import {Route} from "react-router-dom"
import TasksContainer from "./component/Tasks/TasksContainer";

import './App.scss';

const App = () => {
    return (
        <div className="container">
            <Route path="/" render={() => <TasksContainer/>}/>
        </div>
    )
}

export default App;
