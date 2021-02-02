import React from 'react'

const Users = props => {
    if (props.users.length === 0) {
        props.setUsers(
            [
                {follow: true, fullName: 'Dmitriy', id: 1, status: 'Boss', location: {city: 'Minsk', country: 'Belarus'}},
                {follow: true, fullName: 'Katuha', id: 2, status: 'Friend', location: {city: 'Moscow', country: 'Russia'}},
                {
                    follow: false,
                    fullName: 'Artyom',
                    id: 3,
                    status: 'Worker',
                    location: {city: 'Prague', country: 'Czech-Republic'}
                },
                {follow: true, fullName: 'Vikky', id: 4, status: 'Driver', location: {city: 'Paris', country: 'France'}},
                {
                    follow: false,
                    fullName: 'Santey',
                    id: 5,
                    status: 'Director',
                    location: {city: 'Geneva', country: 'Switzerland '}
                },
            ]
        )
    }

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
