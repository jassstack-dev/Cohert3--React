import {useState} from 'react'

const Form = () => {


    const [formData, setFormData] = useState({})

    console.log(formData)

    
  
    


  
const dataHandling = (e)=> {
    let {name, value} = e.target
    setFormData({...formData, [name] : value})
}



  return (
    <div className='flex flex-col gap-2 p-10 '>
        <input onChange={dataHandling}  className='border-2 rounded-2xl px-5 py-2 outline-0' type="text" name='name' placeholder='enter your name' />
        <input onChange={dataHandling} className='border-2 rounded-2xl px-5 py-2 outline-0' type="email" name='email' placeholder='enter your email' />
        <input onChange={dataHandling} className='border-2 rounded-2xl px-5 py-2 outline-0' type="text" name='password' placeholder='enter your password' />

        <h1>my name is {formData.name}</h1>
        <h1>my email is {formData.email}</h1>
        <h1>my password is {formData.password}</h1>

    </div>

    
  )
}

export default Form