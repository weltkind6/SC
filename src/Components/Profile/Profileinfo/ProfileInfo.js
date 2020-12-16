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
                <div>{props.profile.lookingForAJobDescription}</div>
                <div>Ava + desc</div>
            </div>

        </div>
    )
}

export default ProfileInfo