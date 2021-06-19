import React, { FC, useEffect } from 'react';
import useInput from '../../useHook/useInput';
import '../scss/TaskList.scss';
import CheckBoxForm from '../../component/CheckBoxForm/CheckBoxForm';

interface TaskItemProps {
  editMode: boolean,
  initialText: string,
  onUpdateTaskText: (id:number, val:string) => void,
  id: number,
  done: boolean,
  onCheckBoxOnChange: (id:number) => void
}
const TaskItem:FC<TaskItemProps> = ({
  editMode,
  done,
  onCheckBoxOnChange,
  initialText,
  onUpdateTaskText,
  id,
}) => {
  const { val, onChange } = useInput(initialText);
  useEffect(() => {
    onUpdateTaskText(id, val);
  }, [id, val]);

  return (
    <>
      <CheckBoxForm
        id={id}
        done={done}
        onCheckBoxOnChange={onCheckBoxOnChange}
      />

      <label className="tasks__list-label" htmlFor="task">
        {!editMode ? <div className="tasks__list-text">{val}</div>
          : (
            <textarea
              className="tasks__list-input"
              id="input"
              value={val}
              autoFocus
              onChange={onChange}
            />
          )}
      </label>
    </>
  );
};

export default TaskItem;
