import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { nanoid } from 'nanoid'

const Form = ({setToggle, setUser, user,UpdatedData}) => {



    const {
        register,
        handleSubmit,
        reset,
        formState ={errors}
    } = useForm({
        defaultValues:UpdatedData
    })


  
    const formSubmit = (data)=>{

if(UpdatedData){
    
        const updatedUser = user.map((val)=>{
            
            return val.id === UpdatedData.id ? {...data} : val
        })

        setUser(updatedUser)
        localStorage.setItem('user', JSON.stringify(updatedUser))
        


}else{
            let arr = [...user ,{...data, id:nanoid()}]
 setUser(arr)
localStorage.setItem('user', JSON.stringify(arr))
}


 setToggle(prev => !prev)
 reset()
             
    }


  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 flex justify-center items-center">
      <div className="w-full max-w-xl bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 sm:p-8">
        {/* Header */}
        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            Add New Product
          </h2>
          <p className="mt-1 text-sm text-slate-500">
            Fill in the details below to add or update an item.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(formSubmit)} className="space-y-5">
          {/* Title Field */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              Product Title
            </label>
            <input
            {...register('title', {
                required: "title is mandatory"
            })}
              type="text"
              placeholder="e.g. Wireless Noise-Canceling Headphones"
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Price Field */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              Price (₹)
            </label>
            <div className="relative rounded-lg">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-slate-400 text-sm">
                ₹
              </span>
              <input
              {...register('price', {
                required: "price is mandatory"
            })}
                type="number"
                placeholder="2499"
                className="w-full pl-8 pr-3.5 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Image URL Field */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              Image URL
            </label>
            <input
            {...register('image', {
                required: "url is mandatory"
            })}
              type="url"
              placeholder="https://images.unsplash.com/..."
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            />
          </div>

          {/* Description Field */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">
              Description
            </label>
            <textarea
            {...register('description', {
                required: "description is mandatory"
            })}
              rows="4"
              placeholder="Write a clear, concise overview of this product..."
              className="w-full px-3.5 py-2.5 rounded-lg border border-slate-200 bg-white text-slate-900 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
            />
          </div>

          {/* Buttons */}
          <div className="pt-2 flex items-center justify-end gap-3">
            <button
            onClick={function(){
                setToggle(prev => !prev)
            }}
             
              type="button"
              className="px-4 py-2 text-sm font-medium text-slate-600 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
            type="submit"
            
              className="px-5 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 active:scale-95 rounded-lg shadow-sm transition-all"
            >
              Save Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;