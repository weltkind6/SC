import React from 'react'
import classes from './Myposts.module.css'
import PostMessage from "./PostMessage/PostMessage";

const MyPosts = (props) => {
    let postsElements = props.postData.map(p => <PostMessage message={p.post} id={p.id} likesCount={p.likesCount}/>)
    
    return (
        <div>
            <h3>My posts</h3>
            <div className={classes.post_block}>
                <div><textarea name="posts" id="txtarea" cols="30" rows="10"/></div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    )
}



export default MyPosts