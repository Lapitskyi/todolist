import React from 'react'
import PropTypes from "prop-types";

import svgSprite from '../../../assets/images/svgSprite.svg';

import './TaskList.scss';


const TaskList = (props) => {

    const activeTask = props.tasks.filter(task => !task.done);
    const doneTask = props.tasks.filter(task => task.done);

    return (
        <ul className="tasks__list">
            {props.tasks.length === 0 &&
            <h4> The task list is empty </h4>
            }

            {props.tasks.length !== 0 &&
            [...activeTask, ...doneTask].map((task) =>
                <li className="tasks__list-item" key={task.id}>
                    <label className="tasks__list-label">
                        <input className="tasks__list-checkbox"
                               type='checkbox'
                               checked={task.done}
                               onChange={() => {
                                   props.onCheckBoxOnChange(task.id)
                               }}
                        />

                        {task.editMode && <textarea className="tasks__list-input"
                                                 type="text"
                                                 value={task.text}
                                                 autoFocus={true}
                                                 onChange={(e) => {
                                                     props.onUpdateTaskText(e, task.id)
                                                 }}
                        />}

                        {!task.editMode && <div className="tasks__list-text">{task.text}</div>}
                    </label>

                    <div className="tasks__btn-box">

                        {!task.editMode && !task.done &&
                        <button className="tasks__btn btn"
                                onClick={() => {
                                    props.onEditModeTask(task.id)
                                }}>
                            <svg className="tasks__btn-icon">
                                <use href={svgSprite + "#edit"}></use>
                            </svg>
                        </button>
                        }

                        {task.editMode &&
                        <button className="tasks__btn btn"
                                onClick={() => {
                                    props.onEditModeTask(task.id)
                                }}>
                            <svg className="tasks__btn-icon tasks__btn-update">
                                <use href={svgSprite + "#update"}></use>
                            </svg>
                        </button>
                        }

                        <button className="tasks__btn btn"
                                onClick={() => {
                                    props.onDelTaskItem(task.id)
                                }}>
                            <svg className="tasks__btn-icon">
                                <use href={svgSprite + "#remove"}></use>
                            </svg>
                        </button>
                    </div>
                </li>
            )
            }
        </ul>
    )
}

TaskList.propTypes = {
    tasks: PropTypes.array,
    maxlength:PropTypes.number,

    onUpdateTaskText: PropTypes.func,
    onEditModeTask: PropTypes.func,
    onDelTaskItem: PropTypes.func,
    onCheckBoxOnChange: PropTypes.func,
}

export default TaskList;