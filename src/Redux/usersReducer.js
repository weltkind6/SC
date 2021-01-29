const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'

export const followActionCreator = () => ({type: FOLLOW})
export const unFollowActionCreator = () => ({type: UNFOLLOW})

const initialState = {
    bugsList: [
        {follow: true, fullName: 'Dmitriy', id: 1, status: 'Boss', location: {city: 'Minsk', country: 'Belarus'}},
        {follow: true, fullName: 'Katuha', id: 2, status: 'Friend', location: {city: 'Moscow', country: 'Russia'}},
        {follow: false, fullName: 'Artyom', id: 3, status: 'Worker', location: {city: 'Prague', country: 'Czech-Republic'}},
        {follow: true, fullName: 'Vikky', id: 4, status: 'Driver', location: {city: 'Paris', country: 'France'}},
        {follow: false, fullName: 'Santey', id: 5, status: 'Director', location: {city: 'Geneva', country: 'Switzerland '}},
    ],

}


const bugsReducer = (state = initialState, action) => {
    switch (action.type) {

        default: return state
    }
}

export default bugsReducer
