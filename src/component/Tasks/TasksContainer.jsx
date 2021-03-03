import React from 'react';
import {connect} from 'react-redux';

import {addNewTask, editTaskItem, delTaskItem, taskTextCreate} from "../../redux/todo-reducer";
import Tasks from "./Tasks";


const TasksContainer = (props) => {

    const onAddNewTask = (e) => {
        e.preventDefault()
        props.addNewTask();
    }

    const onTextChange = (e) => {
        let text = e.target.value;
        props.taskTextCreate(text);
    }

    const onEditTaskItem = () => {
    }

    const onDelTaskItem = (id) => {
        props.delTaskItem(id);
    }


    return <Tasks onTextChange={onTextChange}
                  onAddNewTask={onAddNewTask}
                  onEditTaskItem={onEditTaskItem}
                  onDelTaskItem={onDelTaskItem}
                  newTaskText={props.newTaskText}
                  tasks={props.tasks}

    />
}


let mapStateToProps = (state) => {
    return {
        newTaskText: state.todoList.newTaskText,
        tasks: state.todoList.tasks
    }
}

export default connect(mapStateToProps, {
    taskTextCreate,
    addNewTask,
    editTaskItem,
    delTaskItem
})(TasksContainer);