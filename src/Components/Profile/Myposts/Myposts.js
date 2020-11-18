import React from 'react'
import classes from './Myposts.module.css'
import PostMessage from "./PostMessage/PostMessage";


const MyPosts = (props) => {
    let postsElements = props.postData.map(p => <PostMessage message={p.post} id={p.id} likesCount={p.likesCount}/>)
    let newPost = React.createRef()
    let addPost = () => {
        let text = newPost.current.value
        props.addPost(text)
    }
    const onKeyDown = e => {
        if (e.code === "Enter") {
            addPost()
        }
    }
    const onPostChange = () => {
        let text = newPost.current.value
        props.changeNewPostText(text)
    }
    return (
        <div>
            <h3>My posts</h3>
            <div className={classes.post_block}>
                <div><textarea onChange={onPostChange} ref={newPost} onKeyDown={onKeyDown} name="posts" id="txtarea" cols="20" rows="5"
                               value={props.newPostText}/></div>
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