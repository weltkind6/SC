import React from 'react'
import {addPostActionCreator, changePostActionCreator} from "../../../Redux/profileReducer";
import MyPosts from "./Myposts";
import {connect} from "react-redux";




let mapToState = (state) => {
    return {profilePage: state.profilePage}
}
let mapToDispatch = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        onPostChange: (text) => {
            dispatch(changePostActionCreator(text))
        }
    }
}
const MyPostsContainer = connect(mapToState, mapToDispatch)(MyPosts)


export default MyPostsContainer