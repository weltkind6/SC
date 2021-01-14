import {combineReducers, createStore} from "redux";
import profileReducer from "./profileReducer";
import messageReducer from "./messageReducer";

const reducers = combineReducers({profilePage: profileReducer, messagePage: messageReducer})

const store = createStore(reducers)

export default store