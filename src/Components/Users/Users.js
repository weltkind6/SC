import React from 'react'
import mage from '../../img/mage.png'
import classes from './Users.module.css'
import * as axios from 'axios'


const Users = (props) => {

    let gertUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                debugger
                props.setUsers(response.data.items)
            })
        }
    }

    return (
        <div>
            <button onClick={gertUsers}>Get users</button>
            {props.users.map(u => <div key={u.id}>
                <div>
                    <div><img src={u.photos.small != null ? u.photos.small : mage} className={classes.avatar}/></div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>UnFollow</button> :
                            <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}
                    </div>
                </div>
                <div>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                    <div>{}</div>
                    <div>{}</div>
                </div>
            </div>)}
        </div>
    )
}

export default Users