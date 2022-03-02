import { createStore } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension'


const initialState = [
    {
        id: Math.random(),
        text: "Kapik",
        isComplated: false
    },
    {
        id: Math.random(),
        text: "Kapik1",
        isComplated: false
    },
    {
        id: Math.random(),
        text: "Kapik2",
        isComplated: false
    },
]

const todoList = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return (
                [...state, action.payload]
            )
        case "DELETE_TODO":
            return (
                state.filter((e) => e.id !== action.payload)
            )
        case "SET_CHECK":
            state.map((e)=>{
                if(e.id === action.payload.id){
                    e.isComplated = true
                }
            })
            return [...state]



        case "DELETE_COMPLETED":

            return state.filter((e) => e.isComplated !== true)
        default:
            return state
    }
}

const store = createStore(todoList, composeWithDevTools())

export default store






