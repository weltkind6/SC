import React from 'react'
import classes from './Headedr.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <div className={classes.header}>
            <div className={classes.login_block}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>
                    <span>Login</span>
                </NavLink>}
            </div>
        </div>
    )
}

export default Header