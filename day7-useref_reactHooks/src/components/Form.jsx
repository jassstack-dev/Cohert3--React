import React, { useRef, useState } from 'react'

const Form = () => {

    // let formRef = useRef({})

    console.log('rendering')

let formRef = useRef({})

const [products, setProducts] = useState([])
console.log(products)
   

    const submitHandle = (e)=>{
e.preventDefault()



let  obj = {
    name : formRef.current.name.value,
    email :formRef.current.email.value,
    category :formRef.current.category.value,
    image: formRef.current.image.value
}

setProducts((prev)=> [...prev, obj])

    }



  return (
    <>
    <div className="form-container">
      <form  onSubmit={submitHandle} className="form">

        <h2>Product Form</h2>

        {/* Name */}
        <div className="form-group">
          <label>Name</label>
          <input
           ref ={(e)=> formRef.current.name = e}
            type="text"
            placeholder="Enter your name"
          />
        </div>

        {/* Email */}
        <div className="form-group">
          <label>Email</label>
          <input
             ref ={(e)=> formRef.current.email = e}
            type="email"
            placeholder="Enter your email"
          />
        </div>

        {/* Category */}
        <div className="form-group">
          <label>Category</label>
          <select ref={(e) => formRef.current.category = e} >

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
             ref ={(e)=> formRef.current.image = e}
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
      <div className='cards'>
        {
            products.map((e)=>{
                return <div className="card">

  <img
    src={e.image}
    alt="User"
    className="card-image"
  />

  <div className="card-content">
    <h3>{e.name}</h3>

    <p>
      <strong>Email:</strong> {e.email}
    </p>

    <p>
      <strong>Category:</strong> {e.category}
    </p>
  </div>

</div>
            })
        }
      </div>
    </>
    
  )
}

export default Form