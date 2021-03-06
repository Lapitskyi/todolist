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
            <h4> Список задач пуст </h4>
            }


            {props.tasks.length !== 0 &&
            [...activeTask, ...doneTask].map((task) =>
                <li className="tasks__listItem" key={task.id}>
                    <label className="tasks__listLabel">
                        <input className="tasks__listCheckbox"
                               type='checkbox'
                               checked={task.done}
                               onChange={() => {
                                   props.onCheckBoxOnChange(task.id)
                               }}
                        />

                        <div className="tasks__listText">{task.text}</div>
                    </label>

                    <div>
                        <button className="tasks__btn btn"
                                onClick={() => {
                                    props.onEditTaskItem(task.id)
                                }}>
                            <svg className="tasks__btn-icon">
                                <use href={svgSprite + "#edit"}></use>
                            </svg>
                        </button>

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
    onCheckBoxOnChange: PropTypes.func,
    onEditTaskItem: PropTypes.func,
    onDelTaskItem: PropTypes.func,
}

export default TaskList;