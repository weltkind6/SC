import React from 'react'
import {connect} from "react-redux";
import Users from "./Users";
import {followActionCreator, setUsersActionCreator, unFollowActionCreatorActionCreator} from "../../Redux/usersReducer";


const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followActionCreator(userId))
        },
        unfollow: (userId) => {
            dispatch(unFollowActionCreatorActionCreator(userId))
        },

        setUsers: (users) => {
            dispatch(setUsersActionCreator(users));
        }
    }
}


let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer