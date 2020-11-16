import React from 'react'
import {NavLink} from "react-router-dom";
import classes from './Dialogsitem.module.css'



const Dialogsitem = (props) => {
    let path = '/messages/' + props.id
    return (
        <div>
            <div className={classes.block}>
                <NavLink to={path} className={classes.users_name}>{props.name}</NavLink>
            </div>
        </div>
    )
}

export default Dialogsitem

