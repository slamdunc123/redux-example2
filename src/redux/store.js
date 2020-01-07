import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './rootReducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

// set initial state 
const initialState = {}

// set middleware 
const middleware = [
  thunk,
  logger
]

// create store 
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

export default store