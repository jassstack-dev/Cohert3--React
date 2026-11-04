 import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import AuthLayout from '../app/layouts/AuthLayout'
import LoginPage from '../features/auth/ui/pages/LoginPage'
import RegisterPage from '../features/auth/ui/pages/RegisterPage'
import PublicProtected from './PublicProtected'
import MainProtected from './MainProtected'
import MainLayout from '../app/layouts/MainLayout'
import Home from '../shared/ui/pages/Home'
import ProductPage from '../features/products/ui/pages/ProductPage'
import CartPage from '../features/cart/ui/pages/CartPage'
import OrderPage from '../features/order/ui/pages/OrderPage'
import { HydrateApi } from '../features/auth/api/authApi'
import { useDispatch } from 'react-redux'
import { addUser } from '../features/auth/state/authSlice'
 
 const AppRoutes = () => {

    const dispatch = useDispatch()

    useEffect(()=>{
(async()=>{
try{
    let response = await HydrateApi()
    console.log(response)
    dispatch(addUser(response))
}
catch(error){
    console.log('error in hydration', error)
}
})()
    },[])

const router = createBrowserRouter([
{
    path:'/',
    element:<PublicProtected/>,
    children:[
        {
            path:'',
            element:<AuthLayout/>,
            children:[
                {
            path:'',
            element:<LoginPage/>
        },
        {
            path:'register',
            element:<RegisterPage/> 
        }
            ]
        }
    ]    
},
{
    path:'/main',
    element:<MainProtected/>,
    children:[
        {
            path:'',
            element:<MainLayout/>,
            children:[
               {
                 path:'',
                 element:<Home/>
               },
               {
                path:'products',
                element:<ProductPage/>
               },
               {
                path:'cartpage',
                element:<CartPage/>
               },
               {
                path:'orderpage',
                element:<OrderPage/>
               }
            ]
        }
    ]
}
])

   return <RouterProvider router={router} />
 }
 
 export default AppRoutes