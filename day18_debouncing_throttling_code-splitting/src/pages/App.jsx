import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {

  const [data, setData] = useState([])
  const [searchData, setSearchData] = useState(null)
  const [scrollY, setScrollY] = useState(null)



let throttle = false


  const apiCall = async ()=>{
    try{
      const res = await axios.get('https://fakestoreapi.com/products')
      setData(res.data)
    }catch(error){
      console.log(error)
    }
  }


  let filteredData = ()=>{
    console.log('running....')
    const result = data.filter((val)=>{
      return val.title.toLowerCase().includes(searchData.toLowerCase())
    })
    

    setData(result)
  }

  useEffect(()=>{
    if(!searchData) return;
   let interval = setTimeout(()=>{
      filteredData()
    },700)

    return () => clearInterval(interval)
  },[searchData]) 

  useEffect(()=>{
    apiCall()
  },[]) 

//throttling...
useEffect(()=>{
  
  const handleScroll = ()=>{
    if(throttle) return;
    throttle = true
    console.log('scroll hua')
    setScrollY(window.scrollY)

    setTimeout(() => {
      throttle = false
    }, 5000);
  }
  window.addEventListener('scroll',handleScroll )

  return () => window.removeEventListener('scroll', handleScroll)
},[])






  return (

    <>
    <input type="text" placeholder='search here...' onChange={(e)=> setSearchData(e.target.value)} />

    {
      data.map((val)=>{
        return <p
         key={val.id} >{val.title}</p>
      })
    }
    </>
  )
}

export default App