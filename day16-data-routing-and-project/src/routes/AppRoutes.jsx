import React from 'react'
import {RouterProvider, createBrowserRouter} from 'react-router'
import Home from '../pages/Home'
import About from '../pages/About'
import MainLayout from '../layout/MainLayout'
import Auth from '../pages/Auth'

const AppRoutes = () => {

    let router = createBrowserRouter([
{
    path: '/',
    element :<MainLayout/>,
    children:[
        {

    path: '',
    element :<Home/>

        },
        {
            path: 'about',
            element:<About/>
        }
    ]
},
{
    path:'/auth',
    element:<Auth/>
}

    ])

  return <RouterProvider router={router} />
}

export default AppRoutes