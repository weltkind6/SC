import React from 'react'
import classes from "../Myposts.module.css";

const PostMessage = (props) => {
    return (
        <div>
            <div className={classes.post}>{props.message}</div>
        </div>
    )
}

export default PostMessage