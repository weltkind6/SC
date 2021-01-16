import React from 'react'
import Dialogs from "./Dialogs";
import {addMessageActionCreator, changeMessageActionCreator} from "../../Redux/messageReducer";


const DialogsContainer = (props) => {
    const state = props.store.getState()
    const addMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }
    const onChangeMessage = (text) => {
        props.store.dispatch(changeMessageActionCreator(text))
    }


    return (
        <div>
            <Dialogs addMessage={addMessage}
                     messPage={state.messagePage}
                     onChangeMessage={onChangeMessage}/>
        </div>
    )
}
//messPage={props.appState.messagePage} dispatch={props.dispatch}
export default DialogsContainer