import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";
import bugsReducer from "./bugsReducer";
import usersReducer from "./usersReducer";

const reducers = combineReducers({
    profilePage: profileReducer,
    messagePage: messageReducer,
    usersPage: usersReducer,
    bugsPage: bugsReducer})



const store = createStore(reducers)
window.store = store

export default store

