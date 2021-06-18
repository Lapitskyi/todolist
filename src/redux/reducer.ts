import { TodoAction, TodoActionTypes, TodoState } from './types';

const initialState: TodoState = {
  tasks: []
};

const reducer = (state = initialState, action: TodoAction): TodoState => {
  switch (action.type) {
    case TodoActionTypes.ADD_NEW_TASK:
      return {
        ...state,
        tasks: [...state.tasks, {
          id: Date.now(), text: action.payload, done: false, editMode: false
        }],
      };

    case TodoActionTypes.EDIT_MODE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload) {
            return { ...task, editMode: !task.editMode };
          }
          return task;
        })
      };

    case TodoActionTypes.UPDATE_TASK_TEXT: {
      const { id, textTask } = action.payload;
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === id) {
            return { ...task, text: textTask };
          }
          return task;
        })
      };
    }

    case TodoActionTypes.DEL_TASK_ITEM:
      return {
        ...state,
        tasks: [...state.tasks.filter((task) => task.id !== action.payload)]
      };

    case TodoActionTypes.CHECKBOX_ON_CHANGE:
      return {
        ...state,
        tasks: state.tasks.map((task) => {
          if (task.id === action.payload) {
            return { ...task, done: !task.done };
          }
          return task;
        })
      };

    default:
      return state;
  }
};

export default reducer;
