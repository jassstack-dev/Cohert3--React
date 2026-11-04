import { useForm } from "react-hook-form"
import { Navigate, useNavigate } from "react-router"
import { loginUserApi } from "../api/authApi"
import { useDispatch } from "react-redux"
import { addUser } from "../state/authSlice"
import { toast } from "react-toastify"

export const useAuth = ()=>{
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {register, handleSubmit, reset, formState:{errors} } =useForm()

    const registerForm = (data)=>{
        console.log('register', data)
    }
    
    const loginForm = async (data)=>{
        try{
            let response = await loginUserApi(data)
            dispatch(addUser(response))
            toast.success('user logged in')
            
        }catch(error){
            console.log('error in loginUserApi', error)
        }
    }



    return {
        navigate,
        register,
        errors,
        handleSubmit,
        registerForm,
        loginForm 
    }
}