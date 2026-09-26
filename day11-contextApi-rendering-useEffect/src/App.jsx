import React, { useEffect, useState } from 'react'
import FetchApis from './components/FetchApis'


const App = () => {



const [toggle, setToggle] = useState(true)
const [count, setCount] = useState(0)
    const [name, setName] = useState("vimal")
  



  return (
    <div>
      {/* <h1>this is the {count}</h1>
      <button onClick={()=> setCount(count +1)}>increase</button>
      <button onClick={()=> setToggle(prev => !prev)} >change toggle state</button>
      
      {
        toggle ? <Hero/> : <About  />
      }
      <Contact/> */}

      <FetchApis />
    </div>
  )
}

export default App