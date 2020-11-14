import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Siderbar/Sidebar";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import Friends from "./Components/Friends/Friends";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Sidebar/>
                <div className='main-wrapper'>
                    <Route path='/profile' render={() => <Profile state={props.appState.profilePage}/>}/>
                    <Route path='/messages' render={() => <Dialogs state={props.appState.messagePage}/>} />
                    <Route path='/friends' render={() => <Friends state={props.appState}/>} />
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
