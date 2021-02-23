const ADD_POST = 'ADD-POST'
const CHANGE_NEW_POST_TEXT = 'CHANGE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET-USER-PROFILE'

export const addPostActionCreator = () => ({type: ADD_POST})
export const changePostActionCreator = text => ({type: CHANGE_NEW_POST_TEXT, newText: text})
export const setUserProfile = profile => ({type: SET_USER_PROFILE, profile})

const initialState = {
    postData: [
        {id: 1, post: 'Hello! This is my first post!', likesCount: '12'},
        {id: 2, post: 'Hello! This is my second post!', likesCount: '13'},
        {id: 3, post: 'Hello! This is my third post!', likesCount: '14'},
        {id: 4, post: 'Hello! This is my four post!', likesCount: '15'},
        {id: 5, post: 'Hello! This is my fifth post!', likesCount: '18'},
    ],
    newPostText: '',
    profile: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: 1,
                post: state.newPostText,
                likesCount: '3'
            }
            return  {...state, postData: [...state.postData, newPost], newPostText: ''}
            // stateCopy.postData = [...state.postData, newPost]
            // stateCopy.newPostText = ''
            // return stateCopy;

        case CHANGE_NEW_POST_TEXT:
            return {...state, newPostText: action.newText}
            //stateCopy.newPostText = action.newText

        case SET_USER_PROFILE:
            return {...state, profile: action.profile}

        default:
            return state
    }
}

export default profileReducer