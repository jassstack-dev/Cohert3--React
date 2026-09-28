import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div className='flex justify-between  p-6 bg-[#212121] text-white'>
        <h1>logo</h1>
        <div className='flex justify-center gap-6 cursor-pointer'>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/about"}>about</NavLink>
            <NavLink to={"/contact"}>contact</NavLink>
        </div>
        <NavLink to={"/click-me"}>click me</NavLink>
    </div>
  )
}

export default Navbar