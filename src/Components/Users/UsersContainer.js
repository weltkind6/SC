import React from 'react'
import {connect} from "react-redux";
import Users from "./Users";
import {
    followActionCreator,
    setCurrentPageActionCreator,
    setUsersActionCreator,
    unFollowActionCreator
} from "../../Redux/usersReducer";


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


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)


export default UsersContainer
