import React from 'react'
import mage from '../../img/mage.png'
import classes from './Users.module.css'
import * as axios from 'axios'

class Users extends React.Component {

    componentDidMount() { // Метод componentDidMount() запускается после того, как компонент отрендерился
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }


    render() {
        const pagesCount = Math.ceil(this.props.totalUserCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return (
            <div className={classes.users_wrapper}>
                <div>
                    {pages.map((p) =>  <span onClick={() => {this.props.setCurrentPage(p)}} className={this.props.currentPage === p && classes.active}>{p}</span>)}
                </div>
                {this.props.users.map(u => <div key={u.id}>
                    <div className={classes.users_block}>
                        <div><img alt='' src={u.photos.small != null ? u.photos.small : mage}
                                  className={classes.avatar}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button className={classes.user_button} onClick={() => {
                                    this.props.unfollow(u.id)
                                }}>UnFollow</button> :
                                <button className={classes.user_button} onClick={() => {
                                    this.props.follow(u.id)
                                }}>Follow</button>}
                        </div>
                    </div>
                    <div>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </div>
                </div>)}
            </div>
        )
    }
}

export default Users