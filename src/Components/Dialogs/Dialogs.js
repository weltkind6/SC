import React from 'react'
import classes from './Dialogs.module.css'

import Messages from "./Messages/Messages";
import Dialogsitem from "./DialogsItem/Dialogsitem";

const Dialogs = (props) => {


    let dialogsElements = props.state.dialogsData.map(d =>
        <div className={classes.user_block}>
            <Avatars ava={d.img}/>
            <Dialogsitem name={d.name} id={d.id}/>
        </div>)

    let messageContainer = props.state.messages.map(m => <div>
        <Messages message={m.message} id={m.id}/>
        <textarea></textarea>
        <button>Send</button>
    </div>)

    return (
        <div>
            <div className={classes.dialogs_wrapper}>
                <div className={classes.users}>
                    {dialogsElements}
                </div>
                <div>
                    {messageContainer}
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