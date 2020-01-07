import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE
} from './usersTypes'

const initialState = {
  loading: false,
  users: [],
  error: ''
}

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_REQUEST:
      return {
        ...state,
        loading: true
      }
    case GET_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: ''
      }
    case GET_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload
      }
    default:
      return state
  }
}

export default usersReducer