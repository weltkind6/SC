import ava1 from "../img/ava1.png";
import classes from "../Components/Dialogs/Dialogs.module.css";
import ava2 from "../img/freckle.png";
import ava3 from "../img/blue.jpg";
import ava4 from "../img/enot.jpg";
import ava5 from "../img/chika.jpg";

const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_NEW_MESSAGE = 'CHANGE-NEW-MESSAGE';
const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMess = {
                id: '6',
                message: state.newMessageBody,
            }
            state.messages.push(newMess)
            state.newMessageBody = ''
            break
        case CHANGE_NEW_MESSAGE:
            state.newMessageBody = action.newMessage
            break
        default:
            return state
    }
    return state
}


const initialState = {
    messages: [
        {id: 1, message: 'Hello guys! How its going?'},
        {id: 2, message: 'Hi! I am Ok.'},
        {id: 3, message: 'I want more money!'},
        {id: 4, message: 'I would rather to stay home\''},
        {id: 5, message: 'I am fine..'},
    ],
    newMessageBody: '',
    dialogsData: [
        {id: 1, name: 'Ilay', img: <img src={ava1} alt="avatar" className={classes.ava}/>},
        {id: 2, name: 'Curly', img: <img src={ava2} alt="avatar" className={classes.ava}/>},
        {id: 3, name: 'Vitalich', img: <img src={ava3} alt="avatar" className={classes.ava}/>},
        {id: 4, name: 'Ivych', img: <img src={ava4} alt="avatar" className={classes.ava}/>},
        {id: 5, name: 'Toryn', img: <img src={ava5} alt="avatar" className={classes.ava}/>},
    ]
}

export const actionMessageCreator = () => ({type: 'ADD-MESSAGE'})
export const actionChangeMessageCreator = (text) => ({type: 'CHANGE-NEW-MESSAGE', newMessage: text})
export default messageReducer