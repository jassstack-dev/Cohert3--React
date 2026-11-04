import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router'
import { store } from '../app/store'


const MainProtected = () => {

    const {isAuthenticated, user, isloading} = useSelector((store)=> store.auth)

    if(isloading) return <h1>Loading state....</h1>

    if(!user){
        return <Navigate to={'/'} />
    }

  return <Outlet/>
}

export default MainProtected