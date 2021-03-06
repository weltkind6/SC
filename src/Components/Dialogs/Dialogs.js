import React from 'react'
import classes from './Dialogs.module.css'
import Messages from "./Messages/Messages";
import Dialogsitem from "./DialogsItem/Dialogsitem";



const Dialogs = (props) => {
    let state = props.messagePage
    let dialogsElements = state.dialogsData.map(d =>
        <div className={classes.user_block}>
            <Avatars ava={d.img}/>
            <Dialogsitem name={d.name} id={d.id} key={d.id}/>
        </div>)
    let messageContainer = state.messages.map(m => <div>
        <Messages message={m.message} id={m.id}/>
    </div>)
    let newMessageBody = state.newMessageBody

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