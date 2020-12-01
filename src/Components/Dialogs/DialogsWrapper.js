import React from 'react'
import {actionChangeMessageCreator, actionMessageCreator} from "../../Redux/messageReducer";
import Dialogs from "./Dialogs";



const DialogsContainer = (props) => {
    debugger
    let state = props.store.getState().messagePage


    // Functions for Redux
    let addMessage = () => {
        props.store.dispatch(actionMessageCreator())
    }
    let onMessageChange = (text) => {
       props.store.dispatch(actionChangeMessageCreator(text))
    }

    return <Dialogs addMessage={addMessage} onMessageChange={onMessageChange} newState={state}/>
}



export default DialogsContainer