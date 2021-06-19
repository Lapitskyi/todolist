import React, { FC } from 'react';
import './scss/CheckBoxForm.scss';

interface CheckBoxFormTypeProps {
  id: number,
  done: boolean,
  onCheckBoxOnChange: (id:number) => void
}
const CheckBoxForm:FC<CheckBoxFormTypeProps> = ({
  id,
  done,
  onCheckBoxOnChange,
}) => (
  <label className="checkbox__label" htmlFor="checkbox">
    <input
      className="checkbox__input"
      id="checkbox"
      type="checkbox"
      checked={done}
      onChange={() => onCheckBoxOnChange(id)}
    />
  </label>
);

export default CheckBoxForm;
