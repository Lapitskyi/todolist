import { TodoActionTypes } from './types';

export const addNewTask = (payload: string) => ({ type: TodoActionTypes.ADD_NEW_TASK, payload });
export const delTaskItem = (payload: number) => ({ type: TodoActionTypes.DEL_TASK_ITEM, payload });
export const checkBoxOnChange = (payload: number) => ({ type: TodoActionTypes.CHECKBOX_ON_CHANGE, payload });

export const updateTaskText = (id: number, textTask: string) => (
  { type: TodoActionTypes.UPDATE_TASK_TEXT, payload: { id, textTask } });
export const editModeTask = (payload: number) => ({ type: TodoActionTypes.EDIT_MODE_TASK, payload });
