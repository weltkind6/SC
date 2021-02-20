const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'

export const followActionCreator = userID => ({type: FOLLOW, userID})
export const unFollowActionCreator = userID => ({type: UNFOLLOW, userID})
export const setUsersActionCreator = usersList => ({type: SET_USERS, usersList})
export const setCurrentPageActionCreator = currentPage => ({type: SET_CURRENT_PAGE, currentPage})

const initialState = {
    usersList: [],
    pageSize: 5,
    totalUsersCount: 36,
    currentPage: 4

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



        default:
            return state
    }
}

export default usersReducer
