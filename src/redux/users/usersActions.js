import axios from 'axios'

import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE
} from './usersTypes'

// async action creator - returns a function by using the thunk middleware
// it does need to be pure and allowed to have side effects such as async calls
export const getUsers = () => {
  return (dispatch) => {
    dispatch(getUsersRequest) // dispatched before the api call - sets loading to true
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        const users = res.data
        dispatch(getUsersSuccess(users)) // dispatched if api call successful - passes in the list of successfully retrieved users and stores them in state
      })
      .catch(error => {
        const errMsg = error.message
        dispatch(getUsersFailure(errMsg)) // dispatched if api call failed - passes in the error message and store it in state
      })
  }
}

// sync action creator - returns an action
export const getUsersRequest = () => {
  return {
    type: GET_USERS_REQUEST
  }
}

// sync action creator - returns an action
export const getUsersSuccess = (users) => {
  return {
    type: GET_USERS_SUCCESS,
    payload: users
  }
}

// sync action creator - returns an action
export const getUsersFailure = (error) => {
  return {
    type: GET_USERS_FAILURE,
    payload: error
  }
}


