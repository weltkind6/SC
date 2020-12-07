const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS'


const initialState = {
    users: [

    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state;
    }

}
export default usersReducer
export const followActionCreator = (userId) => ({type: 'FOLLOW', userId})
export const unFollowActionCreatorActionCreator = (userId) => ({type: 'UNFOLLOW', userId})
export const setUsersActionCreator = (users) => ({type: 'SET-USERS', users})

// Вместо создание нового объекта stateCopy можно сразу возвращать новый пустой {} внутри которого мы делаем зануление,
// копирование нужных Непримитивов и добавление новых постов. В зависиомсти от dispatch
