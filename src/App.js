import './App.css';
import React from 'react'
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Siderbar/Sidebar";
import Profile from "./Components/Profile/Profile";
import Friends from "./Components/Friends/Friends";
import Music from "./Components/Music/Music";
import DialogsContainer from "./Components/Dialogs/DialogsContaner";
import BugsContainer from "./Components/Bugs/BugsContainer";


const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Sidebar/>
            <div className='main-wrapper'>
                <Route path='/profile'
                       render={() => <Profile/>}/>
                <Route path='/messages'
                       render={() => <DialogsContainer/>}/>
                <Route path='/friends' render={() => <Friends/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/bugs' render={() => <BugsContainer/>}/>
            </div>
        </div>
    );
}

export default App;
