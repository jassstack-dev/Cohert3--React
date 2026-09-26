import React, { useEffect, useState } from 'react'

const About = () => {
   

let interval = setInterval(()=>{
  console.log('about page chala mai ')
},1000)

useEffect(() => {
  
 console.log('about rendering')
  return () => {
    clearInterval(interval)
    console.log('about  page jaa chuka hai')
  }
}, [])

  

  return (
    <div>
     <h1>this is about section</h1>
    </div>
  )
}

export default About