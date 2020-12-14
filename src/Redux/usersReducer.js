const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS'
const SET_PAGE = 'SET_PAGE'
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT'


const initialState = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 3
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
            return {...state, users: action.users}
        }
        case SET_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_COUNT: {
            return {...state, totalUserCount: action.count}
        }
        default:
            return state;
    }

}

export const followActionCreator = (userId) => ({type: 'FOLLOW', userId})
export const unFollowActionCreatorActionCreator = (userId) => ({type: 'UNFOLLOW', userId})
export const setUsersActionCreator = (users) => ({type: 'SET-USERS', users})
export const setCurrentPageActionCreator = (currentPage) => ({type: 'SET_PAGE', currentPage})
export const setTotalUsersCountActionCreator = (totalUserCount) => ({type: 'SET-TOTAL-COUNT', count: totalUserCount})
// Можно вместо count в case totalUserCount зарядить, и тот тоже написать просто totalUserCount
export default usersReducer

// Вместо создание нового объекта stateCopy можно сразу возвращать новый пустой {} внутри которого мы делаем зануление,
// копирование нужных Непримитивов и добавление новых постов. В зависиомсти от dispatch
