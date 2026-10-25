import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByNum } from './features/CouterSlice'

const App = () => {

const disPatch = useDispatch()
  const {count} = useSelector((store)=> store.counter)


   const [inpData, setInpData] = useState(null)
   console.log(inpData)


  return (
    
   
    
  
<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 p-4">
  <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">
    <h3 className="mb-6 text-center text-2xl font-bold text-gray-800">
      Redux Toolkit Counter
    </h3>

    <p className="mb-6 rounded-xl bg-indigo-50 py-5 text-center text-3xl font-bold text-indigo-600">
      Count is {count}
    </p>

    <div className="mb-4 grid grid-cols-2 gap-3">
      <button
        onClick={() => disPatch(increment())}
        className="rounded-lg bg-green-500 px-4 py-3 font-semibold text-white transition hover:bg-green-600"
      >
        Increment
      </button>

      <button
        onClick={() => disPatch(decrement())}
        className="rounded-lg bg-red-500 px-4 py-3 font-semibold text-white transition hover:bg-red-600"
      >
        Decrement
      </button>
    </div>

    <button
      onClick={() => disPatch(incrementByNum(6))}
      className="mb-5 w-full rounded-lg bg-purple-500 px-4 py-3 font-semibold text-white transition hover:bg-purple-600"
    >
      Increment by 6
    </button>

    <input
      type="text"
      placeholder="Enter the num"
      value={inpData}
      onChange={(e) => setInpData(e.target.value)}
      className="mb-3 w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
    />

    <button
      onClick={() => disPatch(incrementByNum(Number(inpData)))}
      className="w-full rounded-lg bg-indigo-600 px-4 py-3 font-semibold text-white transition hover:bg-indigo-700"
    >
      Increment by Num
    </button>
  </div>
</div>

  )
}

export default App