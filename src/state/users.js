
const SET_NEW_USER = 'users/SET_NEW_USER'
const SET_UPDATED_USER = 'users/SET_UPDATED_USER'

const FETCH_USERS = 'users/FETCH_USERS'
const ADD_USER = 'users/ADD_USER'
const UPDATE_USER = 'users/UPDATE_USER'
const DELETE_USER = 'users/DELETE_USER'


// sync set users data to store from DB
const setUsers = (users) => ({
    type: FETCH_USERS,
    users: users
})

// set new user data to store from UI state
export const setNewUser = (newUser) => ({
    type: SET_NEW_USER,
    newUser: newUser
})

// set updated user data to store from UI state
export const setUpdatedUser = (updatedUser) => ({
    type: SET_UPDATED_USER,
    updatedUser: updatedUser
})

// sync post user data
const addUser = (msg) => ({
    type: ADD_USER,
    infoMsg: msg
})

// sync patch user data
const updateUser = (msg) => ({
    type: UPDATE_USER,
    infoMsg: msg
})

// sync delete user data
const removeUser = (msg) => ({
    type: DELETE_USER,
    infoMsg: msg
})


// async get users from DB
export const fetchUsers = () => (dispatch, getState) => {
    fetch('http://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                dispatch(setUsers(data))
            })
            .catch(err => {
                console.log(err)
            })
}

// async post new user to DB
export const postNewUser = () => (dispatch, getState) => {
    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify(getState().users.newUserData),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(json => console.log(json))
        .then(() => dispatch(addUser('User has been added successfully')))
}

// async patch updated user to DB
export const patchUser = (id) => (dispatch, getState) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(getState().users.updatedUserData),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then(response => response.json())
        .then(json => console.log(json))
        .then(() => dispatch(updateUser('User has been updated successfully')))
}

// async delete user from DB
export const deleteUser = (id) => (dispatch, getState) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`,
        {method: 'DELETE'})
        .then(response => response.json())
        .then(json => console.log(json))
        .then(() => dispatch(removeUser('User has been deleted successfully')))
}


const initialState = {
    usersData: null,
    newUserData:null,
    updatedUserData:null,
    infoMsg: null
}


export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS:
            return {
                ...state,
                usersData: action.users
            }
        case SET_NEW_USER:
            return {
                ...state,
                newUserData: action.newUser
            }
        case SET_UPDATED_USER:
            return {
                ...state,
                updatedUserData: action.updatedUser
            }
        case ADD_USER:
            return {
                ...state,
                infoMsg: action.infoMsg
            }
        case UPDATE_USER:
            return {
                ...state,
                infoMsg: action.infoMsg
            }
        case DELETE_USER:
            return {
                ...state,
                infoMsg: action.infoMsg
            }
        default:
            return state
    }
}