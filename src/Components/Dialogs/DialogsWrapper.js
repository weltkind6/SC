import React from 'react'
import {actionChangeMessageCreator, actionMessageCreator} from "../../Redux/messageReducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../storeContext";


const DialogsContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState().messagePage
                    const addMessage = () => {
                        store.dispatch(actionMessageCreator())
                    }
                    const onMessageChange = (text) => {
                        store.dispatch(actionChangeMessageCreator(text))
                    }

                    return <Dialogs addMessage={addMessage} onMessageChange={onMessageChange} newState={state}/>
                }
            }
        </StoreContext.Consumer>
    )
}


export default DialogsContainer