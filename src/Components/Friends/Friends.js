import React from 'react'
import classes from './Friends.module.css'

const Friends = (props) => {
    let friendsMassive = props.state.friendz.map(f => <FriendsItem friend={f.name} ava={f.ava}/>)

    return (
        <div className={classes.friends_wrapper}>
            <div>
                <h4>Friends online</h4>
                <div>{friendsMassive}</div>
            </div>
        </div>
    )
}

const FriendsItem = (props) => {
    return <div className={classes.wrapper}>
        <div>{props.ava}</div>
        <div className={classes.friend_name}>{props.friend}</div>
    </div>
}

export default Friends