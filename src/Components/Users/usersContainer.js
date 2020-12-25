import React from 'react'
import {connect} from "react-redux";
import {
    follow,
    setCurrentPage, setIsFetching, setTotalUsersCount,
    setUsers,
    unFollow
} from "../../Redux/usersReducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import {getUsers} from "../../API/api";

class UsersContainerComponent extends React.Component {

    componentDidMount() { // Метод componentDidMount() запускается после того, как компонент отрендерился. Монтажник короче
        this.props.setIsFetching(true)
        getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
            this.props.setIsFetching(false)
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.setUsers(data.items)
            this.props.setIsFetching(false)
        })
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users currentPage={this.props.currentPage}
                   users={this.props.users}
                   unfollow={this.props.unfollow}
                   follow={this.props.follow}
                   totalUserCount={this.props.totalUserCount}
                   pageSize={this.props.pageSize}
                   onPageChanged={this.onPageChanged} // Так как это метод, то отдаем без props
            />
        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}


let UsersContainer = connect(mapStateToProps, {
    follow: follow,
    unfollow: unFollow,
    setUsers: setUsers,
    setCurrentPage: setCurrentPage,
    setTotalUsersCount: setTotalUsersCount,
    setIsFetching: setIsFetching


})(UsersContainerComponent)

export default UsersContainer
// this calls pagination (on russian `pagincia`)