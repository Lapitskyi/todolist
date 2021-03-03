const ADD_TASK_TEXT = 'ADD_TASK_TEXT';
const ADD_NEW_TASK = 'ADD_NEW_TASK'
const EDIT_TASK_ITEM = 'EDIT_TASK_ITEM';
const DEL_TASK_ITEM = 'DEL_TASK_ITEM';


let initialState = {
    tasks: [
        {id: 1, text: "Первая задача", done: false},
        {id: 2, text: "Вторая задача", done: true},
        {id: 3, text: "Третья задача", done: false},
        {id: 4, text: "Четвертая задача", done: false},
    ],
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
            let textTask = state.newTaskText
            return {
                ...state,
                tasks: [...state.tasks, {id: 5, text: textTask, done: false}],
                newTaskText: ''
            }

        case  EDIT_TASK_ITEM:
            return {};

        case DEL_TASK_ITEM:
            return {
                ...state,
                tasks: [...state.tasks.filter(task => task.id !== action.id)]
            };

        default:
            return state;

    }
}


export const taskTextCreate = (text) => ({type: ADD_TASK_TEXT, text});
export const addNewTask = () => ({type: ADD_NEW_TASK});
export const delTaskItem = (id) => ({type: DEL_TASK_ITEM, id});



export const editTaskItem = (id) => ({type: EDIT_TASK_ITEM, id});


export default todoReducer;
