import React from 'react'
import Preloader from "../../Common/Preloader/Preloader";

const ProfileInfo = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    return (

        <div>
            <div>
                <img src={props.profile.photos.large} alt=""/>
                <div>
                    <span>Job: </span>
                    {props.profile.lookingForAJobDescription}
                </div>
                <div>
                    <span>Personal page: </span>
                    {props.profile.contacts.website}
                </div>
            </div>

        </div>
    )
}

export default ProfileInfo