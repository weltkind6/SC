import React from 'react'

const Users = props => {
    return (
        <div>
            Users will be here i think !
            <div>
                {props.users.map(u =>
                    <div>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                        <div>{u.location.city}</div>
                        <div>
                            {u.follow ? <button onClick={() => props.goFollow(u.id)}>Follow</button> :
                                <button onClick={() => props.goUnfollow(u.id)}>Unfollow</button>}

                        </div>
                    </div>)}
            </div>
        </div>
    )
}

export default Users
