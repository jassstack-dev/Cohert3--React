import React from 'react'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div>
        <h3>Navbar</h3>
        <Outlet/>
    </div>
  )
}

export default MainLayout