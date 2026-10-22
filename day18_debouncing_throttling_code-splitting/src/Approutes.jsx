import React, { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import App from './pages/App'
import MainLayout from './layout/MainLayout'
let About = lazy(()=> import('../src/pages/About'))
let Contact = lazy(()=> import('../src/pages/Contact'))


const Approutes = () => {

    const router = createBrowserRouter([
        {
            path:'/',
        element:<MainLayout/>,
        children:[
            {
                path:'',
                element:<App/>
            },{
                path:'about',
                element:(
                    <Suspense fallback={<h1>loading.....</h1>}>
                        <About/>
                    </Suspense>
                )
            },{
                path:"contact",
                element:<Contact/>
            }
        ]
        }
    ])

  return <RouterProvider router={router} />
}

export default Approutes