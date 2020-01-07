import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../redux/posts/postsActions'

const Posts = ({ posts, getPosts }) => {
  useEffect(() => {
    getPosts()
  }, [getPosts])
  const [numPosts, setNumPosts] = useState(10)
  console.log(posts)
  return (
    <div>
      <h2>Posts</h2>
      <input type="text" value={numPosts} onChange={e => setNumPosts(e.target.value)} />
      {
        posts
        &&
        posts
          .filter((post, index) => index < numPosts)
          .map((post, index) => (
            <div key={index}>{post.title}</div>
          ))
      }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    posts: state.posts.posts // ref to rootReducer where posts: postsReducer - postsReducer is the initialState within postsReducer.js: loading, posts, error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getPosts: () => dispatch(getPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts)