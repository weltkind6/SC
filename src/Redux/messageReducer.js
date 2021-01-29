import ava1 from "../img/ava1.png";
import classes from "../Components/Dialogs/Dialogs.module.css";
import ava2 from "../img/freckle.png";
import ava3 from "../img/blue.jpg";
import ava4 from "../img/enot.jpg";
import ava5 from "../img/chika.jpg";

const ADD_MESSAGE = 'ADD-MESSAGE'
const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE-NEW-MESSAGE-TEXT'

export const addMessageActionCreator = () => ({type: 'ADD-MESSAGE'})
export const changeMessageActionCreator = text => ({type: 'CHANGE-NEW-MESSAGE-TEXT', text})

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

const messageReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            const newMess = {
                id: '6',
                message: state.newMessageBody,

            }
            // Создали объект, и сразу его вернули. Без переменной stateCopy
            return {
                ...state,
                messages: [...state.messages, newMess], //Добавляем аналогом push
                newMessageBody: ''
            }

        //stateCopy.messages.push(newMess)

        case CHANGE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageBody: action.text
            }

        default:
            return state
    }
}

export default messageReducer