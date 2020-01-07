import { combineReducers } from 'redux'

// reducers 
import usersReducer from './users/usersReducer'
import postsReducer from './posts/postsReducer'

// create rootReducer
const rootReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer
})

export default rootReducer