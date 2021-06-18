import React, {FC} from 'react';
import svgSprite from "../../assets/images/svgSprite.svg";

import '../scss/TaskList.scss';
import TaskItem from './TaskItem';
import Button from "../../component/Button/Button";
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
             <Button
                 id={task.id}
                 onClickButton={onEditModeTask}
                 svgIcon={`${svgSprite}#edit`}
             />
            )}
            {task.editMode
            && (
            <Button
                id={task.id}
                onClickButton={onEditModeTask}
                svgIcon={`${svgSprite}#update`}
            />
            )}

           <Button
               id={task.id}
               onClickButton={onDelTaskItem}
               svgIcon={`${svgSprite}#remove`}
           />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
