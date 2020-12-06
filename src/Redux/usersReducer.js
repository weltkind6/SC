const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

const initialState = {
    users: [
        {
            id: 1,
            followed: false,
            fullName: 'Ilay',
            status: 'Have job',
            location: {city: 'Prague', country: 'Czech Republic'}
        },
        {
            id: 2,
            followed: true,
            fullName: 'Vasdyua',
            status: 'Freelance',
            location: {city: 'Moscow', country: 'Russia Federation'}
        },
        {id: 3, followed: true, fullName: 'Herojivs', status: 'Rester', location: {city: 'Stalingrad', country: 'USSR'}}
    ]
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return  {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return  {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }

    }
}
export default usersReducer
export const followActionCreator = (userId) => ({type: 'ADD-POST', userId})
export const unFollowActionCreatorActionCreator = (userId) => ({type: 'CHANGE-NEW-POST', userId})

// Вместо создание нового объекта stateCopy можно сразу возвращать новый пустой {} внутри которого мы делаем зануление,
// копирование нужных Непримитивов и добавление новых постов. В зависиомсти от dispatch
