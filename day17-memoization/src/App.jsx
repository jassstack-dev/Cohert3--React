import React, { useEffect, useState } from 'react'
import Home from './components/Home'
import About from './components/About'

const App = () => {
  console.log('app rendering')

  const [count, setCount] = useState(0)
  function countInc(){
    return setCount(count+1)
  }


  return (
    <div>
      <h1>Memoization</h1>
      <p>count is {count}</p>
      <button onClick={countInc} >increase</button>
      <Home/>
      <About/>

    </div>
  )
}

export default App