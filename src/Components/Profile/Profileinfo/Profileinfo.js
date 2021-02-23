import React from 'react'


const  Profileinfo = props => {
    return (
        <div>
            <img src={props.profile.photos.large} alt=""/>
            <div>Ava + desc</div>
        </div>
    )
}

export default Profileinfo