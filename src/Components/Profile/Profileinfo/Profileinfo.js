import React from 'react'


const  Profileinfo = props => {
    return (
        <div>
            <div>{props.profile.aboutMe}</div>
            <img src={props.profile.photos.small}/>
            <div>Ava + desc</div>
        </div>
    )
}

export default Profileinfo