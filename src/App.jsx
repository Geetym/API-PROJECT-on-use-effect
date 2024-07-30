import React from 'react'
import Home from './Home'
import { useEffect, useState } from 'react'

const App = () => {
  const [name,setName] = useState("MAKLU")
  const [age,setAge] = useState("66")
  const [food,setFood] = useState("RICE")

  useEffect(() => {
console.log("hello")
  }, [age], [food])


  return (
    <div>
      <Home />

      <p>{name} is {age} and i love {food}</p>
      <button className='w-64 ml-4 bg-black text-white' onClick={() => setName("GODSTIME")}> change name </button>
      <button className='w-64 ml-4 bg-black text-white' onClick={() => setAge("77")}> change age </button>
      <button className='w-64 ml-4 bg-black text-white' onClick={() => setFood("BEANS")}> change food </button>
    </div>
  )
}

export default App