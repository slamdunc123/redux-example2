import axios from 'axios'

import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE
} from './postsTypes'

// async action creator - returns a function by using the thunk middleware
// it does need to be pure and allowed to have side effects such as async calls
export const getPosts = () => {
  return (dispatch) => {
    dispatch(getPostsRequest) // dispatched before the api call - sets loading to true
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        const posts = res.data
        dispatch(getPostsSuccess(posts)) // dispatched if api call successful - passes in the list of successfully retrieved users and stores them in state
      })
      .catch(error => {
        const errMsg = error.message
        dispatch(getPostsFailure(errMsg)) // dispatched if api call failed - passes in the error message and store it in state
      })
  }
}

// sync action creator - returns an action
export const getPostsRequest = () => {
  return {
    type: GET_POSTS_REQUEST
  }
}

// sync action creator - returns an action
export const getPostsSuccess = (posts) => {
  return {
    type: GET_POSTS_SUCCESS,
    payload: posts
  }
}

// sync action creator - returns an action
export const getPostsFailure = (error) => {
  return {
    type: GET_POSTS_FAILURE,
    payload: error
  }
}
