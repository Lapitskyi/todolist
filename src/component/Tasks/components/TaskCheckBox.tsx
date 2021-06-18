import React, {FC} from 'react';
import '../scss/TaskList.scss';

interface TaskCheckBoxProps {
  id: number,
  done: boolean,
  onCheckBoxOnChange: (id:number) => void
}
const TaskCheckBox: FC<TaskCheckBoxProps> = ({ id, done, onCheckBoxOnChange }) => {
  return (
    <label className="tasks__list-checkbox" htmlFor="flag">
      <input
        className="checkbox__input"
        id="flag"
        type="checkbox"
        checked={done}
        onChange={() => onCheckBoxOnChange(id)}
      />
    </label>
  );
};

export default TaskCheckBox;
