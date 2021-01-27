import React from 'react'
import classes from './Sidebar.module.css'
import {NavLink} from "react-router-dom";
import ava5 from "../../img/chika.jpg";
import ava4 from '../../img/enot.jpg'
import ava3 from '../../img/blue.jpg'

const Sidebar = (props) => {


    return (
        <div className={classes.sidebar}>
            <div className={classes.side_item}><NavLink to='/profile' className={classes.nav_item}>Profile</NavLink>
            </div>
            <div className={classes.side_item}>
                <NavLink to='/messages' className={classes.nav_item}>Messages</NavLink>
            </div>
            <div className={classes.side_item}>
                <NavLink to='/news' className={classes.nav_item}>News</NavLink></div>
            <div className={classes.side_item}>
                <NavLink to='/music' className={classes.nav_item}>Music</NavLink></div>
            <div className={classes.side_item}>
                <NavLink to='/settings' className={classes.nav_item}>Settings</NavLink>
            </div>
            <div className={classes.side_item}>
                <NavLink to='/bugs' className={classes.nav_item}>Bugs</NavLink>
            </div>

        </div>
    )
}

export default Sidebar