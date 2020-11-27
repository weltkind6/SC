import React from 'react'
import MyPosts from "./Myposts/Myposts";
import ProfileInfo from "./Profileinfo/Profileinfo";
import classes from './Profile.module.css'

const Profile = (props) => {
    return (
        <div className={classes.profile_wrapper}>
            <ProfileInfo/>
            <MyPosts postData={props.profPage.postData} newPostText={props.profPage.newPostText} dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile