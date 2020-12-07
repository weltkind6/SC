import React from 'react'
import mage from '../../img/mage.png'
import classes from './Users.module.css'


const Users = (props) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                followed: false,
                fullName: 'Ilay',
                status: 'Have job',
                location: {city: 'Prague', country: 'Czech Republic'},
            },
            {
                id: 2,
                followed: true,
                fullName: 'Vasdyua',
                status: 'Freelance',
                location: {city: 'Moscow', country: 'Russia Federation'}
            },
            {id: 3, followed: true, fullName: 'Herojivs', status: 'Rester', location: {city: 'Stalingrad', country: 'USSR'}}

        ])
    }

    return (
        <div>
            {props.users.map(u => <div key={u.id}>
                <div>
                    <div><img src={mage} alt="mage" className={classes.avatar}/></div>
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
                    <div>{u.fullName}</div>
                    <div>{u.status}</div>
                    <div>{u.location.city}</div>
                    <div>{u.location.country}</div>
                </div>
            </div>)}
        </div>
    )
}

export default Users