import React, { useState } from 'react'

const Clickcounters = () => {
  const[count,setcount]=useState(0)

  const handleincreament=()=>{
    setcount(count + 1)
  }
  return (
    <div>
      <button className='btn btn-danger' onClick={handleincreament}>click me</button>
      <h2>Clickcounters {count} times</h2>
    </div>
  )
}

export default Clickcounters
