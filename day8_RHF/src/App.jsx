import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Form from './components/Form'
import User from './components/User'


const App = () => {

  const [toggle, setToggle] = useState(true)
  const [Users, setUsers] = useState([])
  
  // console.log(Users)


   

  return (
    <div>
      <Navbar setToggle={setToggle}/>
     <div className='flex flex-wrap p-10'>
       {
        toggle ? <Form setToggle={setToggle} setUser={setUsers} /> : <User setToggle={setToggle} user={Users}/>
      }
     </div>
    </div>
  )
}

export default App