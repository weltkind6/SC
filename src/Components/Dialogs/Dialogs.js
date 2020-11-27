import React from 'react'
import classes from './Dialogs.module.css'
import Messages from "./Messages/Messages";
import Dialogsitem from "./DialogsItem/Dialogsitem";
import {actionChangeMessageCreator, actionMessageCreator} from "../../Redux/state";


const Dialogs = (props) => {
    let dialogsElements = props.messPage.dialogsData.map(d =>
        <div className={classes.user_block}>
            <Avatars ava={d.img}/>
            <Dialogsitem name={d.name} id={d.id}/>
        </div>)
    let messageContainer = props.messPage.messages.map(m => <div>
        <Messages message={m.message} id={m.id}/>
    </div>)
    // Functions for Redux
    let newMessage = React.createRef()
    let addMessage = () => {
        props.dispatch(actionMessageCreator())
    }
    let onMessageChange = () => {
        let text = newMessage.current.value
       props.dispatch(actionChangeMessageCreator(text))
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
                    <textarea onKeyDown={onPressEnter} ref={newMessage} onChange={onMessageChange} value={props.messPage.newMessageBody}/>
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