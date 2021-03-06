import React from 'react';
import {connect} from 'react-redux';
import PropTypes from "prop-types";

import {addNewTask, editTaskItem, delTaskItem, taskTextCreate, checkBoxOnChange} from "../../redux/todo-reducer";
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

    const onEditTaskItem = (id) => {
        console.log(id)
    }

    const onDelTaskItem = (id) => {
        props.delTaskItem(id);
    }

    const onCheckBoxOnChange = (id) => {
        props.checkBoxOnChange(id);
    }


    return <Tasks onTextChange={onTextChange}
                  onAddNewTask={onAddNewTask}
                  onEditTaskItem={onEditTaskItem}
                  onDelTaskItem={onDelTaskItem}
                  onCheckBoxOnChange={onCheckBoxOnChange}
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
    delTaskItem,
    checkBoxOnChange
})(TasksContainer);


TasksContainer.propTypes = {
    tasks: PropTypes.array,
    newTaskText: PropTypes.string,
    onTextChange: PropTypes.func,
    onAddNewTask: PropTypes.func,
    onEditTaskItem: PropTypes.func,
    onDelTaskItem: PropTypes.func,
    onCheckBoxOnChange: PropTypes.func,

    taskTextCreate: PropTypes.func,
    addNewTask: PropTypes.func,
    editTaskItem: PropTypes.func,
    delTaskItem: PropTypes.func,
    checkBoxOnChange: PropTypes.func,

}
