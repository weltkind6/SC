import React from 'react'
import axios from "axios"
import noava from '../../img/noava.svg'
import classes from './Users.module.css'


class Users extends React.Component {
    constructor(props) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items)
        })
    }

    render() {
        return (
            <div>
                Users will be here i think !
                <div>
                    {this.props.users.map(u =>
                        <div>
                            <div>{u.name}</div>
                            <div>{u.id}</div>
                            <img src={u.photos.small != null ? u.photos.small : noava} alt="" className={classes.avatar}/>
                            <div>
                                {u.follow ?
                                    <button onClick={() => this.props.goUnfollow(u.id)}>Unfollow</button> :
                                    <button onClick={() => this.props.goFollow(u.id)}>Follow</button>}

                            </div>
                        </div>)}
                </div>
            </div>
        );
    }
}

export default Users
