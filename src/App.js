import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './actions/counter'

function App () {
  const counter = useSelector(state => state)
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Counter:{counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  )
}

export default App
