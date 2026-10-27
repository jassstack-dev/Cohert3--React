import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import AuthLayout from '../layout/AuthLayout'
import Login from '../pages/Login'
import Register from '../pages/Register'
import PublicProtected from './protected/PublicProtected'
import MainLayout from '../layout/MainLayout'
import MainProteced from './protected/MainProtected'
import Main from '../pages/Main'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { addUser } from '../features/AuthSlice'
import Shop from '../pages/shop'
import About from '../pages/About'

const AppRoutes = () => {

    const disPatch = useDispatch()

    const hydrateUser= ()=>{
        console.log('hydrated User')
        const loggedInUSer = JSON.parse(localStorage.getItem('loginUserItem'))
        console.log(loggedInUSer)    

        // if(!loggedInUSer){
        //     toast.error('user not found use Valid email and password')
        //     return
        // }

        disPatch(addUser(loggedInUSer))
    }


    useEffect(()=>{
        hydrateUser()
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
                    path: '',
                    element:<Login/>
                },
                {
                    path:'register',
                    element:<Register/>
                }
            ]
                }
            ]
        },
        {
            path:"/main",
            element:<MainProteced/>,
            children:[
                {
                    path:'',
                    element:<MainLayout/>,
                    children:[
                        {
                            path:'',
                            element:<Main/>
                        },
                        {
                            path:'shop',
                            element:<Shop/>
                        },
                        {
                            path:'about',
                            element:<About/>
                        }
                    ]
                }
            ]
        }
    ])

  return <RouterProvider  router={router} />
}

export default AppRoutes 