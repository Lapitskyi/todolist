import React from 'react';
import {connect} from 'react-redux';
import PropTypes from "prop-types";

import {
    addNewTask,
    delTaskItem,
    taskTextCreate,
    checkBoxOnChange,
    updateTaskText, editModeTask, searchTask
} from "../../redux/todo-reducer";

import Tasks from "./Tasks";


const TasksContainer = (props) => {

    const onAddNewTask = (e) => {
        e.preventDefault()
        props.addNewTask();
    }

    const onTextChange = (e) => {
        let text = e.target.value;
        props.taskTextCreate(text)
    }

    const onUpdateTaskText = (e, id) => {
        let taskText = e.target.value;
        props.updateTaskText(taskText, id);

    }

    const onEditModeTask = (id) => {
        props.editModeTask(id)
    }


    const onDelTaskItem = (id) => {
        props.delTaskItem(id);
    }

    const onCheckBoxOnChange = (id) => {
        props.checkBoxOnChange(id);
    }

    const onSearchTask = (e) =>{
        props.searchTask(e.target.value);
    }


    return <Tasks onAddNewTask={onAddNewTask}
                  onTextChange={onTextChange}
                  onUpdateTaskText={onUpdateTaskText}
                  onEditModeTask={onEditModeTask}
                  onDelTaskItem={onDelTaskItem}
                  onCheckBoxOnChange={onCheckBoxOnChange}
                  onSearchTask={ onSearchTask}

                  newTaskText={props.newTaskText}
                  searchText = {props.searchText}
                  tasks={props.tasks}
    />
}


let mapStateToProps = (state) => {
    return {
        newTaskText: state.todoList.newTaskText,
        tasks: state.todoList.tasks,
        searchText:state.todoList.searchText
    }
}

export default connect(mapStateToProps, {
    taskTextCreate,
    addNewTask,
    updateTaskText,
    editModeTask,
    delTaskItem,
    checkBoxOnChange,
    searchTask
})(TasksContainer);


TasksContainer.propTypes = {
    tasks: PropTypes.array,
    newTaskText: PropTypes.string,
    searchText:PropTypes.string,

    onAddNewTask: PropTypes.func,
    onTextChange: PropTypes.func,
    onUpdateTaskText: PropTypes.func,
    onEditModeTask: PropTypes.func,
    onDelTaskItem: PropTypes.func,
    onCheckBoxOnChange: PropTypes.func,
    onSearchTask:PropTypes.func,

    taskTextCreate: PropTypes.func,
    addNewTask: PropTypes.func,
    updateTaskText: PropTypes.func,
    editModeTask: PropTypes.func,
    delTaskItem: PropTypes.func,
    checkBoxOnChange: PropTypes.func,
    searchTask:PropTypes.func
}
