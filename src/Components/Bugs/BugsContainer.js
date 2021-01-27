import React from 'react'
import {connect} from "react-redux";
import {addNewBugActionCreator, changeNewBugActionCreator} from "../../Redux/bugsReducer";
import Bugs from "./Bugs";


const mapStateToProps = state => {
   return {
       bugsList: state.bugsPage
   }
}
const mapDispatchToProps = dispatch => {
    return {
        addNewBug: () => {
            dispatch(addNewBugActionCreator())
        },
        changeNewBugArea: text => {
            dispatch(changeNewBugActionCreator(text))
        }

    }
}


const BugsContainer = connect(mapStateToProps, mapDispatchToProps)(Bugs)


export default BugsContainer