import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from './actions/posts'

function App () {
  const posts = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  return (
    <div>
      {posts?.map(post => {
        return <h4 key={post.id}>Title: {post.title}</h4>
      })}
    </div>
  )
}

export default App
