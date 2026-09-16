import React, { useState } from 'react'

const App = () => {

  const [Num, setNum] = useState(0)

  function count(){
    setNum(Num +1)
  }

  function back(){
    setNum(Num -1)
  }
  return (
    <div>
      <h1> the number is {Num}</h1>
      <button onClick={count}>increment</button>
      <button onClick={back}>
        descrement
      </button>
    </div>
  )
}

export default App