import React from 'react'
import PropTypes from "prop-types";

import './TaskForm.scss';


const TaskForm = (props) => {
    return (
            <form className="form">
                <label className="form__label">
                    <input className="form__input"
                           type="text"
                           placeholder="добавить задачу"
                           onChange={props.onTextChange}
                           maxLength={60}
                           value={props.newTaskText}/>
                </label>
                <button className="form__btn btn"
                        type="submit"
                        onClick={props.onAddNewTask}>add
                </button>
            </form>
    )
}



TaskForm.propTypes = {
    newTaskText: PropTypes.string,
    onTextChange: PropTypes.func,
    onAddNewTask: PropTypes.func
}

export default TaskForm;