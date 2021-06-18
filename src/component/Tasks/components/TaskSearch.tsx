import React, {FC} from 'react';
import svgSprite from '../../../assets/images/svgSprite.svg';
import '../scss/TaskSearch.scss';
interface TaskSearchProps {
    searchText: {
        val:string,
        onChange:() => void
    },
}

const TaskSearch:FC<TaskSearchProps> = ({searchText}) => (
    <div className="task__search">
      <label className="task__search-label" htmlFor="id">
        <input
          className="task__search-input"
          id="id"
          value={searchText.val}
          type="text"
          placeholder="search"
          onChange={searchText.onChange}
        />

        <div className="task__search-btn">
          <svg className="task__search-icon">
            <use href={`${svgSprite}#search`} />
          </svg>
        </div>
      </label>
    </div>
  );


export default TaskSearch;
