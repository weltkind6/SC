import React from 'react'
import classes from './Messages.module.css'


const Messages = (props) => {
    return (<div className={classes.users_wrapper}>
        <div className={classes.users_message}>{props.message}</div>
    </div>)
}

export default Messages