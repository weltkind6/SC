import React from 'react'
import classes from './Dialogs.module.css'
import ava1 from '../../img/ava1.png'
import ava2 from '../../img/freckle.png'
import ava3 from '../../img/blue.jpg'
import Messages from "./Messages/Messages";
import Dialogsitem from "./DialogsItem/Dialogsitem";

const Dialogs = (props) => {


    let dialogsElements = props.state.dialogsData.map(d =>
        <div className={classes.user_block}>
            <img src={ava1} alt="avatar" className={classes.ava}/>
            <Dialogsitem name={d.name} id={d.id}/>
        </div>)

    let messageContainer = props.state.messages.map(m => <Messages message={m.message} id={m.id}/>)

    return (
        <div>
            <div className={classes.dialogs_wrapper}>
                <div className={classes.users}>
                    {dialogsElements}
                </div>
                <div className={classes.messages}>
                    {messageContainer}
                </div>
            </div>
            <Messages/>
            <Dialogsitem/>
        </div>
    )
}




// Переменная path для сокращения
// Так сливается путь и айдишник /messages/ + props.id

/*const Messages = (props) => {
    return <div className={classes.users_message}>{props.message}</div>
}*/

export default Dialogs