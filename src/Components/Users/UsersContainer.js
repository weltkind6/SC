import React from 'react'
import {connect} from "react-redux";
import {
    followActionCreator,
    setCurrentPageActionCreator,
    setUsersActionCreator,
    unFollowActionCreator
} from "../../Redux/usersReducer";
import axios from "axios";
import Users from "./Users";

class UsersAPI extends React.Component {


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
        return (
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                changePageHandler={this.changePageHandler}
                users={this.props.users}
                goUnfollow={this.props.goUnfollow}
                goFollow={this.props.goFollow}
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        users: state.usersPage.usersList,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
// хавает весь state целиком и возвращает только те данные, которые нужны
const mapDispatchToProps = dispatch => {
   return {
       goFollow: userId => {
           dispatch(followActionCreator(userId))
       },
       goUnfollow: userId => {
           dispatch(unFollowActionCreator(userId))
       },
       setUsers: usersList => {
           dispatch(setUsersActionCreator(usersList))
       },
       setCurrentPage: pageNumber => {
           dispatch(setCurrentPageActionCreator(pageNumber))
       }
   }
}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPI)


export default UsersContainer
