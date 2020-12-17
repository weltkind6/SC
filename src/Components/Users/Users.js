import React from 'react'
import classes from "./Users.module.css";
import mage from "../../img/mage.png";
import {NavLink} from "react-router-dom";
import profileReducer from "../../Redux/profileReducer";

const Users = (props) => {
    const pagesCount = Math.ceil(props.totalUserCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div className={classes.users_wrapper}>
            <div className={classes.pages_block}>
                {pages.map((p) => <span onClick={() => {
                    props.onPageChanged(p)
                }} className={props.currentPage === p && classes.active}>{p}</span>)}
            </div>
            {props.users.map(u => <div key={u.id}>
                    <div className={classes.users_block}>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img alt='' src={u.photos.small != null ? u.photos.small : mage}
                                     className={classes.avatar}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button className={classes.user_button} onClick={() => {
                                    props.unfollow(u.id)
                                }}>UnFollow</button> :
                                <button className={classes.user_button} onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>}
                        </div>
                    </div>
                    <div>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </div>
                </div>)
            }</div>
    )
}


export default Users