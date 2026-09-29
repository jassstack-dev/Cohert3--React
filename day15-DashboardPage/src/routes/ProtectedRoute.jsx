import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router'
import { MyStore } from '../context/AuthContext'

const ProtectedRoute = () => {

    const {loggedInUser} = useContext(MyStore)

    if(!loggedInUser){
        return <Navigate to={'/'} />
    }

   

  return <Outlet/>
}

export default ProtectedRoute