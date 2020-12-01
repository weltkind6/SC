import React from 'react'
import {addPostActionCreator, changePostActionCreator} from "../../../Redux/profileReducer";
import MyPosts from "./Myposts";



const MyPostsContainer = (props) => {
const state = props.store.getState().profilePage.postData
    //Post add
    let addPost = () => {
     props.store.dispatch(addPostActionCreator())
    }
    const onPostChange = (text) => {
        props.store.dispatch(changePostActionCreator(text))
    }

    return <MyPosts addPost={addPost} onPostChange={onPostChange} state={state}/>

}


export default MyPostsContainer