import { createStore } from "redux"
import { devToolsEnhancer } from 'redux-devtools-extension'
import todoList from "./reducer"

const store = createStore(todoList, devToolsEnhancer())

export default store






