import React from 'react'
import {addPostActionCreator, changePostActionCreator} from "../../../Redux/profileReducer";
import MyPosts from "./Myposts";
import {connect} from "react-redux";



/*const MyPostsContainer = (props) => {

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
                    return <MyPosts addPost={addPost} onPostChange={onPostChange} state={store.getState().profilePage}/>
                }
            }
        </StoreContext.Consumer>

    )
}*/
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