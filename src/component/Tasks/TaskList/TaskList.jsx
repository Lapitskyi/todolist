import React from 'react'

import svgSprite from '../../../assets/images/svgSprite.svg'

import './TaskList.scss'


const TaskList = (props) => {


    return (
        <ul className="tasks__list">
            {
                props.tasks.map((task) =>
                    <li className="tasks__listItem" key={task.id}>
                        <label className="tasks__listLabel">
                            <input className="tasks__listCheckbox"
                                   type='checkbox'
                                   checked={task.done}
                                   onChange={(e) => {
                                       props.onCheckBoxOnChange(task.id)
                                   }}
                            />

                            <div className="tasks__listText">{task.text}</div>
                        </label>

                        <div>
                            <button className="tasks__btn btn" onClick={(e) => {props.onEditTaskItem(task.id)}}>
                                <svg className="tasks__btn-icon">
                                    <use href={svgSprite + "#edit"}></use>
                                </svg>
                            </button>

                            <button className="tasks__btn btn" onClick={(e) => {
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


export default TaskList;