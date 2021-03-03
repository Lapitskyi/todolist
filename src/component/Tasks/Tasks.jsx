import React from 'react'

import './Tasks.scss'
import TaskList from "./TaskList/TaskList";
import TaskForm from "./TaskForm/TaskForm";


const Tasks = (props) => {

    return (
        <div className="task__inner">
            <h2 className="task__title">Список задач</h2>

            <TaskForm newTaskText={props.newTaskText}
                      onAddNewTask={props.onAddNewTask}
                      onTextChange={props.onTextChange}
            />

            <TaskList tasks={props.tasks}
                      onEditTaskItem={props.onEditTaskItem}
                      onDelTaskItem={props.onDelTaskItem}
            />

        </div>
    )
}


export default Tasks;