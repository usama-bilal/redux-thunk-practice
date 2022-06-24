import axios from 'axios'

export const GET_POSTS = 'GET_POSTS'
export const SET_POSTS = 'SET_POSTS'

export const getPosts = () => {
  return { type: GET_POSTS }
}

export const setPosts = posts => {
  return { type: SET_POSTS, posts }
}

export const fetchPosts = () => {
  return async function (dispatch) {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    )
    dispatch(setPosts(response.data))
  }
}
