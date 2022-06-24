import { GET_POSTS, SET_POSTS } from '../actions/posts'

const postsReducer = (posts = null, action) => {
  switch (action.type) {
    case GET_POSTS:
      return posts
    case SET_POSTS:
      return action.posts
    default:
      return posts
  }
}

export default postsReducer
