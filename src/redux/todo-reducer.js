const ADD_TASK_TEXT = 'ADD_TASK_TEXT';
const ADD_NEW_TASK = 'ADD_NEW_TASK'
const UPDATE_TASK_TEXT = 'UPDATE_TASK_TEXT';
const EDIT_MODE_TASK = 'EDIT_MODE_TASK';
const DEL_TASK_ITEM = 'DEL_TASK_ITEM';
const CHECKBOX_ON_CHANGE = 'CHECKBOX_ON_CHANGE';


let initialState = {
    tasks: [],
    newTaskText: ''
};


const todoReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_TASK_TEXT:
            return {
                ...state,
                newTaskText: action.text
            };

        case ADD_NEW_TASK:
            return {
                ...state,
                tasks: [...state.tasks, {id: Math.random(), text: state.newTaskText, done: false,editMode:false}],
                newTaskText: ''
            }

        case EDIT_MODE_TASK:
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    if (task.id === action.id) {
                        if (task.editMode === true) {
                            return {...task, editMode: false}
                        } else if (task.editMode === false) {
                            return {...task, editMode: true}
                        }
                    }
                    return task
                })
            }

        case  UPDATE_TASK_TEXT:
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    if (task.id === action.id) {
                        return {...task, text: action.taskText}
                    }
                    return task
                })
            };

        case DEL_TASK_ITEM:
            return {
                ...state,
                tasks: [...state.tasks.filter(task => task.id !== action.id)]
            };

        case CHECKBOX_ON_CHANGE:
            return {
                ...state,
                tasks: state.tasks.map(task => {
                    if (task.id === action.id) {
                        if (task.done === true) {
                            return {...task, done: false}
                        } else if (task.done === false) {
                            return {...task, done: true}
                        }
                    }
                    return task
                })
            }

        default:
            return state;

    }
}


export const taskTextCreate = (text) => ({type: ADD_TASK_TEXT, text});
export const addNewTask = () => ({type: ADD_NEW_TASK});
export const delTaskItem = (id) => ({type: DEL_TASK_ITEM, id});
export const checkBoxOnChange = (id) => ({type: CHECKBOX_ON_CHANGE, id});


export const updateTaskText = (taskText,id) => ({type: UPDATE_TASK_TEXT , taskText,id });
export const editModeTask = (id) =>({type:EDIT_MODE_TASK,id})

export default todoReducer;
