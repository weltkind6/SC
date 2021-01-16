import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Siderbar/Sidebar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import Friends from "./Components/Friends/Friends";
import Music from "./Components/Music/Music";
import DialogsContainer from "./Components/Dialogs/DialogsContaner";


const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Sidebar/>
            <div className='main-wrapper'>
                <Route path='/profile'
                       render={() => <Profile store={props.store}/>}/>
                <Route path='/messages'
                       render={() => <DialogsContainer store={props.store}/>}/>
                <Route path='/friends' render={() => <Friends state={props.appState}/>}/>
                <Route path='/music' render={() => <Music/>}/>
            </div>
        </div>
    );
}

export default App;
