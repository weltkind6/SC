import React from 'react'
import ProfileInfo from "./Profileinfo/ProfileInfo";
import classes from './Profile.module.css'
import MyPostsContainer from "./Myposts/MypostsContainer";
import forest from '../../img/1.png'

const Profile = (props) => {
    return (
        <div className={classes.profile_wrapper}>
            <img src={forest} alt="forest" className={classes.profile_img}/>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile