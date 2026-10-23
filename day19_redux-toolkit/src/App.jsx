import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './features/CounterSlices'

const App = () => {

  const dispatch = useDispatch()

  const {count} = useSelector((store)=> store.counter)

  return (
    <div>
      <h1>redux toolkil</h1>
      <p>count is {count}</p>
      <button onClick={()=> dispatch(increment())} >incremenet +</button>
      <button onClick={()=>dispatch(decrement())} >decrement -</button>
    </div>
  )
}

export default App