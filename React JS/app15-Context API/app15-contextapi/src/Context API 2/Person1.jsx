import React, { useState } from 'react'
import Person2 from './Person2'

const Person1 = () => {
    const[message,setmessage]=useState("welcome to person-4 component")
  return (
    <div>
      <Person2 message={message}/>
    </div>
  )
}

export default Person1
