const ADD_POST = 'ADD-POST'
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT'

export const addMessageActionCreator = () => ({type: 'ADD-MESSAGE'})
export const changeMessageActionCreator = text => ({type: 'CHANGE-NEW-MESSAGE-TEXT', newMessageText: text})

const dialogsReducer = (state, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 1,
                post: state.newPostText,
                likesCount: '3'
            }
            state.postData.push(newPost)
            state.newPostText = ''
            break;
        case CHANGE_NEW_POST_TEXT:
            state.newPostText = action.newText
            break;
        default:
            return state
    }
    return state
}

export default dialogsReducer