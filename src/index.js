import React from 'react';
import './index.css';
import state, {addNewMessage, addPost, changeNewMessageText, changeNewPostText, subscribe} from "./Redux/state";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import store from "./Redux/state";


const rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App appState={store.getState()} addPost={store.addPost.bind(store)} changeNewPostText={store.changeNewPostText.bind(store)}
                     addNewMessage={store.addNewMessage.bind(store)} changeNewMessageText={store.changeNewMessageText.bind(store)}/>
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

rerenderEntireTree(store.getState())
store.subscribe(rerenderEntireTree)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();







