import React from 'react'
import classes from "./Users.module.css";
import noava from "../../img/noava.svg";
import {NavLink} from "react-router-dom";
import axios from "axios";


const Users = props => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {pages.map(p =>
                <span className={props.currentPage === p
                    ? classes.selectedPage
                    : ''}
                      onClick={(e) => props.changePageHandler(p)}
                >{p}
                    </span>)}
            <div>
                {props.users.map(u =>
                    <div>
                        <div>{u.name}</div>
                        <div>{u.id}</div>
                        <NavLink to={'profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : noava} alt="" className={classes.avatar}/>
                        </NavLink>
                        <div>
                            {u.followed
                                ? <button onClick={() => {

                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "cb31ddc1-309a-457d-8004-8b6b8183c6de"
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.goUnFollow(u.id);
                                            }
                                        });



                                }}>unFollow</button>
                                : <button onClick={() => {

                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                        withCredentials: true,
                                        headers: {
                                            "API-KEY": "cb31ddc1-309a-457d-8004-8b6b8183c6de"
                                        }
                                    })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.goFollow(u.id);
                                                console.log('Hello!')
                                            }
                                        });


                                }}>Follow</button>}

                        </div>
                    </div>)}
            </div>
        </div>
    );

}

export default Users