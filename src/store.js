import { createStore } from "redux"

const initialState = [
    {
        id: Math.random(),
        text: "Kapik",
        isComplated: false
    }
]

const todoList = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return (
                [...state, action.payload]
            )
        case "DELETE_TODO":
            return (
                state.filter((e) => e.id !== action.payload.id)
            )
        case "SET_CHECK":
            if (state.isComplated == false) {
                return [...state, { isComplated: action.payload }]
            }
        case "DELETE_COMPLETED":
            return state.filter((e) => e.isComplated == false)
        default:
            return state
    }
}

const store = createStore(todoList)

export default store






