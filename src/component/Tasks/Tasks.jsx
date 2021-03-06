import React from 'react'
import PropTypes from "prop-types";

import TaskList from "./TaskList/TaskList";
import TaskForm from "./TaskForm/TaskForm";
import './Tasks.scss'


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
                      onCheckBoxOnChange={props.onCheckBoxOnChange}
            />

        </div>
    )
}

Tasks.propTypes = {
    tasks: PropTypes.array,
    newTaskText: PropTypes.string,
    onTextChange: PropTypes.func,
    onAddNewTask: PropTypes.func,
    onEditTaskItem: PropTypes.func,
    onDelTaskItem: PropTypes.func,
    onCheckBoxOnChange: PropTypes.func
}

export default Tasks;