const ADD_BUG = 'ADD-BUG'
const CHANGE_NEW_BUG = 'CHANGE-NEW-BUG'
export const addNewBugActionCreator = () => ({type: ADD_BUG})
export const changeNewBugActionCreator = text => ({type: CHANGE_NEW_BUG, text})

const initialState = {
    bugsList: [
        {name: 'Koloradskiy', id: 1},
        {name: 'Mayskiy', id: 2},
        {name: 'Navozniy', id: 3},
    ],
    newBugName: 'Nosorogue'
}


const bugsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BUG: {
            const newBug = {
                name: state.newBugName,
                id: 4
            }
            const stateCopy = {...state}
            stateCopy.bugsList = [...state.bugsList, newBug]
            //stateCopy.bugsList.push(newBug)
            stateCopy.newBugName = ''
            return stateCopy
        }
        case CHANGE_NEW_BUG: {
            const stateCopy = {...state}
            stateCopy.bugsList = [...state.bugsList]
            stateCopy.newBugName = action.text
            return stateCopy
        }
        default: return state
    }
}

export default bugsReducer
