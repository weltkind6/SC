import React from 'react'
import MyPosts from "./Myposts";
import {addPostActionCreator, changePostActionCreator} from "../../../Redux/profileReducer";


const MyPostsContainer = (props) => {

    const state = props.store.getState()

    const addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }
    const changeNewPost = (text) => {
        props.store.dispatch(changePostActionCreator(text))
    }

    return (
        <div>
            <MyPosts addPost={addPost}
                     changeNewPost={changeNewPost}
                     newPostText={state.profilePage.newPostText}
                     postData={state.profilePage.postData}/>
        </div>
    )
}

//postData={props.profPage.postData} newPostText={props.profPage.newPostText}
//                      dispatch={props.dispatch}
export default MyPostsContainer