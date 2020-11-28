const ADD_MESSAGE = 'ADD-MESSAGE';
const CHANGE_NEW_MESSAGE = 'CHANGE-NEW-MESSAGE';

const messageReducer = (state, action) => {
    if (action.type === ADD_MESSAGE) {
        let newMess = {
            id: '6',
            message: state.newMessageBody,
        }
        state.messages.push(newMess)
        state.newMessageBody = ''
    } else {
        if (action.type === CHANGE_NEW_MESSAGE) {
            state.newMessageBody = action.newMessage
        }
    }
    return state
}

export const actionMessageCreator = () =>({type: 'ADD-MESSAGE'})
export const actionChangeMessageCreator = (text) => ({type: 'CHANGE-NEW-MESSAGE', newMessage: text})
export default messageReducer