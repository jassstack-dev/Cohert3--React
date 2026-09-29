import React from 'react'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import AuthLayout from '../layout/AuthLayout';
import Login from '../pages/login';
import Register from '../pages/Register';
import Dashboard from '../layout/Dashboard';
import ProtectedRoute from './ProtectedRoute';

const AppRoutes = () => {

    let router = createBrowserRouter([
        {
            path:'/',
            element: <AuthLayout/>,
            children:[
                {
                    path : "",
                    element: <Login/>
                },
                {
                    path: "register",
                    element:<Register/>
                }
            ]
        },
        {
            path:'/main',
            element:<ProtectedRoute/>,
            children : [
                {
                    path:'',
                    element:<Dashboard/>
                }
            ]
        }
    ])

    

  return (
    <RouterProvider router={router} />
  )
}

export default AppRoutes