import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";
import usersReducer from "./usersReducer";

let reducers = combineReducers({profilePage: profileReducer, messagePage: messageReducer})

let store = createStore(reducers)

export default store

window.store = store