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

interface AddNewTaskAction {
  type: TodoActionTypes.ADD_NEW_TASK,
  payload: string
}

interface EditModeTaskAction {
  type: TodoActionTypes.EDIT_MODE_TASK,
  payload: number
}

interface UpdateTaskTextAction {
  type: TodoActionTypes.UPDATE_TASK_TEXT,
  payload: {
    id: number
    textTask: string
  }
}

interface DelTaskItemAction {
  type: TodoActionTypes.DEL_TASK_ITEM,
  payload: number
}

interface CheckBoxOnChangeAction {
  type: TodoActionTypes.CHECKBOX_ON_CHANGE,
  payload: number
}

export type TodoAction =
  AddNewTaskAction
  | EditModeTaskAction
  | UpdateTaskTextAction
  | DelTaskItemAction
  | CheckBoxOnChangeAction;
