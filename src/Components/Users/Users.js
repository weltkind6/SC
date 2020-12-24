import React from 'react'
import classes from "./Users.module.css";
import mage from "../../img/mage.png";
import {NavLink} from "react-router-dom";
import * as axios from 'axios'


const Users = (props) => {
    const pagesCount = Math.ceil(props.totalUserCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div className={classes.users_wrapper}>
            <div className={classes.pages_block}>
                {pages.map((p) => {
                    return <span className={props.currentPage === p && classes.active}
                                 onClick={(e) => {
                                     props.onPageChanged(p)
                                 }}>{p}</span>
                })}
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
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {withCredentials: true,
                                    headers: {
                                        "API-KEY": 'b4110b74-b2e7-4e00-8d77-c68abf0971bc'
                                    }})
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.unfollow(u.id)
                                        }

                                    })
                            }}>UnFollow</button> :
                            <button className={classes.user_button} onClick={() => {
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {withCredentials: true,
                                headers: {
                                    "API-KEY": 'b4110b74-b2e7-4e00-8d77-c68abf0971bc'
                                }})
                                    .then(response => {
                                        if (response.data.resultCode === 0) {
                                            props.follow(u.id)
                                        }

                                })

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