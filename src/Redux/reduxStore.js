import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";
import bugsReducer from "./bugsReducer";

const reducers = combineReducers({profilePage: profileReducer, messagePage: messageReducer, bugsPage: bugsReducer})

const store = createStore(reducers)

export default store