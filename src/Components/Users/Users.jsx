import React from 'react'
import classes from "./Users.module.css";
import noava from "../../img/noava.svg";
import {NavLink} from "react-router-dom";


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
                            {u.follow ?
                                <button onClick={() => props.goUnFollow(u.id)}>Unfollow</button> :
                                <button onClick={() => props.goFollow(u.id)}>Follow</button>}

                        </div>
                    </div>)}
            </div>
        </div>
    );

}

export default Users