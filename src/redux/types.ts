export interface TodoState {
  tasks: any[]
}

export enum TodoActionTypes {
  ADD_NEW_TASK = 'ADD_NEW_TASK',
  UPDATE_TASK_TEXT = 'UPDATE_TASK_TEXT',
  EDIT_MODE_TASK = 'EDIT_MODE_TASK',
  DEL_TASK_ITEM = 'DEL_TASK_ITEM',
  CHECKBOX_ON_CHANGE = 'CHECKBOX_ON_CHANGE',
}

interface addNewTaskAction {
  type: TodoActionTypes.ADD_NEW_TASK,
  payload: string
}

interface editModeTaskAction {
  type: TodoActionTypes.EDIT_MODE_TASK,
  payload: number
}

interface updateTaskTextAction {
  type: TodoActionTypes.UPDATE_TASK_TEXT,
  payload: {
    id: number
    textTask: string
  }
}

interface delTaskItemAction {
  type: TodoActionTypes.DEL_TASK_ITEM,
  payload: number
}

interface checkBoxOnChangeAction {
  type: TodoActionTypes.CHECKBOX_ON_CHANGE,
  payload: number
}

export type TodoAction =
  addNewTaskAction
  | editModeTaskAction
  | updateTaskTextAction
  | delTaskItemAction
  | checkBoxOnChangeAction
