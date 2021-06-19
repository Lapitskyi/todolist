import React, { FC } from 'react';
import useInput from '../../useHook/useInput';

import './scss/Forms.scss';

interface TaskFormProps {
  onAddNewTask: (e: any, val: string) => void
}

const Forms: FC<TaskFormProps> = ({ onAddNewTask }) => {
  const { val, onChange, reset } = useInput('');

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
        onClick={(e) => {
          onAddNewTask(e, val);
          reset();
        }}
      >
        add
      </button>
    </form>
  );
};

export default Forms;
