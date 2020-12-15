const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS'
const SET_PAGE = 'SET_PAGE'
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING'


const initialState = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 3,
    isFetching: true
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
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state;
    }

}

export const follow = (userId) => ({type: 'FOLLOW', userId})
export const unFollow = (userId) => ({type: 'UNFOLLOW', userId})
export const setUsers = (users) => ({type: 'SET-USERS', users})
export const setCurrentPage = (currentPage) => ({type: 'SET_PAGE', currentPage})
export const setTotalUsersCount = (totalUserCount) => ({type: 'SET-TOTAL-COUNT', count: totalUserCount})
export const setIsFetching = (isFetching) => ({type: 'TOGGLE-IS-FETCHING', isFetching})
// isFetching потому что Reducer достает action.isFetching

export default usersReducer

// Вместо создание нового объекта stateCopy можно сразу возвращать новый пустой {} внутри которого мы делаем зануление,
// копирование нужных Непримитивов и добавление новых постов. В зависиомсти от dispatch
