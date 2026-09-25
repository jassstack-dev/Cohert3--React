import React, { useState } from 'react'
import Users from './components/Users'
import Form from './components/Form'
import Navbar from './components/Navbar'

const App = () => {

     const [user, setUser] = useState(()=>{
      return JSON.parse(localStorage.getItem('user')) || []
      
     })

     console.log(user)

        function deleteUser(id){
      let filteredUser = user.filter((val,index)=>{
        return index !== id
      })

      // console.log(filteredUser)
      setUser(filteredUser)
      localStorage.setItem('user', JSON.stringify(filteredUser))

    }

    const [updated, setUpdated] = useState(null)
   
console.log('updated data-->', updated)

 
     
  

  const [toggle, setToggle] = useState(false)
  return (
    <div>
<Navbar setToggle={setToggle} />
{
  toggle ? <Form UpdatedData={updated} user={user} setUser={setUser} setToggle={setToggle} /> : <Users setUpdated={setUpdated} setToggle={setToggle} deleteUser={deleteUser} user={user} />
}
    </div>
  )
}

export default App