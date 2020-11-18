import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Siderbar/Sidebar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import Friends from "./Components/Friends/Friends";
import Music from "./Components/Music/Music";


const App = (props) => {
    return (
            <div className='app-wrapper'>
                <Header/>
                <Sidebar/>
                <div className='main-wrapper'>
                    <Route path='/profile' render={() => <Profile profPage={props.appState.profilePage} addPost={props.addPost} changeNewPostText={props.changeNewPostText}/>}/>
                    <Route path='/messages' render={() => <Dialogs state={props.appState.messagePage}/>} />
                    <Route path='/friends' render={() => <Friends state={props.appState}/>} />
                    <Route path='/music' render={() => <Music/>}/>
                </div>
            </div>
    );
}

export default App;
