import './App.css';
import React from 'react'
import {Route} from "react-router-dom";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Siderbar/Sidebar";
import Friends from "./Components/Friends/Friends";
import Music from "./Components/Music/Music";
import DialogsContainer from "./Components/Dialogs/DialogsContaner";
import BugsContainer from "./Components/Bugs/BugsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profile/ProfileContaner";


const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Sidebar/>
            <div className='main-wrapper'>
                <Route path='/profile'
                       render={() => <ProfileContainer/>}/>
                <Route path='/messages'
                       render={() => <DialogsContainer/>}/>
                <Route path='/friends' render={() =>
                    <Friends/>}/>
                <Route path='/music' render={() =>
                    <Music/>}/>
                <Route path='/bugs' render={() =>
                    <BugsContainer/>}/>
                <Route path='/users' render={() =>
                    <UsersContainer/>}/>
            </div>
        </div>
    );
}

export default App;
