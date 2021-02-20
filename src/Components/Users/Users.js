import React from 'react'
import axios from "axios"
import noava from '../../img/noava.svg'
import classes from './Users.module.css'


class Users extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage} &count=${this.props.pageSize}`)
            .then(response => {
            this.props.setUsers(response.data.items)
        })
    }
    changePageHandler = pageNumber => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber} &count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        let pagesCount =  Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }
        return (
            <div>
                {pages.map(p =>
                    <span className={this.props.currentPage === p
                        ? classes.selectedPage
                        : ''}
                          onClick={(e) => this.changePageHandler(p)}
                    >{p}
                    </span>)}
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
