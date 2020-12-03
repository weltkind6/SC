import React from 'react'
import {actionChangeMessageCreator, actionMessageCreator} from "../../Redux/messageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

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