import React from 'react';
import PropTypes from "prop-types";
import svgSprite from "../../../assets/images/svgSprite.svg";
import './TaskSearch.scss'


const TaskSearch = (props) => {
    return (
        <div className="task__search">
            <label className="task__search-label">
                <input className="task__search-input"
                       value={props.searchText}
                       type="text"
                       placeholder='search'
                       onChange={props.onSearchTask}
                />

                <div className="task__search-btn">
                    <svg className="task__search-icon">
                        <use href={svgSprite + "#search"}></use>
                    </svg>
                </div>
            </label>
        </div>
    )
}

TaskSearch.propTypes = {
    searchText: PropTypes.string,
    onSearchTask: PropTypes.func

}

export default TaskSearch;