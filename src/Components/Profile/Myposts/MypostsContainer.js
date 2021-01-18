import React from 'react'
import MyPosts from "./Myposts";
import {addPostActionCreator, changePostActionCreator} from "../../../Redux/profileReducer";
import {connect} from "react-redux";




const mapStateToProps = state => {
    return {
        newPostText: state.profilePage.newPostText,
        postData: state.profilePage.postData
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        changeNewPost: text => {
            dispatch(changePostActionCreator(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer