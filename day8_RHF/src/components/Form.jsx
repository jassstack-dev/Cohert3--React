

import {useForm } from 'react-hook-form';


const Form = ({setUser,setToggle}) => {

  const{
    register,
    handleSubmit,
    reset,
    formState: {errors}
  } =   useForm()

 



  function formSubmit(data){
   setUser((prev) => [...prev, data])
   setToggle(false)
   reset()
   
  }

  return (
    <div className="max-w-m mx-auto my-6 p-5 bg-white border border-gray-200 rounded-xl shadow-xs">
      <div className="mb-4">
        <h3 className="text-base font-semibold text-gray-900">New Entry</h3>
        <p className="text-xs text-gray-500">Quickly add details below.</p>
      </div>

      <form  onSubmit={handleSubmit(formSubmit)}  className="space-y-3">
        {/* Name */}
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
          {...register("name", {required:"name is required"})}
            type="text"
            placeholder="John Doe"
            className="w-full px-2.5 py-1.5 text-xs rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-600 focus:border-indigo-600"
          />
                
{errors.name && (
  <p className="text-red-500 text-xs mt-1">
    {errors.name.message}
  </p>
)}
        </div>

        {/* Email */}
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
          {...register("email", {required:"email is required", pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Please enter a valid email address"
      }
})}
            type="email"
            placeholder="john@example.com"
            className="w-full px-2.5 py-1.5 text-xs rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-600 focus:border-indigo-600"
          />
          {errors.email && (
  <p className="text-red-500 text-xs mt-1">
    {errors.email.message}
  </p>
)}
        </div>

        {/* URL */}
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Website URL
          </label>
          <input
          {...register("image",{required:"url is required"})}
            type="url"
            placeholder="https://example.com"
            className="w-full px-2.5 py-1.5 text-xs rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-600 focus:border-indigo-600"
          />
          {errors.image && (
  <p className="text-red-500 text-xs mt-1">
    {errors.image.message}
  </p>
)}
        </div>

        {/* Description */}
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">
            Description
          </label>
          <textarea
          {...register("description", {required:"description is required"})}
            rows="2"
            placeholder="Brief notes..."
            className="w-full px-2.5 py-1.5 text-xs rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-600 focus:border-indigo-600 resize-none"
          />
                {errors.description && (
  <p className="text-red-500 text-xs mt-1">
    {errors.description.message}
  </p>
)}
        </div>

        {/* Submit Button */}
        <button
       
          className="w-full mt-1 py-2 px-3 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-medium rounded-md shadow-xs transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;