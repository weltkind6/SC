import React from 'react'
import Dialogs from "./Dialogs";
import {addMessageActionCreator, changeMessageActionCreator} from "../../Redux/messageReducer";
import {connect} from "react-redux";


/*const DialogsContainer = () => {

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
}*/
const mapStateToProps = state => {
    return {
        messPage: state.messagePage
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addMessage: () => {
            dispatch(addMessageActionCreator())
        },
        onChangeMessage: text => {
           dispatch(changeMessageActionCreator(text))
        }
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer