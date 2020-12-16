const ADD_POST = 'ADD-POST';
const CHANGE_NEW_POST = 'CHANGE-NEW-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE'

const initialState = {
    postData: [
        {id: 1, post: 'Hello! This is my first post!', likesCount: '12'},
        {id: 2, post: 'Hello! This is my second post!', likesCount: '13'},
        {id: 3, post: 'Hello! This is my third post!', likesCount: '14'},
        {id: 4, post: 'Hello! This is my four post!', likesCount: '15'},
        {id: 5, post: 'Hello! This is my fifth post!', likesCount: '18'},
    ],
    newPostText: '',
    /*profile: null*/

}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state, newPostText: '', postData: [...state.postData, {
                    id: 1,
                    post: state.newPostText,
                    likesCount: '3'
                }]
            }
        case CHANGE_NEW_POST:
            return {...state, newPostText: action.newText}
       /* case SET_USER_PROFILE:
            return {...state, profile: action.profile}*/
        default:
            return state
    }
}
export default profileReducer
export const addPostActionCreator = () => ({type: 'ADD-POST'})
export const changePostActionCreator = (text) => ({type: 'CHANGE-NEW-POST', newText: text})
/*export const setUserProfile = (profile) => ({type: 'SET_USER_PROFILE'}, profile)*/

// Вместо создание нового объекта stateCopy можно сразу возвращать новый пустой {} внутри которого мы делаем зануление,
// копирование нужных Непримитивов и добавление новых постов. В зависиомсти от dispatch
