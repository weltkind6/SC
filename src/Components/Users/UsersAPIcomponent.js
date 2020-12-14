import React from 'react'
import * as axios from 'axios'
import Users from "./Users";

class UsersAPIcomponent extends React.Component {

    componentDidMount() { // Метод componentDidMount() запускается после того, как компонент отрендерился
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber) => {
        debugger
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return <Users currentPage={this.props.currentPage}
                      users={this.props.users}
                      unfollow={this.props.unfollow}
                      follow={this.props.follow}
                      totalUserCount={this.props.totalUserCount}
                      pageSize={this.props.pageSize}
                      onPageChanged={this.onPageChanged} // Так как это метод, то отдаем без props
        />
    }
}


export default UsersAPIcomponent