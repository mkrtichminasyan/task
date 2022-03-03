import { DELETE_TODO, ADD_TODO, SET_CHECK, DELETE_COMPLETED } from './types'

const initialState = {
    toDoList: [
        {
            id: Math.random(),
            text: "Kapik",
            isComplated: false
        }
    ]
}

const todoList = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                toDoList: [...state.toDoList, action.payload]
            }
        case DELETE_TODO:
            const newList = state.toDoList.filter((e) => e.id !== action.payload)
            return {
                ...state,
                toDoList: newList
            }
        case SET_CHECK:
            return {
                ...state,
                toDoList: action.payload
            }
        case DELETE_COMPLETED:
            const newList2 = state.toDoList.filter((e) => !e.isComplated)
            return {
                ...state,
                toDoList: newList2
            }
        default:
            return state
    }
}

export default todoList