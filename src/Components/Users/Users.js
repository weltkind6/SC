import React from 'react'
import axios from "axios"
import noava from '../../img/noava.svg'


const Users = props => {

    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items)
        })
    }

    return (
        <div>
            Users will be here i think !
            <div>
                {props.users.map(u =>
                    <div>
                        <div>{u.name}</div>
                        <div>{u.id}</div>
                        <img src={u.photos.small != null ? u.photos.small : noava} alt=""/>
                        <div>
                            {u.follow ?
                                <button onClick={() => props.goUnfollow(u.id)}>Unfollow</button> :
                                <button onClick={() => props.goFollow(u.id)}>Follow</button>}

                        </div>
                    </div>)}
            </div>
        </div>
    )
}

export default Users
