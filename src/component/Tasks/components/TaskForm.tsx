import React, {FC} from 'react';

import '../scss/TaskForm.scss';
import useInput from '../../../useHook/useInput';
interface TaskFormProps {
    onAddNewTask: (e:any, val: string ) => void
}
const TaskForm:FC<TaskFormProps> = ({ onAddNewTask }) => {
  const { val, onChange } = useInput('');

  return (
    <form className="form">
      <label className="form__label" htmlFor="inp">
        <input
          className="form__input"
          id="inp"
          type="text"
          placeholder="add tasks"
          value={val}
          onChange={onChange}
        />
      </label>
      <button
        className="form__btn btn"
        type="submit"
        onClick={(e) => onAddNewTask(e, val)}
      >
        add
      </button>
    </form>
  );
};

export default TaskForm;
