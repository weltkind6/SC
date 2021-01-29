import React from 'react'
import {connect} from "react-redux";
import Users from "./Users";


const mapStateToProps = state => {

}
// хавает весь state целиком и возвращает только те данные, которые нужны
const mapDispatchToProps = dispatch => {

}


const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)


export default UsersContainer
