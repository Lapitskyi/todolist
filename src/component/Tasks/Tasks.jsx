import React from 'react'
import PropTypes from "prop-types";

import TaskList from "./TaskList/TaskList";
import TaskForm from "./TaskForm/TaskForm";
import './Tasks.scss'
import TaskSearch from "./TaskSearch/TaskSearch";



const Tasks = (props) => {

    return (
        <div className="task__inner">
            <TaskSearch searchText={props.searchText}
                        onSearchTask={ props.onSearchTask}
            />

            <h2 className="task__title">Task List</h2>

            <TaskForm newTaskText={props.newTaskText}
                      onAddNewTask={props.onAddNewTask}
                      onTextChange={props.onTextChange}
            />

            <TaskList tasks={props.tasks}

                      onUpdateTaskText={props.onUpdateTaskText}
                      onEditModeTask={props.onEditModeTask}
                      onDelTaskItem={props.onDelTaskItem}
                      onCheckBoxOnChange={props.onCheckBoxOnChange}

            />

        </div>
    )
}

Tasks.propTypes = {
    tasks: PropTypes.array,
    newTaskText: PropTypes.string,
    searchText:PropTypes.string,

    onAddNewTask: PropTypes.func,
    onTextChange: PropTypes.func,
    onUpdateTaskText: PropTypes.func,
    onEditModeTask: PropTypes.func,
    onDelTaskItem: PropTypes.func,
    onCheckBoxOnChange: PropTypes.func,
    onSearchTask:PropTypes.func
}

export default Tasks;