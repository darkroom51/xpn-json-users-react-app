//import {startLoading, stopLoading} from './loading'

const FETCH_USERS = 'users/FETCH_USERS'

const setUsers = (users) => ({
    type: FETCH_USERS,
    users: users
})

export const fetchUsers = () => (dispatch, getState) => {
    setTimeout( // this is only to slowly show "Ładowanie..."
        () => fetch('http://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                dispatch(setUsers(data))
            })
            .catch(err => {
                console.log(err)
            })
        , 1000)
    //dispatch(setUsers(Object.entries(snapshot.val()) || {}))
}


const initialState = {
    usersData: null
}


export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS:
            return {
                ...state,
                usersData: action.users
            }
        default:
            return state
    }
}