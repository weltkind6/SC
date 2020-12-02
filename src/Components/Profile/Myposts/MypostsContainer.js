import React from 'react'
import {addPostActionCreator, changePostActionCreator} from "../../../Redux/profileReducer";
import MyPosts from "./Myposts";
import StoreContext from "../../../storeContext";


const MyPostsContainer = (props) => {

    //Post add
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    const state = store.getState().profilePage
                    const addPost = () => {
                        store.dispatch(addPostActionCreator())
                    }
                    const onPostChange = (text) => {
                        store.dispatch(changePostActionCreator(text))
                    }
                    return <MyPosts addPost={addPost} onPostChange={onPostChange} state={state}/>
                }
            }
        </StoreContext.Consumer>

    )


}


export default MyPostsContainer