import React from 'react'
import MyPosts from "./Myposts";
import {addPostActionCreator, changePostActionCreator} from "../../../Redux/profileReducer";
import StoreContext from "../../../storeContext";


const MyPostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {
                (store) => {

                    const state = store.getState()
                    const addPost = () => {
                        store.dispatch(addPostActionCreator())
                    }
                    const changeNewPost = (text) => {
                        store.dispatch(changePostActionCreator(text))
                    }
                    return <MyPosts addPost={addPost}
                                    changeNewPost={changeNewPost}
                                    newPostText={state.profilePage.newPostText}
                                    postData={state.profilePage.postData}/>
                }
            }

        </StoreContext.Consumer>
    )
}

//postData={props.profPage.postData} newPostText={props.profPage.newPostText}
//                      dispatch={props.dispatch}
export default MyPostsContainer