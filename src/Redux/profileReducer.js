const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST = 'CHANGE-NEW-POST';


const profileReducer = (state, action) => {
    if (action.type === ADD_POST) {
        let newPost = {
            id: 1,
            post: state.newPostText,
            likesCount: '3'
        }
        state.postData.push(newPost)
        state.newPostText = ''
    } else {

        if (action.type === CHANGE_NEW_POST) {
            state.newPostText = action.newText
        }
    }
    return state
}
export default profileReducer
export const addPostActionCreator = () => ({type: 'ADD-POST'})
export const changePostActionCreator = (text) => ({type: 'CHANGE-NEW-POST', newText: text})