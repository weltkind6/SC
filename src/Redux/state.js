import classes from "../Components/Dialogs/Dialogs.module.css";
import ava1 from '../img/ava1.png'
import ava2 from '../img/freckle.png'
import ava3 from '../img/blue.jpg'
import ava4 from '../img/enot.jpg'
import ava5 from '../img/chika.jpg'

export const addPostActionCreator = () => {
    return {
        type: 'ADD-POST'
    }
}
export const changePostActionCreator = (text) => {
    return {
        type: 'CHANGE-NEW-POST', newText: text
    }
}

const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST = 'CHANGE-NEW-POST';

export const actionMessageCreator = () => {
    return {
        type: 'ADD-MESSAGE'
    }
}
export const actionChangeMessageCreator = (text) => {
    return {
        type: 'CHANGE-NEW-MESSAGE', newMessage: text
    }
}

const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_NEW_MESSAGE = 'CHANGE-NEW-MESSAGE';

let store = {
    _callSubscriber() {
    },
    _state: {
        profilePage: {
            postData: [
                {id: 1, post: 'Hello! This is my first post!', likesCount: '12'},
                {id: 2, post: 'Hello! This is my second post!', likesCount: '13'},
                {id: 3, post: 'Hello! This is my third post!', likesCount: '14'},
                {id: 4, post: 'Hello! This is my four post!', likesCount: '15'},
                {id: 5, post: 'Hello! This is my fifth post!', likesCount: '18'},
            ],
            newPostText: ''

        },
        messagePage: {
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
        },
        friendz: [
            {id: 1, name: 'Curly', ava: <img src={ava5} alt="avatar" className={classes.ava}/>},
            {id: 1, name: 'Kolyan', ava: <img src={ava3} alt="avatar" className={classes.ava}/>},
            {id: 1, name: 'Alex', ava: <img src={ava4} alt="avatar" className={classes.ava}/>},
        ]
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 1,
                post: this._state.profilePage.newPostText,
                likesCount: '3'
            }
            this._state.profilePage.postData.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state)
        } else {

            if (action.type === CHANGE_NEW_POST) {
                this._state.profilePage.newPostText = action.newText
                this._callSubscriber(this._state)
            } else {

                if (action.type === ADD_MESSAGE) {
                                let newMess = {
                                    id: '6',
                                    message: this._state.messagePage.newMessageBody,
                                }
                                this._state.messagePage.messages.push(newMess)
                                this._state.messagePage.newMessageBody = ''
                                this._callSubscriber(this._state)
                            } else {
                    if (action.type === CHANGE_NEW_MESSAGE) {
                                                    this._state.messagePage.newMessageBody = action.newMessage
                                                    this._callSubscriber(this._state)
                                                }
                }
            }
        }
    }

}


export default store

