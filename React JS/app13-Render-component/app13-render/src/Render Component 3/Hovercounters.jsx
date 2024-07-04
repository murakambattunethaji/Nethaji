import React, { useState } from 'react'

const Hovercounters = () => {
 
  return (
    <div>
      <br /> <br />
      <button className='btn btn-danger' onMouseOver={Hovercounter}>hover me</button>
      <h2>click counter {count} times</h2>
    </div>
  )
}

export default Hovercounters
