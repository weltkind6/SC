import React from 'react'
import Dialogs from "./Dialogs";
import {addMessageActionCreator, changeMessageActionCreator} from "../../Redux/messageReducer";
import StoreContext from "../../storeContext";


const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const addMessage = () => {
                        store.dispatch(addMessageActionCreator())
                    }
                    const onChangeMessage = (text) => {
                        store.dispatch(changeMessageActionCreator(text))
                    }
                    return <Dialogs addMessage={addMessage}
                                    messPage={store.getState().messagePage}
                                    onChangeMessage={onChangeMessage}/>

                }
            }
        </StoreContext.Consumer>

    )
}
//messPage={props.appState.messagePage} dispatch={props.dispatch}
export default DialogsContainer