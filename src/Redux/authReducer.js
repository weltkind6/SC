const SET_USER_DATA = 'SET-USER-DATA'

const authReducer = (state = initialState, action) => {
    switch (action.type) { // this data from action
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

const initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false
}


export const setAuthUserData = (userId, email, login) => ({type: 'SET-USER-DATA', data: {userId, email, login}})


export default authReducer