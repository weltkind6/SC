import React from 'react'
import classes from './Dialogs.module.css'
import Messages from "./Messages/Messages";
import Dialogsitem from "./DialogsItem/Dialogsitem";
import {actionChangeMessageCreator, actionMessageCreator} from "../../Redux/messageReducer";



const Dialogs = (props) => {
    debugger

    let statement = props.newState


    let dialogsElements = statement.dialogsData.map(d =>
        <div className={classes.user_block}>
            <Avatars ava={d.img}/>
            <Dialogsitem name={d.name} id={d.id}/>
        </div>)
    let messageContainer = statement.messages.map(m => <div>
        <Messages message={m.message} id={m.id}/>
    </div>)
    let newMessageBody = statement.newMessageBody
    // Functions for Redux
    let addMessage = () => {
       props.addMessage()
    }
    let onMessageChange = (event) => {
        let text =  event.target.value
        props.onMessageChange(text)
    }
    const onPressEnter = e => {
        if(e.code === 'Enter') {
            addMessage()
        }
    }

    return (
        <div>
            <div className={classes.dialogs_wrapper}>
                <div className={classes.users}>
                    {dialogsElements}
                </div>
                <div>
                    {messageContainer}
                    <textarea onKeyDown={onPressEnter} onChange={onMessageChange} value={newMessageBody}/>
                    <button onClick={addMessage}>Send</button>
                </div>
            </div>
            <Messages/>
            <Dialogsitem/>
        </div>
    )
}

const Avatars = (props) => {
    return <div>{props.ava}</div>
}


// Переменная path для сокращения
// Так сливается путь и айдишник /messages/ + props.id


export default Dialogs