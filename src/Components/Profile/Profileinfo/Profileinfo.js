import React from 'react'


const  Profileinfo = props => {
    return (
        <div>
            <div>{props.profile.aboutMe}</div>
            {/*<img src={props.profile.photos.small} alt=""/>*/}
            <img src={props.profile.photos.large} alt=""/>
            <div>Ava + desc</div>
        </div>
    )
}

export default Profileinfo