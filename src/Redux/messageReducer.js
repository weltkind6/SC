const ADD_MESSAGE = 'ADD-MESSAGE'
const CHANGE_NEW_MESSAGE_TEXT = 'CHANGE-NEW-MESSAGE-TEXT'

export const addPostActionCreator = () => ({type: 'ADD-POST'})
export const changePostActionCreator = text => ({type: 'CHANGE-NEW-POST-TEXT', newText: text})

const messageReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMess = {
                id: '6',
                message: state.newMessageBody,
            }
            state.messages.push(newMess)
            state.newMessageBody = ''
            break;
        case CHANGE_NEW_MESSAGE_TEXT:
            state.newMessageBody = action.newMessageText
            break;
        default: return state
    }
    return state
}

export default messageReducer