const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST = 'CHANGE-NEW-POST';

const initialState = {
    postData: [
        {id: 1, post: 'Hello! This is my first post!', likesCount: '12'},
        {id: 2, post: 'Hello! This is my second post!', likesCount: '13'},
        {id: 3, post: 'Hello! This is my third post!', likesCount: '14'},
        {id: 4, post: 'Hello! This is my four post!', likesCount: '15'},
        {id: 5, post: 'Hello! This is my fifth post!', likesCount: '18'},
    ],
    newPostText: ''

}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 1,
                post: state.newPostText,
                likesCount: '3'
            }
            state.postData.push(newPost)
            state.newPostText = ''
            return state
        case CHANGE_NEW_POST:
            state.newPostText = action.newText
            return state
        default:
            return state
    }
}
export default profileReducer
export const addPostActionCreator = () => ({type: 'ADD-POST'})
export const changePostActionCreator = (text) => ({type: 'CHANGE-NEW-POST', newText: text})