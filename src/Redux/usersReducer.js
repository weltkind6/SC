const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

export const goFollow = userID => ({type: FOLLOW, userID})
export const goUnFollow = userID => ({type: UNFOLLOW, userID})
export const setUsers = usersList => ({type: SET_USERS, usersList})
export const setCurrentPage = currentPage => ({type: SET_CURRENT_PAGE, currentPage})
export const toggleIsLoading = isLoading => ({type: TOGGLE_IS_FETCHING, isLoading})


const initialState = {
    usersList: [],
    pageSize: 5,
    totalUsersCount: 1000,
    currentPage: 95,
    isLoading: false
}


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                usersList: state.usersList.map(u => {
                    if(u.id === action.userID) {
                        return {...u, follow: true}

                    }
                    return u
                })

            }
        case UNFOLLOW:
            return {
                ...state,
                usersList: state.usersList.map(u => {
                    if(u.id === action.userID) {
                        return {...u, follow: false}

                    }
                    return u
                })

            }
        case SET_USERS: {
            return { ...state, usersList: action.usersList }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage}
        }

        case TOGGLE_IS_FETCHING: {
            return {...state, isLoading: action.isLoading}
        }



        default:
            return state
    }
}

export default usersReducer
