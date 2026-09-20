import React from 'react'
import { useForm } from 'react-hook-form';

const RHF = () => {

    console.log('ref rendering')

const {register, handleSubmit, reset, formState: {errors}} = useForm()

const submitForm =(data) =>{
    console.log(data)
    
    reset()
}

  return (
    <div>
         <div className="form-container">
      <form  onSubmit={handleSubmit(submitForm)} className="form">

        <h2>Product Form</h2>

        {/* Name */}
        <div className="form-group">
          <label>Name</label>
          <input
           {...register('name')}
            type="text"
            placeholder="Enter your name"
          />
        </div>

        {/* Email */}
        <div className="form-group">
          <label>Email</label>
          <input
             {...register('email')}
            type="email"
            placeholder="Enter your email"
          />
        </div>

        {/* Category */}
        <div className="form-group">
          <label>Category</label>
          <select {...register('category')} >

            <option value="">Select Category</option>
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="food">Food</option>
          </select>
        </div>

        {/* Email */}
        <div className="form-group">
          <label>Image</label>
          <input
             {...register('image')}
            type="url"
            placeholder="Enter your image url"
          />
        </div>

     

        {/* Submit */}
        <button type="submit">
          Submit
        </button>

      </form>


    
    </div>
    </div>
  )
}

export default RHF