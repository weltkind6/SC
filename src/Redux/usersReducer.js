const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

export const followActionCreator = userID => ({type: FOLLOW, userID})
export const unFollowActionCreator = userID => ({type: UNFOLLOW, userID})
export const setUsersActionCreator = usersList => ({type: SET_USERS, usersList})

const initialState = {
    usersList: [

    ]

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
            return { ...state, usersList: [ ...state.usersList, ...action.usersList ]}
        }



        default:
            return state
    }
}

export default usersReducer
