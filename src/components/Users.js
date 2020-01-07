import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getUsers } from '../redux/users/usersActions'

// partials
// import User from './User'

const Users = ({ users, getUsers }) => {
  useEffect(() => {
    getUsers()
  }, [getUsers])
  console.log(users)
  return (
    <div>
      <h2>Users</h2>
      {
        users
        &&
        users.map((user, index) => (
          <div key={index}>{user.name}
          </div>
        ))
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    users: state.users.users // ref to rootReducer where users: usersReducer - usersReducer is the initialState within userReducer.js: loading, users, error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => dispatch(getUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)
