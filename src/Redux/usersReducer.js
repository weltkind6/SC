const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS'
const SET_PAGE = 'SET_PAGE'


const initialState = {
    users: [],
    pageSize: 5,
    totalUserCount: 20,
    currentPage: 1
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
        case SET_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        default:
            return state;
    }

}

export const followActionCreator = (userId) => ({type: 'FOLLOW', userId})
export const unFollowActionCreatorActionCreator = (userId) => ({type: 'UNFOLLOW', userId})
export const setUsersActionCreator = (users) => ({type: 'SET-USERS', users})
export const setCurrentPageActionCreator = (currentPage) => ({type: 'SET_PAGE', currentPage})
export default usersReducer

// Вместо создание нового объекта stateCopy можно сразу возвращать новый пустой {} внутри которого мы делаем зануление,
// копирование нужных Непримитивов и добавление новых постов. В зависиомсти от dispatch
