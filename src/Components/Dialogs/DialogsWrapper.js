import React from 'react'
import {actionChangeMessageCreator, actionMessageCreator} from "../../Redux/messageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";



/*const DialogsContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const addMessage = () => {
                        store.dispatch(actionMessageCreator())
                    }
                    const onMessageChange = (text) => {
                        store.dispatch(actionChangeMessageCreator(text))
                    }

                    return <Dialogs addMessage={addMessage} onMessageChange={onMessageChange}
                                    state={store.getState().messagePage}/>
                }
            }
        </StoreContext.Consumer>
    )
}*/
let mapState = (state) => {
    return {messagePage: state.messagePage}
}
let mapDispatch = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(actionMessageCreator())
        },
        onMessageChange: (text) => {
            dispatch(actionChangeMessageCreator(text))
        }
    }
}
const DialogsContainer = connect(mapState, mapDispatch)(Dialogs)

export default DialogsContainer