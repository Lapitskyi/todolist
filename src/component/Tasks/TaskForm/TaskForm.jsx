import React from 'react'

import './TaskForm.scss'



const TaskForm = (props) => {

    return (
            <form className="form">
                <label className="form__label">
                    <input className="form__input"
                           type="text"
                           placeholder="добавить задание"
                           onChange={props.onTextChange}
                           value={props.newTaskText}/>
                </label>
                <button className="form__btn btn"
                        type="button"
                        onClick={props.onAddNewTask}>add
                </button>
            </form>
    )
}


export default TaskForm;