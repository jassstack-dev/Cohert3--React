
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { MyStore } from "../context/AuthContext";
import { toast } from "react-toastify";

const Register = () => {


    const {registerUser, setRegisterUser,setLoggedInUser} = useContext(MyStore)

    const { register, handleSubmit, reset, formState : { errors } } = useForm();
    
      function formSubmit(data){

        const isExist = registerUser.some((user)=> user.email === data.email)

        if(isExist){
            toast.error('user  is invalid')
            return
        }

    const arr = [...registerUser, data]

   
    setRegisterUser(arr)
    toast.success('user created successfully')
    setLoggedInUser('data')
    localStorage.setItem('loggedInUser', JSON.stringify(data))
    
    localStorage.setItem('registerUser', JSON.stringify(arr))
    
    navigate('/main')
      }
    


    const navigate = useNavigate()


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">

        {/* Heading */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Create Account
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Create your account to get started
          </p>
        </div>

        {/* Register Form */}
        <form onSubmit={handleSubmit(formSubmit)} className="space-y-5">

          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Name
            </label>

            <input
            {...register('name', {
                required:'name is required'
            })}
              type="text"
              id="name"
              
              placeholder="Enter your name"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-black focus:ring-1 focus:ring-black"
            />
             {errors.name && (
  <p className="mt-1 text-sm text-red-500">
    {errors.name.message}
  </p>
)}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Email
            </label>

            <input
            {...register('email', {
                required:'email is required'
            })}
              type="email"
              id="email"
            
              placeholder="Enter your email"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-black focus:ring-1 focus:ring-black"
            />
             {errors.email && (
  <p className="mt-1 text-sm text-red-500">
    {errors.email.message}
  </p>
)}
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Password
            </label>

            <input
            {...register('password', {
                required:'password is required'
            })}
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-black focus:ring-1 focus:ring-black"
            />
             {errors.password && (
  <p className="mt-1 text-sm text-red-500">
    {errors.password.message}
  </p>
)}
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-black py-3 font-medium text-white transition hover:bg-gray-800"
          >
            Create Account
          </button>

        </form>

        {/* Login Link */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Already have an account?{" "}
          <a
            onClick={()=>navigate('/')}
            className="font-medium cursor-pointer text-black hover:underline"
          >
            Login
          </a>
        </p>

      </div>
    </div>
  );
};

export default Register;

