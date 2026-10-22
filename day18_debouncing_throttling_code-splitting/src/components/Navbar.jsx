import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div className='test'>
        <NavLink to={'/'}>
            Home
        </NavLink>
        <NavLink to={'/about'}>
            About
        </NavLink>
        <NavLink to={'/contact'}>
            contact
        </NavLink>

    </div>
  )
}

export default Navbar