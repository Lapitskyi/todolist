import React, {FC, useMemo} from 'react';
import svgSprite from "../../../assets/images/svgSprite.svg";

import '../scss/TaskList.scss';
import TaskCheckBox from './TaskCheckBox';
import TaskItem from './TaskItem';
interface TaskListProps {
  searchTask: any[],

  onAddNewTask: (e: { preventDefault: () => void; }, text: string) => void,
  onEditModeTask: (id: number) => void,
  onDelTaskItem: (taskId: number) => void,
  onCheckBoxOnChange: (id:number) => void
  onUpdateTaskText: (id: number, val:string) => void,

}
const TaskList: FC<TaskListProps> = ({
  searchTask,
  onEditModeTask,
  onDelTaskItem,
  onCheckBoxOnChange,
  onUpdateTaskText
}) => {

  return (
    <ul className="tasks__list">
      {searchTask.length === 0
      && <h4> The task list is empty </h4>}

      {searchTask.length !== 0
      && searchTask.map((task) => (
        <li className="tasks__list-item" key={task.id}>

          <TaskItem
            id={task.id}
            done={task.done}
            onCheckBoxOnChange={onCheckBoxOnChange}
            editMode={task.editMode}
            initialText={task.text}
            onUpdateTaskText={onUpdateTaskText}
          />

          <div className="tasks__btn-box">

            {!task.editMode && !task.done
            && (
              <button
                className="tasks__btn btn"
                type="button"
                onClick={() => onEditModeTask(task.id)}
              >
                <svg className="tasks__btn-icon">
                  <use href={`${svgSprite}#edit`} />
                </svg>
              </button>
            )}

            {task.editMode
            && (
              <button
                className="tasks__btn btn"
                type="button"
                onClick={() => {
                  onEditModeTask(task.id);
                }}
              >
                <svg className="tasks__btn-icon tasks__btn-update">
                  <use href={`${svgSprite}#update`} />
                </svg>
              </button>
            )}

            <button
              className="tasks__btn btn"
              type="button"
              onClick={() => {
                onDelTaskItem(task.id);
              }}
            >
              <svg className="tasks__btn-icon">
                <use href={`${svgSprite}#remove`} />
              </svg>
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
