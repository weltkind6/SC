import React from 'react'
import classes from './Myposts.module.css'
import PostMessage from "./PostMessage/PostMessage";
import {addPostActionCreator, changePostActionCreator} from "../../../Redux/profileReducer";



const MyPosts = (props) => {
    let postsElements = props.postData.map(p => <PostMessage message={p.post} id={p.id} key={p.id} likesCount={p.likesCount}/>)
    //Post add
    let addPost = () => {
        props.addPost()
    }
    const onPostChange = (e) => {
        let text = e.target.value
        props.changeNewPost(text)
    }
    const onKeyDown = e => {
        if (e.code === "Enter") {
            addPost()
        }
    }
    return (
        <div>
            <h3>My posts</h3>
            <div className={classes.post_block}>
                <div><textarea value={props.newPostText} onChange={onPostChange} onKeyDown={onKeyDown}/></div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    )
}


export default MyPosts