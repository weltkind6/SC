import React from 'react'
import ProfileInfo from "./Profileinfo/Profileinfo";
import classes from './Profile.module.css'
import MyPostsContainer from "./Myposts/MypostsContainer";

const Profile = props => {
    return (
        <div className={classes.profile_wrapper}>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile