import React, { useState } from 'react'
import Login from './components/Login'
import Register from './components/Register'
import UserCard from './components/UserCard'


const AuthPage = () => {

   const [users, setUsers] = useState([])
   console.log(users)


  const [toggle, setToggle] = useState(false)

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full bg-slate-950 p-4 sm:p-8 gap-6 items-center justify-center font-sans">
     {toggle ? (
      users.map((elem)=> <UserCard user={elem}/>)
     )
     : <Register setUser = {setUsers} setToggle = {setToggle} />}
    </div>
  )
}

export default AuthPage