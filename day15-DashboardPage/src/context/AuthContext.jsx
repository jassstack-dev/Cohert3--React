import { Children, createContext, useState } from "react";

export const MyStore = createContext()

export const AuthContext = ({children})=>{


    const [registerUser, setRegisterUser] = useState(()=>{
        const users = localStorage.getItem("registerUser");

    return users ? JSON.parse(users) : [];
    })
    console.log(registerUser)
    const [loggedInUser, setLoggedInUser] = useState(()=>{
        JSON.parse(localStorage.getItem('loggedInUser'))
    })

    return <MyStore.Provider value={{registerUser, setRegisterUser,loggedInUser, setLoggedInUser}} >
        {children}
    </MyStore.Provider>
}