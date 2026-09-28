import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../pages/Home'
import About from '../pages/About'
import Products from '../pages/Products'
import Login from '../pages/Login'
import Details from '../pages/details'

const AppRoutes = () => {
  return (
    <Routes>
        <Route path={"/"} element={<Home/>} />
        <Route path={"/about"} element={<About/>} />
        <Route path={"/products"} element={<Products/>} />
        <Route path={"/login"} element={<Login/>} />
        <Route path={"/details/:id"}  element={<Details/>}/>
    </Routes>
  )
}

export default AppRoutes